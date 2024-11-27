import React, { useState, useRef, useEffect } from "react";
import Window1 from "../window1/Window1";
import "bootstrap/dist/css/bootstrap.min.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const calculateSeconds = (dateString) => {
  const [year, month, day, hours = 0, minutes = 0] = dateString.split(/[-:]/).map(Number);
  return year * 31536000 + month * 2629746 + day * 86400 + hours * 3600 + minutes * 60;
};

function Table(props) {
  const [activeRowId, setActiveRowId] = useState(null);
  const rowRefs = useRef({});

  const now = new Date();
  const nowSeconds = calculateSeconds(
    `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}:${now.getHours()}:${now.getMinutes()}`
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeRowId !== null) {
        const activeRowRef = rowRefs.current[activeRowId];
        if (activeRowRef && !activeRowRef.contains(event.target)) {
          setActiveRowId(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeRowId]);

  if (!props.elements || !props.elements.length) {
    return <h1 className="text-center">Постов не найдено</h1>;
  }

  const renderRows = () =>
    props.elements.map((item) => (
      <CSSTransition key={item.id} timeout={1000} classNames="post">
        <tr
          ref={(el) => (rowRefs.current[item.id] = el)}
          className={activeRowId === item.id ? "table-active" : ""}
        >
          <td className="text-center">{item.id}</td>
          <td className="text-center">{item.name}</td>
          <td className="text-center">{item.origin}</td>
          <td
            onClick={(e) => {
              e.stopPropagation();
              setActiveRowId(item.id);
            }}
            className={`text-center ${
              item.status === "Доставлен"
                ? "table-success"
                : item.status === "В пути"
                ? "table-primary"
                : "table-warning"
            }`}
          >
            {activeRowId === item.id ? (
              <Window1
                value={item.status}
                onChange={(newStatus) => {
                  const departureSeconds = calculateSeconds(item.departureDate);
                  if (newStatus === "Доставлен" && nowSeconds < departureSeconds) {
                    alert("Невозможное действие! Несостыковка дат!");
                    return;
                  }
                  props.setCargoList((prevCargoList) =>
                    prevCargoList.map((cargoItem) =>
                      cargoItem.id === item.id
                        ? { ...cargoItem, status: newStatus }
                        : cargoItem
                    )
                  );
                  setActiveRowId(null);
                }}
                choice="Статус"
                vars={{
                  v1: "Ожидает отправки",
                  v2: "В пути",
                  v3: "Доставлен",
                }}
              />
            ) : (
              item.status
            )}
          </td>
          <td className="text-center">{item.departureDate}</td>
          <td className="text-center">{item.destination}</td>
        </tr>
      </CSSTransition>
    ));

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        width: "100%",
        marginTop: "20px",
      }}
    >
      <div className="table-responsive" style={{ width: "90vw" }}>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th className="text-center">Number</th>
              <th className="text-center">Name</th>
              <th className="text-center">Origin</th>
              <th className="text-center">Status</th>
              <th className="text-center">Date</th>
              <th className="text-center">Destination</th>
            </tr>
          </thead>
          <tbody>
            <TransitionGroup component={null}>{renderRows()}</TransitionGroup>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
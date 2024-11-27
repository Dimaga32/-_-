import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Input1 from "../../input1/input1";
import Window from "../../window/Window";

export default function CargoCreater(props) {
  const name = useRef(null);
  const data = useRef(null);
  const placef = useRef(null);
  const placet = useRef(null);
  const [er, setEr] = useState(false);

  if (!props.vis) {
    return null;
  }

  return (
    <div
      className="position-fixed d-flex justify-content-center align-items-center border"
      style={{
        top: "35vh",
        left: "50%",
        transform: "translateX(-50%)",
        width: "60vw",
        height: "30vh",
        padding: "10px",
        backgroundColor: "blueviolet", 
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        zIndex: 1050, 
      }}
    >
      <div className="d-flex flex-column w-100 h-100">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Input1
            className="form-control me-3"
            style={{ margin: "5px" }}
            ref={name}
            placeholder="Название груза"
          />
          <button
            className="btn btn-danger"
            onClick={() => props.setVis(false)}
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3 w-100">
          <Window
            marginr={10}
            ref={placet}
            choice="склад"
            vars={{
              v1: "Москва",
              v2: "Белгород",
              v3: "Воронеж",
              v4: "Калуга",
              v5: "Нальчик",
            }}
            className="form-select"
            width={"30%"}
            height={"6vh"}
            marginl={`10px`}
          />
          <Window
            marginr={10}
            ref={placef}
            choice="пункт назначения"
            vars={{
              v1: "Москва",
              v2: "Белгород",
              v3: "Воронеж",
              v4: "Калуга",
              v5: "Нальчик",
            }}
            className="form-select"
            width={"30%"}
            height={"6vh"}
          />
          <input
            type="date"
            ref={data}
            className="form-control text-center"
            style={{
              fontSize: "18px",
              width: "30%",
              height: "6vh",
              marginTop: `25px`,
              marginRight: `10px`
            }}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ height: "40px", width: "30%", fontSize: "18px"}}
            onClick={(e) => {
              e.preventDefault();
              if (
                !name.current.value ||
                !data.current.value ||
                !placet.current.value ||
                !placef.current.value
              ) {
                alert("Ошибка в заполнении! Выберите все поля!");
                return;
              }
              props.setVis(false)
              setEr(false);
              props.setCargoList([
                ...props.cargoList,
                {
                  id: `CARGO00${
                    Number(
                      props.cargoList[
                        props.cargoList.length - 1
                      ].id.replace("CARGO", "")
                    ) + 1
                  }`,
                  status: `Ожидает отправки`,
                  name: name.current.value,
                  departureDate: data.current.value,
                  destination: placet.current.value,
                  origin: placef.current.value,
                },
              ]);
              
            }}
          >
            Добавить груз
          </button>
        </div>
        {er && (
          <h3 className="text-danger mt-3 text-center">
            {er}
          </h3>
        )}
      </div>
    </div>
  );
}
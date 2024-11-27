import React, { useRef } from "react";
import Input1 from "../UI/input1/input1";
import Window from "../UI/window/Window";
import Window2 from "../UI/window2/Window2";
function Filter(props) {
  const data = useRef(``);
  return (
    <div
      className="border p-3 my-4"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "20px",
        marginTop: "20px",
        padding: "15px",
        border: "2px solid black",
      }}
    >
      <h1 className="mb-3" style={{ position: "relative", top: "-10px" }}>
        Поиск
      </h1>
      <Input1
        marginTop="0px"
        width="70vw"
        Change={(e)=>{props.setFilter({...props.filter,search:e.target.value})}}
        placeholder="Найти элемент"
        className="form-control mb-3"
        style={{
          width: "70vw", 
          height: "5vh", 
        }}
      />
      <div
        className="d-flex mb-3"
        style={{
          flexDirection: "row",
          width: "90vw", 
          gap: "25px", 
          justifyContent: "space-between",
        }}
      >
        <Window
          choice="склад"
          vars={{
            v1: "Москва",
            v2: "Белгород",
            v3: "Воронеж",
            v4: "Калуга",
            v5: "Нальчик",
          }}
          Change={(e) => {
           
            props.setFilter({ ...props.filter, origin: e.target.value });
          }}
          placeholder="id от"
          className="form-select"
          style={{
            width: "40%", 
            height: "5vh", 
            fontSize: "22px", 
          }}
        />
        <Window
          choice="пункт назначения"
          vars={{
            v1: "Москва",
            v2: "Белгород",
            v3: "Воронеж",
            v4: "Калуга",
            v5: "Нальчик",
          }}
          Change={(e) => {
            props.setFilter({ ...props.filter, destination: e.target.value });
          }}
          placeholder="id до"
          className="form-select"
          style={{
            width: "40%", 
            height: "5vh", 
            fontSize: "22px", 
          }}
        />
      </div>
      <div
        className="d-flex mb-3"
        style={{
          flexDirection: "row",
          width: "90vw", 
          gap: "25px",
          justifyContent: "space-between",
        }}
      >
        <Window2
          width="40%"
          fontSize="22px"
          choice="статус"
          vars={{
            v1: "Ожидает отправки",
            v2: "В пути",
            v3: "Доставлен",
          }}
          Change={(e) => {
            props.setFilter({ ...props.filter, status: e.target.value });
          }}
          placeholder="id от"
          className="form-select"
          style={{
            width: "40%",
            height: "5vh", 
            fontSize: "22px", 
          }}
        />
        <input
          type="date"
          className="form-control text-center"
          style={{
            marginTop:`15px`,
            fontSize: "25px", 
            height: "6vh", 
            width: "40%", 
            textAlign: "center",
          }}
          onChange={(e) => {
            props.setFilter({
              ...props.filter,
              departureDate: e.target.value,
            });
          }}
          placeholder="id до"
        />
      </div>
    </div>
  );
}

export default Filter;
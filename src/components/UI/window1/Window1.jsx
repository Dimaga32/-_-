import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 

const Window1 = (props) => {
  return (
    <select
      style={{
        marginTop: props.marginTop ? `${props.marginTop}px` : "0px",
        width: props.width || "100%",
        fontSize:  "inherit",
        textAlign: "center",
      }}
      value={props.value || ""}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
      className={`form-select ${props.className || ""}`} 
    >
      <option disabled value="">
        Выберите {props.choice}
      </option>
      <option value={props.vars.v1}>{props.vars.v1}</option>
      <option value={props.vars.v2}>{props.vars.v2}</option>
      <option value={props.vars.v3}>{props.vars.v3}</option>
    </select>
  );
};

export default Window1;
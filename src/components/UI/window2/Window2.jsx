import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Window2 = React.forwardRef((props, ref) => {
  return (
    <select
      ref={ref}
      onChange={props.Change}
      className={`form-select mt-3 ${props.marginr ? `me-${props.marginr}` : ""}`}
      style={{
        height: props.height || "auto",
        width: props.width || "100%",
        fontSize: props.fontSize || "inherit",
        textAlign: "center",
      }}
    >
      <option value="" selected>
        Выберите {props.choice}
      </option>
      <option value={props.vars.v1}>{props.vars.v1}</option>
      <option value={props.vars.v2}>{props.vars.v2}</option>
      <option value={props.vars.v3}>{props.vars.v3}</option>
    </select>
  );
});

export default Window2;
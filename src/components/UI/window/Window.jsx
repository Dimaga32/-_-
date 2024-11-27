import React, { forwardRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Window = forwardRef((props, ref) => {
  const { style, className, width, height, fontSize, marginTop, marginr,marginl, ...restProps } = props;
  return (
    <select
      ref={ref}
      onChange={props.Change}
      className={`form-select ${className || ""}`}
      style={{
        marginRight: marginr ? `${marginr}px` : "0px", 
        marginLeft: marginl? `${marginr}px` : "0px",
        height: height || "auto",
        width: width || "40%",
        fontSize: fontSize || "22px", 
        marginTop: marginTop || "25px", 
        textAlign: "center",
      }}
    >
      <option value="" selected>
        Выберите {props.choice}
      </option>
      {Object.values(props.vars).map((value, index) => (
        <option key={index} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
});

export default Window;
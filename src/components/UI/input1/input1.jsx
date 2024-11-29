import React, { forwardRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Input1 = forwardRef((props, ref) => {
  const { style, className, width, height, fontSize, marginTop, marginRight, ...restProps } = props;

  return (
    <input
      ref={ref}
      onChange={props.Change}
      type="text"
      className={`form-control text-center ${className || ""}`} 
      style={{
        ...style, 
        width: width || "50vw",
        height: height || "5vh",
        fontSize: fontSize || "25px",
        marginTop: marginTop || "25px",
        marginRight: marginRight || "10px",
        textAlign: "center",
      }}
      {...restProps} 
    />
  );
});

export default Input1;
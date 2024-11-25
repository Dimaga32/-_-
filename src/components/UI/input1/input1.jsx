import React,{useRef} from "react";
import classes from "./Input1.module.css"
const Input1= React.forwardRef(({children, ...props},ref)=>{
    return(<input ref={ref} onChange={props.Change} className={classes.input} type="text" {...props}/>)
    
})
export default Input1
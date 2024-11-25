import React from "react";
import classes from "./loader.module.css"
function Loader(){
return(<div style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
    <div className={classes.loader}></div>
</div>)
}
export default Loader
import React from "react";
import Input1 from "../UI/input1/input1";
function Filter(props){
    return(
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center",justifyContent:'center'}}>
            <Input1 Change={(e)=>{props.setFilter({...props.filter,search:e.target.value})}}
          placeholder="Найти элемент" style={{marginBottom:`${20}px`, }}/>
          <div style={{display:"flex",flexDirection:"row", width:90+"vw", gap:25}}>
          <Input1 Change={(e)=>{props.setFilter({...props.filter,minID:e.target.value})}}
          placeholder="id от" style={{marginBottom:20}}/>
          <Input1 Change={(e)=>{props.setFilter({...props.filter,maxID:e.target.value})}}
          placeholder="id до" style={{marginBottom:20}}/>
          </div>
        </div>
    )
}
export default Filter
import React from "react";
import Input1 from "../../input1/input1";
import clases from "../css/nameCreater.module.css"
class NameCreater extends React.Component{
    constructor(props){
        super(props)
        this.state={n:"asdcasdasxcz"}
        this.name=React.createRef()
        
    }

    render(){
        return(<div className={clases.box} style={{display:"flex", marginBottom:15+"px", alignItems:"center", justifyContent:"center"}}>
            <Input1 ref={this.name} placeholder={"Имя"} style={{margin:15+"px"}}/>
            <button onClick={()=>{if(!this.name.current.value){return}
            this.props.setNames([...this.props.names,{id:(this.props.names[this.props.names.length-1].id+1),name:this.name.current.value}])}} 
            style={{width:10+"vw",fontSize:20, height:5+"vh"}}>Добавить</button>
        </div>)
    }
}
export default NameCreater
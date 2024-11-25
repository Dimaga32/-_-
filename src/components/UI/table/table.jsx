import React from "react";
import classes from "./table.module.css"
import { CSSTransition, TransitionGroup } from 'react-transition-group'
function Table(props){
    if(!props.elements[0]){return(
        <h1>Постов не найдено</h1>
    )}
    const tableEls=(props)=>{
        var d=[]
        for(var i of props.elements)
        {
            d.push(<CSSTransition key={i.id} timeout={1000} classNames="post">
            <tr className={classes.tr}>
            <td className={classes.el}>{i.id}</td>
            <td className={classes.el}>{i.name}</td>
            <td className={classes.button_el}><button data-id={i.id} className={classes.button}
            onClick={
                (e)=>{
                        props.setNames([...props.names].filter((el)=>el.id!=e.target.dataset.id))
                    }}
            >✕</button ></td>
            </tr></CSSTransition>)
        }
        return(d)
}
const idbacksort=()=>{props.setFilter({...props.filter,sort:1})}
const idsort=()=>{props.setFilter({...props.filter,sort:2})}
const namebacksort=()=>{props.setFilter({...props.filter,sort:3})}
const namesort=()=>{props.setFilter({...props.filter,sort:4})}
    return(
<table  className={classes.table}><tbody>
<tr>
    <th onDoubleClick={idbacksort} onClick={idsort} className={`${classes.el} ${classes.head}`}>Number</th>
    <th onDoubleClick={namebacksort} onClick={namesort} className={`${classes.el} ${classes.head}`}>Name</th>
    <th className={classes.button_el}></th>
</tr>

<TransitionGroup component={null}>
{tableEls(props)}
</TransitionGroup>
    </tbody></table>
)
}
export default Table 
import s from './users.module.css'
import { NavLink } from "react-router-dom";
import React from "react";

const DialogsItem = (props) =>{
    let path = "/dialogs/" + props.id;
    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export const Users = (props) =>{
    let dialogsElement = props.dialogsData
    .map( el =><DialogsItem name={el.name} id={el.id} />)
    return(
        <div className={s.dialogsItems}>
            {dialogsElement}
        </div>
    )
} 

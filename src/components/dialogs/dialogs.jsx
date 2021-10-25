import React from "react";
import { NavLink } from "react-router-dom";
import s from "./dialogs.module.css"

const DialogsItem = (props) =>{
    let path = "/dialogs/" + props.id;
    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) =>{
    return(
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) =>{
    let dialogsElement = props.state.dialogsData
        .map( el =><DialogsItem name={el.name} id={el.id} />)
    let messagesElement = props.state.messagesData
        .map(el =><Message message={el.message} />)
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}
export default Dialogs
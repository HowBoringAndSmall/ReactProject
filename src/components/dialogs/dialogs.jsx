import React from "react";
import s from "./dialogs.module.css"
import { Message } from "./messages/message";
import { Users } from "./users.jsx/users";


const Dialogs = (props) =>{
    return(
        <div className={s.dialogs}>
            <Users dialogsData={props.state.dialogsData} />
            <Message state={props.state} dispatch={props.dispatch} />
        </div>
    )
}
export default Dialogs
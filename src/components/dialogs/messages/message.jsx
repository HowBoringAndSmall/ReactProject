import s from './message.module.css'
import React from "react";
import { addMessageActionCreator, updateMessageActionCreator } from '../../../redux/dialogs-reducer';

const MessagesItem = (props) =>{
    return(
        <div className={s.message}>{props.message}</div>
    )
}

export const Message = (props) =>{
    let messagesElement = props.state.messagesData
    .map(el =><MessagesItem message={el.message} />)

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onUpdateMessage = () => {
        props.dispatch(updateMessageActionCreator(newMessageElement.current.value))
    }


    return(
        <div className={s.messages}>
            {messagesElement}
            <div>
                    <textarea ref={newMessageElement} value={props.state.newMessageText} onChange={onUpdateMessage}/>
                </div>
            <div>
                    <button onClick={addMessage}>Send Message</button>
            </div>
        </div>
    )
}
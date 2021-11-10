const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'

const DialogReducer = (state, action) =>{
    switch(action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            state.messagesData.push(newMessage); 
            state.newMessageText = '';
            return state
        case UPDATE_MESSAGE:
            state.newMessageText = action.text;
            return state
        default:
            return state

    }
}   

export const addMessageActionCreator = () =>({type:ADD_MESSAGE})
export const updateMessageActionCreator = (text) =>({type:UPDATE_MESSAGE, text: text})

export default DialogReducer
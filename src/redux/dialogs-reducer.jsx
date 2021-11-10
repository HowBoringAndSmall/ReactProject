const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'


let initialState = {
    dialogsData:[
        {id: "1", name:"Dima", key: 0},
        {id: "2", name:"Katya", key: 1},
        {id: "3", name:"Lina", key: 2},
        {id: "4", name:"Bogdan", key: 3},
        {id: "5", name:"Kolya", key: 4}
    ],
    messagesData:[
        {id: 1, message: "Prive"},
        {id: 2, message: "Prive"},
        {id: 3, message: "Prive"},
        {id: 4, message: "Prive"}
    ],
    newMessageText: 'Hello'
}
const DialogReducer = (state = initialState, action) =>{
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
import DialogReducer from "./dialogs-reducer"
import ProfileReducer from "./profile-reducer"


let store = {
    _state : {
        profilePage: {
            postData: [
                {id: 1, message:'My first post', likesCount: 2},
                {id: 2, message:'My second post', likesCount: 5},
                {id: 3, message:'My third post', likesCount:4}
            ],
            newPostText:'Hi, everyone'
        },
        messagesPage:{
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
        },
        sidebar:{
            friends: [
                {id:1, name:"Vanya"},
                {id:2, name:"Sveta"},
                {id:3, name:"Kostya"}
            ]
        }
    },
    _callSub(){
        console.log('state was change')
    },
    getState(){
        return this._state
    },
    subscribe(callback) {
        this._callSub = callback
    },
    dispatch(action) {

        this._state.profilePage = ProfileReducer(this._state.profilePage, action)

        this._state.messagesPage = DialogReducer(this._state.messagesPage, action)


        this._callSub(this._state)
    }
}
export default store;
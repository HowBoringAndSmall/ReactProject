const ADD_POST = 'ADD-POST'
const UPDATE_POST = 'UPDATE-POST'


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
                {id: 1, message: "Prive"},
                {id: 1, message: "Prive"},
                {id: 1, message: "Prive"}
            ]
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
        if(action.type === ADD_POST ){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSub(this._state);
        } else if(action.type=== UPDATE_POST){
            this._state.profilePage.newPostText = action.text;
            this._callSub(this._state);
        }
    }
}

export const addPostActionCreator = () =>{
    return{
        type: ADD_POST
    }
}

export const updatePostActionCreater = (text) =>{
    return{
        type: UPDATE_POST,
        text: text
    }
}


export default store;
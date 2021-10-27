import {renderEntireTree} from '../render'

let state = {
    profilePage: {
        postData: [
            {id: 1, message:'My first post', likesCount: 2},
            {id: 2, message:'My second post', likesCount: 5},
            {id: 3, message:'My third post', likesCount:4}
        ]
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
}

export let addPost = (postMessage) =>{
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.postData.push(newPost)
    renderEntireTree(state);
}

export default state;
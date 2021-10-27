let renderEntireTree = () =>{
    console.log('state was change')
}
let state = {
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
}
export const subscribe = (callback) =>{
    renderEntireTree = callback
}

export const addPost = () =>{
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.postData.push(newPost)
    state.profilePage.newPostText = ''
    renderEntireTree(state);
}
export const updatePost = (text) =>{
    state.profilePage.newPostText = text;
    renderEntireTree(state);
}

export default state;
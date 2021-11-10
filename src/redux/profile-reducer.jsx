const ADD_POST = 'ADD-POST'
const UPDATE_POST = 'UPDATE-POST'

let initialState = {
        postData: [
            {id: 1, message:'My first post', likesCount: 2},
            {id: 2, message:'My second post', likesCount: 5},
            {id: 3, message:'My third post', likesCount:4}
        ],
        newPostText:'Hi, everyone'
}

const ProfileReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.postData.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_POST:
            state.newPostText = action.text;
            return state
        default:
            return state
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostActionCreater = (text) =>({type: UPDATE_POST, text: text});


export default ProfileReducer
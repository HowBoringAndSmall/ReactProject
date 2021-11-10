const ADD_POST = 'ADD-POST'
const UPDATE_POST = 'UPDATE-POST'

const ProfileReducer = (state, action) =>{
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
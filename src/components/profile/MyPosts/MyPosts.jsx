import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import React from "react"
import { addPostActionCreator, updatePostActionCreater } from "../../../redux/profile-reducer"



const MyPosts = (props) =>{
    let postElement = props.posts.map(el => <Post message={el.message} likesCount = {el.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () =>{
        props.dispatch(addPostActionCreator());
    }
    let onPostchange = () =>{
        props.dispatch(updatePostActionCreater(newPostElement.current.value));
    }

    return(
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostchange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )

}
export default MyPosts
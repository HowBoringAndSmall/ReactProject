import s from './profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) =>{
    return(
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts posts={props.state.postData}
                    newPostText={props.state.newPostText}
                    updatePost={props.updatePost}
                    addPost={props.addPost} />
        </div>
    )
}
export default Profile;
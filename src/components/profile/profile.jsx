import s from './profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) =>{
    console.log(1)
    console.log(props.state)
    return(
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts posts={props.state.postData}
                    newPostText={props.state.newPostText}
                    dispatch={props.dispatch} />
        </div>
    )
}
export default Profile;
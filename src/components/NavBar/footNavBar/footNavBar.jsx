import s from "./footNB.module.css"
import Friends from "./Friends/Friends"

const FootNavBar = (props) =>{
    let friendsData = props.friends.map(el=><Friends name={el.name} />)
    console.log(friendsData)
    return(
        <div className={s.wrapper}>
            <h1>Friends</h1>
            <div className={s.names}>{friendsData}</div>
        </div>
        

    )
}

export default FootNavBar
import s from "./Frineds.module.css"


const Friends = (props) =>{
    return(
        <div className={s.wrapper}>
            <div className={s.circle}>a</div>
            <p className={s.friend}>{props.name}</p>
        </div>
    )
}

export default Friends
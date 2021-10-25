import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import FootNavBar from './footNavBar/footNavBar'

const Navbar = (props) =>{
    return(
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messenger</NavLink>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settigns</a>
            </div>
            <div>
                <FootNavBar friends={props.state.friends}/>
            </div>
        </nav>
    )
}

export default Navbar
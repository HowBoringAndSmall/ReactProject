import s from './header.module.css';

const Header = () =>{
    return(
        <div className = {s.headerContainer}>
            <h1>Logo</h1>
            <div className = {s.images}>
                <img src="./Ghoul.jpg" alt="ghoul" />
            </div>
        </div>
    );
};
export default Header;
import style from "../styles/navbar.module.css";

const NavBar = () => {
    return ( 
        <div className={style.navbar}>
            <div className={`${style.nav} ${style.home}`}>home</div>
            <div className={`${style.nav} ${style.about}`}>about</div>
            <div className={`${style.nav} ${style.contact}`}>contact</div>
            <div className={`${style.nav} ${style.projects}`}>projects</div>
        </div>
     );
}
 
export default NavBar;
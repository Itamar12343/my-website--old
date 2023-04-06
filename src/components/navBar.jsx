import { useState } from "react";
import style from "../styles/navbar.module.css";

const NavBar = () => {
    const [width, setWidth] = useState(window.innerWidth);

    window.addEventListener("resize",()=>{
        setWidth(window.innerWidth);
    });
    return ( 
        <>
        {width < 536 && <button className={style["nav-btn"]}>menue</button>}
        <div className={style.navbar}>
            <div className={`${style.nav} ${style.home}`}>home</div>
            <div className={`${style.nav} ${style.about}`}>about</div>
            <div className={`${style.nav} ${style.contact}`}>contact</div>
            <div className={`${style.nav} ${style.projects}`}>projects</div>
        </div>
        </>
     );
}
 
export default NavBar;
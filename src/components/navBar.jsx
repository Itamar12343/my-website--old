import { useState } from "react";
import style from "../styles/navbar.module.css";

const NavBar = () => {
    const [width, setWidth] = useState(window.innerWidth);

    window.addEventListener("resize",()=>{
        setWidth(window.innerWidth);
    });

    function nav_btn_clicked(e){
       nav_btn_animation(e);
    }

    function nav_btn_animation(e){
        let btn = e.target;
        btn.style.backgroundColor = "rgb(255,255,255,0.4)";
        setTimeout(() => {
            btn.style.backgroundColor = "transparent";
        }, 300);
    }


    return ( 
        <>
        {width < 536 && <button className={style["nav-btn"]} onClick={nav_btn_clicked}>menue</button>}
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
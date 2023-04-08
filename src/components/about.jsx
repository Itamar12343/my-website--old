import { useRef, useState } from "react";
import style from "../styles/about.module.css";

const About = () => {
    const [imgref_animation, set_imgref_animation] = useState(false);

    const imgref = useRef(null);
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                set_imgref_animation(true);
            }else{
                set_imgref_animation(false);
            }
        });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.6
    });
    setTimeout(() => {        
        observer.observe(imgref.current);
    }, 1000);

    return ( 
        <div className={style.box}>
            <div style={{transform: imgref_animation ? window.innerWidth > 764 ? "scale(1)" : "translate(-50%,0) scale(1)" : window.innerWidth > 764 ? "scale(0)" : "translate(-50%,0) scale(0)"}} className={style.img} ref={imgref}></div>
            <p className={style.text}>text</p>
        </div>
     );
}
 
export default About;
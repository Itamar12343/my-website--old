import { useRef } from "react";
import style from "../styles/about.module.css";

const About = () => {

    const imgref = useRef(null);
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                console.log(entry.intersectionRatio);
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
            <div className={style.img} ref={imgref}></div>
        </div>
     );
}
 
export default About;
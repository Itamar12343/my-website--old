import { useRef, useState } from "react";
import style from "../styles/about.module.css";

const About = () => {
    const [imgref_animation, set_imgref_animation] = useState(false);
    const text = "hey, my name is Itamar and I am 16 years old. I started when I was 14 and I learned wb development for 2 years. I am self tought and built a lot of projects, recently I learned react and started doing a litle bit of backend and webSockets but I am more focused at frontend development. I love coding and I have been doing it for fun and I built most of the projects for friends and family"
    const boxRef = useRef(null);
    const textElementRef = useRef(null);

    window.addEventListener("resize",()=>{
        boxRef.current.style.height = `${textElementRef.current.offsetHeight + 580}px`;
    });

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
        <div ref={boxRef} className={style.box}>
            <p ref={textElementRef} className={style.text}>{text}</p>
            <div style={{transform: imgref_animation ? window.innerWidth > 938 ? "scale(1)" : "translate(-50%,0) scale(1)" : window.innerWidth > 938 ? "scale(0)" : "translate(-50%,0) scale(0)"}} className={style.img} ref={imgref}></div>
        </div>
     );
}
 
export default About;
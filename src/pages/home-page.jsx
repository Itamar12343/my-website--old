import About from "../components/about";
import Background from "../components/backgtound";
import Bubble from "../components/bubble";
import NavBar from "../components/navBar";
//import style from "../styles/homePage.module.css";

const HomePage = () => {
    return ( 
        <div>
            <NavBar/>
            <Bubble/>
            <Background/>
            <About/>
        </div>
     );
}
 
export default HomePage;
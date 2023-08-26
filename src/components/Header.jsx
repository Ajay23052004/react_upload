// import { Link } from 'react-router-dom';
import { BrowserRouter, Router, Route, NavLink } from "react-router-dom";
import { Link } from "react-router-dom"; 
import Logo from '../images/dog.png'
import Services from "./Services.jsx";
import Btn from './Btn.jsx';


function Header(){
    return (
        <div className="nav-bar main">
            <img  class="logo" src={Logo} />  
            <ul class="nav-bar-c">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
            <Btn />
           
            
        </div>
    );
}



export default Header;
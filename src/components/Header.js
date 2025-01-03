import {LOGO_URL} from "../utils/constants"
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () =>{

    const [btnNameReact,setBtnNameReact] = useState("Login");

    return (<div className="header-container">
        <div className="logo">
            <img 
                src={LOGO_URL} 
                alt="Logo" 
                className="Logo" 
            />
        </div>
        <div className="nav-items">
            <ul >
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/about" >About Us</Link></li>
                <li>Cart</li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><button className="login-btn" onClick={()=>{
                    btnNameReact==="Login"?
                    setBtnNameReact("Logout"):setBtnNameReact("Login");
                }}>{btnNameReact}</button></li>
            </ul>
        </div>
    </div>
    );
};

export default Header;
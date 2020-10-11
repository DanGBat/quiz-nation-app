import React from 'react';
import Nav from "./Nav";
import './css/Header.css';
import { Link } from 'react-router-dom';
import logo from "../images/quizNationLogo.png";
import registerIcon from "../images/registerIcon.png";
import loginIcon from "../images/signInIcon.png";


const Header = () => (
    <div className="header">
        <div className="topHeader">
            <div className="logoDiv">
                <Link to="/"><img src={logo} className="mainLogo" /></Link>
            </div>
            <div className="signinRegisterDiv">
                <Link to="/Register"><img src={registerIcon} className="registerIcon" /></Link>
                <Link to="/Login"><img src={loginIcon} className="loginIcon" /></Link>
            </div>
        </div>
        <Nav />
        
    </div>
)

export default Header;

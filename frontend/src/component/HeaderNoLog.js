import React from 'react';
import Nav from "./Nav";
import './css/Header.css';
import { Link } from 'react-router-dom';
import logo from "../images/quizNationLogo.png";
import registerIcon from "../images/registerIcon.png";
import loginIcon from "../images/signInIcon.png";


const HeaderNoLog = () => (
    <div className="header">
        <div className="topHeader">
            <div className="logoDiv">
                <Link to="/"><img src={logo} alt="Logo" className="mainLogo" /></Link>
            </div>
            <div className="signinRegisterDiv">
                <Link to="/Register"><img src={registerIcon} alt="Register" className="registerIcon" /></Link>
                <Link to="/Login"><img src={loginIcon} alt="Login" className="loginIcon" /></Link>
            </div>
        </div>
        <Nav />
        
    </div>
)

export default HeaderNoLog;

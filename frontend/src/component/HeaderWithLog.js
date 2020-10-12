import React from 'react';
import Nav from "./Nav";
import './css/Header.css';
import { Link } from 'react-router-dom';
import logo from "../images/quizNationLogo.png";
import profileIcon from "../images/profileIcon.png";
import logoutIcon from "../images/logoutIcon.png";


const Header = () => (
    <div className="header">
        <div className="topHeader">
            <div className="logoDiv">
                <Link to="/"><img src={logo} className="mainLogo" /></Link>
            </div>
            <div className="signinRegisterDiv">
                <Link to="/Profile"><img src={profileIcon} className="profileIcon" /></Link>
                <Link to="/"><img src={logoutIcon} className="logoutIcon" /></Link>
            </div>
        </div>
        <Nav />
        
    </div>
)

export default Header;
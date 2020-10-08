import React from 'react';
import Nav from "./Nav";
import './css/Header.css'
import logo from "../images/quizNationLogo.png"


const Header = () => (
    <div className="header">
        <img src={logo} alt="Logo" height={30} width={230} />
        <Nav />
    </div>
)

export default Header;
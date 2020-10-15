import React from 'react';
import NavQuiz from "./NavQuiz";
import './css/Header.css';
import { Link } from 'react-router-dom';
import logo from "../images/quizNationLogo.png";
import profileIcon from "../images/profileIcon.png";
import logoutIcon from "../images/logoutIcon.png";
import { Component } from 'react';
import axios from 'axios';
import { Redirect} from 'react-router-dom'
import Profile from '../container/Profile';


class HeaderWithLog extends Component{

    // THIS CODE LOGS A USER OUT WITH REMOVING THE JWT AUTHENTICATION 
    // DOESNT FUNCTION ON THE HEADER YET


    // constructor(props) {
    //     super(props)
    //     this.state =  {
    //         logOut: false,
    //         pageisLoaded: false,
    //         isloggedIn: this.props
    //     };
    //   }

    //   logout = async() => {
    //     const res = await axios.post('/logout')
    //     console.log(res.data)
    //     this.setState({
    //         ...this.state,
    //         logOut: res.data.logout,
    //         pageisLoaded: true,
    //         isloggedIn: false
    //     })
    //     if (!this.state.logOut && this.state.pageisLoaded && this.state.isloggedIn) {
    //         return <Redirect to="/" />
    //     }
    //   }





    render(){
        return (
            <div className="header">
                <div className="topHeader">
                    <div className="logoDiv">
                        <Link to="/"><img src={logo} className="mainLogo" /></Link>
                    </div>
                    <div className="signinRegisterDiv">
                        <Link to="/Profile"><img src={profileIcon} className="profileIcon" /></Link>

                        {/* doesnt't function yet */}
                        <Link to="/"><img src={logoutIcon} className="logoutIcon" /></Link>

                    </div>
                </div>
                <NavQuiz />
                
            </div>
        )
    }
}

export default HeaderWithLog;
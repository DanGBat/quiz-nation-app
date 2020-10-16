import React, { Component } from 'react';
import HeaderWithLog from "../component/HeaderWithLog";
import Footer from "../component/Footer";
import axios from 'axios';
import { Redirect} from 'react-router-dom'
import { Link } from 'react-router-dom';
import profilePic from "../images/profilePic.jpg";
import '../component/css/Styles.css';
import '../component/css/Profile.css';


class ProfilePage extends Component{
    constructor(props) {
        super(props)
        this.state =  {
            userName: '',
            userEmail: '',
            isloggedIn: false,
            pageisLoaded: false,
            logOut: false,
        };
      }
      getAuth = async() => {
        const res = await axios.post('/isAuth')
        console.log(res.data)
        this.setState({
            ...this.state,
            isLoggedIn: res.data.auth,
            pageisLoaded: true,
            userName: res.data.userName,
            userEmail: res.data.userEmail
        })
    }

    logout = async() => {
        const res = await axios.post('/logout')
        console.log(res.data)
        this.setState({
            ...this.state,
            logOut: res.data.logout,
            pageisLoaded: true,
            isLoggedIn: false
        })
        if (!this.state.logOut && this.state.pageisLoaded && this.state.isloggedIn) {
            return <Redirect to="/" />
        }
      }


componentDidMount =() => {
    this.getAuth()
    // this.getData()
}

    render(){
        if (!this.state.isLoggedIn && this.state.pageisLoaded ) {
            return <Redirect to="/Register" />
        }
        return (
            <div>
                <HeaderWithLog />
            
                <h1>Hi {this.state.userName}</h1>
                <div className="profileBox">
                
                    <div className="profilePicture">
                    <Link to="/"><img src={profilePic} alt="Profile" className="Profile" /></Link>
                    </div>

                    <div className="profileInformation">
                        <h5>Email: {this.state.userEmail}</h5>
                        <h5>Hometown:</h5>
                        <h5>Favourite Subject:</h5>
                        <h5>Hobbies:</h5>
                    </div>
                <div className="profileButtonDiv">
                <button onClick={this.logout} type="submit">log Out</button>
                </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ProfilePage;
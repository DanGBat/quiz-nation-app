import React, { Component } from 'react';
import { Redirect} from 'react-router-dom'
import HeaderWithLog from "../component/HeaderWithLog";
import Footer from "../component/Footer";
import UserScore from "../component/UserScore";
import axios from 'axios';




class Profile extends Component{
    constructor(props) {
        super(props)
        this.state =  {
            welcome: '',
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
            pageisLoaded: true
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
            return <Redirect to="/" />
        }
        return (
            <div>
                <HeaderWithLog />
                <UserScore />
                <button onClick={this.logout} type="submit">log Out</button>
                <Footer />
            </div>
        )
    }
}

export default Profile;
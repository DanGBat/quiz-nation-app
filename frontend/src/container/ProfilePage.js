import React, { Component } from 'react';
import HeaderWithLog from "../component/HeaderWithLog";
import Footer from "../component/Footer";
import UserScore from "../component/UserScore";

class ProfilePage extends Component{

    render(){
        return (
            <div>
                <HeaderWithLog />

                <UserScore />

                <Footer />
            </div>
        )
    }
}

export default ProfilePage;
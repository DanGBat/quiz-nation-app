import React, { Component } from 'react';
import Header from "../component/Header";
import Footer from "../component/Footer";
import UserScore from "../component/UserScore";

class Profile extends Component{

    render(){
        return (
            <div>
                <Header />

                <UserScore />

                <Footer />
            </div>
        )
    }
}

export default Profile;
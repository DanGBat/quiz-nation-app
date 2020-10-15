import React, { Component } from 'react';
import HeaderNoLog from "../component/HeaderNoLog";
// import HeaderWithLog from "../component/HeaderWithLog";
import Footer from "../component/Footer";
import HomeText from "../component/HomeText";




class HomePage extends Component{
    
    render(){
        return (
            <div>
                <HeaderNoLog />

                <HomeText />

                <Footer />
            </div>
        )
    }
}

export default HomePage;
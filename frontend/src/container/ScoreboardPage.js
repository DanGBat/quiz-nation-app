import React, { Component } from 'react';
import HeaderNoLog from "../component/HeaderNoLog";
// import HeaderWithLog from "../component/HeaderWithLog";
import Footer from "../component/Footer";
import ScoreBoard from "../component/ScoreBoard";

class ScoreboardPage extends Component{
    
    render(){
        return (
            <div>
                <HeaderNoLog />

                <ScoreBoard />

                <Footer />
            </div>
        )
    }
}

export default ScoreboardPage;
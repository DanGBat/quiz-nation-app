import React, { Component } from 'react';
import HeaderNoLog from "../component/HeaderNoLog";
// import HeaderWithLog from "../component/HeaderWithLog";
import Footer from "../component/Footer";
import Scoreboard from "../component/ScoreBoard";

class ScoreBoard extends Component{
    
    render(){
        return (
            <div>
                <HeaderNoLog />

                <Scoreboard />

                <Footer />
            </div>
        )
    }
}

export default ScoreBoard;
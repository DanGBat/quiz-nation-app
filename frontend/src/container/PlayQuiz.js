import React, { Component } from 'react';
import HeaderWithLog from "../component/HeaderWithLog";
import Quiz from "../component/Quiz";
import Footer from "../component/Footer";

class PlayQuiz extends Component{
    
    render(){
        return (
            <div>
                <HeaderWithLog />

                <Quiz />

                <Footer />
            </div>
        )
    }
}

export default PlayQuiz;
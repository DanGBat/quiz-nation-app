import React, { Component } from 'react';
import HeaderWithLog from "../component/HeaderWithLog";
import QuizPlay from "../component/QuizPlay";
import Footer from "../component/Footer";
import Timer from "../component/Timer";

class QuizGetPage extends Component{
    
    render(){
        return (
            <div>
                <HeaderWithLog />
                <Timer />

                <QuizPlay />

                <Footer />
            </div>
        )
    }
}

export default QuizGetPage;
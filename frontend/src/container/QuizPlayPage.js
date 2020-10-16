import React, { Component } from 'react';
import HeaderWithLog from "../component/HeaderWithLog";
import QuizPlay from "../component/QuizPlay";
import Footer from "../component/Footer";

class QuizGetPage extends Component{
    
    render(){
        return (
            <div>
                <HeaderWithLog />

                <QuizPlay />

                <Footer />
            </div>
        )
    }
}

export default QuizGetPage;
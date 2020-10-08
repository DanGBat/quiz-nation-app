import React, { Component } from 'react';
import Header from "../component/Header";
import Quiz from "../component/Quiz";
import Footer from "../component/Footer";

class PlayQuiz extends Component{
    
    render(){
        return (
            <div>
                <Header />

                <Quiz />

                <Footer />
            </div>
        )
    }
}

export default PlayQuiz;
import React, { Component } from 'react';
import Header from "../component/Header";
import Footer from "../component/Footer";
import ScoreBoard from "../component/ScoreBoard";

class Home extends Component{
    
    render(){
        return (
            <div>
                <Header />

                <ScoreBoard />

                <Footer />
            </div>
        )
    }
}

export default Home;
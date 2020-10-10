import React, { Component } from 'react';
import Header from "../component/Header";
import Footer from "../component/Footer";
import LoginForm from '../component/LoginForm';

class Login extends Component{
    
    render(){
        return (
            <div>
                <Header />

                <LoginForm />

                <Footer />
            </div>
        )
    }
}

export default Login;
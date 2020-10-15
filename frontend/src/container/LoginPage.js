import React, { Component } from 'react';
import HeaderNoLog from "../component/HeaderNoLog";
import Footer from "../component/Footer";
import LoginForm from '../component/LoginForm';

class LoginPage extends Component{
    
    render(){
        return (
            <div>
                <HeaderNoLog />

                <LoginForm />

                <Footer />
            </div>
        )
    }
}

export default LoginPage;
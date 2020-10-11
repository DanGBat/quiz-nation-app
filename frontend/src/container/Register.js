import React, { Component } from 'react';
import HeaderNoLog from "../component/HeaderNoLog";
import Footer from "../component/Footer";
import RegisterForm from '../component/RegisterForm';

class Register extends Component{
    
    render(){
        return (
            <div>
                <HeaderNoLog />

                <RegisterForm />

                <Footer />
            </div>
        )
    }
}

export default Register;
import React, { Component } from 'react';
import Header from "../component/Header";
import Footer from "../component/Footer";
import RegisterForm from '../component/RegisterForm';

class Register extends Component{
    
    render(){
        return (
            <div>
                <Header />

                <RegisterForm />

                <Footer />
            </div>
        )
    }
}

export default Register;
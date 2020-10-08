import React, { Component} from 'react';
import Header from "../component/Header";
import Footer from "../component/Footer";
import axios from 'axios';
import './css/Styles.css';


class RegisterForm extends Component{
    constructor(props) {
        super(props)
        this.state =  {
            username: '',
            email: '',
            password: ''
        };
      }

      sendData = async(event) => {
          event.preventDefault()
          console.log("form submited")

          const body = JSON.stringify({
              userName: this.state.username,
              userEmai: this.state.email,
              userPassword: this.state.password
          });

          const config = {
              headers: {
                  'Content-Type': 'application/json'
              }
          }

          const res = await axios.post('/register', body, config)
          console.log(res.data)
      }

      updateUser = (event) => {
          console.log(event.target.value)
          this.setState ({
              ...this.state,
              [event.target.name]: event.target.value,
          })  
      }

  
    render(){
        console.log(this.state)
        return (
            <div className="registerFormDiv">
                    <form onSubmit={this.sendData}>
                        <label>UserName</label>
                        <input type="text" onChange={this.updateUser} name="username" />
                        <br></br>
                        <label>Email</label>
                        <input type="email" onChange={this.updateUser} name="email" />
                        <br></br>
                        <label>Password</label>
                        <input type="password" onChange={this.updateUser} name="password" />
                        <br></br>
                        <button type="submit">Register</button>
                    </form>
            </div>
        )
    }
}

export default RegisterForm;
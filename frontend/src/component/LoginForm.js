import React, { Component} from 'react'
import { Redirect} from 'react-router-dom'
import axios from 'axios';
import './css/Styles.css';
import './css/Login.css';


class LoginForm extends Component{
    constructor(props) {
        super(props)
        this.state =  {
            username: '',
            email: '',
            password: '',
            message: '',
            loggedIn: false
        };
      }

      sendData = async(event) => {
          event.preventDefault()
          console.log("form submited")

          const body = JSON.stringify({
              userName: this.state.username,
              userEmail: this.state.email,
              userPassword: this.state.password
          });

          const config = {
              headers: {
                  'Content-Type': 'application/json'
              }
          }

          const res = await axios.post('/login', body, config)
          console.log(res.data)
              this.setState({
                  ...this.state,
                  message: res.data.message
                })
                this.setState({
                    ...this.state,
                    loggedIn: res.data.success
                  })
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
        if (this.state.loggedIn == true) {
            return <Redirect to="/profile" />
        }
        return (
            
            <div className="loginFormDiv">
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
                        <button type="submit">Sign In</button>
                        {this.state.message
                        ? <h1>{this.state.message}</h1>
                        : null
                        }
                    </form>
            </div>
        )
    }
}

export default LoginForm;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './container/Home';
import Profile from './container/Profile';
import PlayQuiz from './container/PlayQuiz';
import Register from './container/Register';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="MainAppDiv">
          <Route exact path="/" component={Home} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/PlayQuiz" component={PlayQuiz} />
          <Route exact path="/Register" component={Register} />
        </div>
      </Router>
    )
  }
}

export default App;



//! BELOW IS ALL THE ORIGINAL CODE FROM THE LESSON

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./App.css";

// function App() {

// // initialising first state for football results
//   const [sport, setSport] = useState({
//     team1: "",
//     team2: "",
//     score: ""
//   })
// // initialising second state for Chuck Norris Joke
//   const [ joke, setJoke ] = useState("");

// // initialising thisr state for the form
//   const [ user, setUser ] = useState({
//     email: "",
//     password: ""
//   })

//   const [ users, setUsers ] = useState({

//   })

// // function that runs ONCE when the page is completely loaded
// // async doesn't work in 'useEffect' function so we need to create a dedicated function for API below.
//   useEffect( () =>{
//     // call the function getAllUsers inside this useEffect function
//     getAllUsers();
//     getApi();
//   }, []);

// // function dedicated to getting the API
// // talks to 'axios' that has been imported at the top
// // the proxy for myApi is setup in the package.json file
//   const getApi = async () => {
//     // const res = await axios.get("/myApi");
//     const res = await axios.get("https://api.chucknorris.io/jokes/random");
//     console.log(res.data);

//     setJoke(res.data.value);

//     // setSport({
//     //   team1: res.data.Team1,
//     //   team2: res.data.Team2,
//     //   score: res.data.Score
//     // })

//   }

// // update the state
//   const updateUser = (event) => {
//     console.log(event.target.value)

//     setUser({
// //spread operator ... to update/bring in current state (everything that was already there before it updates again)
//       ...user,
// //event.target.name is coming from the form / deciding which part of the state to update
//       [event.target.name]: event.target.value
//     })
//   }

// // function that is called when the submit button is clicked on the form
//   const sendData = async (event) => {
//     // event.preventDefault is a function that cancels the page being completely reloaded
//     event.preventDefault();
//     console.log("Form Submitted");
// // this is the object (BODY) that will be sent to the backend
//     const body = JSON.stringify({
//       userEmail: user.email,
//       userPassword: user.password
//     });
// // this is the datatype (CONFIG) information that will be sent to the backend
//     const config = {
//       headers: {
//         "Content-Type": "application/json"
//       }
//     }
// // send to a URL in the backend using the app.post method
// // need to specify URL / BODY / and data type
//     const res = await axios.post("/register", body, config);
//                       //axios... other methods include following
//                       //axios.delete - create a delete route ("/deleteUser")
//                       //axios.put to udate etc...
//       // logs registration data in the backend console
//       console.log(res.data);
//   }

// // get all users function that runs in the useEffect() function above.
// // It runs once after the whole page is loaded.
//   const getAllUsers = async () => {
//     const res = await axios.get("/getAllUsers")
//     console.log(res.data);

//   // save users in the current state by applying them to setUsers from being stored in res.data
//     setUsers(res.data.allDatabaseUsers)
//   }

// // console.logs to see the updated state have to come before the return and not inside the update state function
// console.log("My state is:");
// console.log(user);

//   return (
//     <div className="App">
//       {/* <h1>The Joke is: {joke}</h1>
//       <h1>Team 1: {sport.team1}</h1>
//       <h1>Score: {sport.score}</h1>
//       <h1>Team 2: {sport.team2}</h1> */}

//       <h1>{users.user1}</h1>
//       <h1>{users.user2}</h1>

// {/* update user function sends information to set user to update the state everytime there's a change*/}
//       <form onSubmit={sendData}>
//         <label>Email</label>
//         <input type = "email" onChange={updateUser} name="email"/>
//         <label>Password</label>
//         <input type = "password" onChange={updateUser} name="password"/>
//         <button type="submit">Register</button>
//       </form>

//     </div>
//   );
// }

// export default App;

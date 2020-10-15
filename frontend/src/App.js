import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import HomePage from './container/HomePage';
import ProfilePage from './container/ProfilePage';
import ScoreboardPage from './container/ScoreboardPage';
import QuizPlayPage from './container/QuizPlayPage';
import RegisterPage from './container/RegisterPage';
import LoginPage from './container/LoginPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="MainAppDiv">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Profile" component={ProfilePage} />
          <Route exact path="/Scoreboard" component={ScoreboardPage} />
          <Route exact path="/PlayQuiz" component={QuizPlayPage} />
          <Route exact path="/Register" component={RegisterPage} />
          <Route exact path="/Login" component={LoginPage} />
        </div>
      </Router>
    )
  }
}

export default App;
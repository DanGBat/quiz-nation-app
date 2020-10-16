import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from "../images/quizBanner.png";
import './css/Styles.css';
import './css/Home.css';

const HomeText = () => {

    return (
        <div className="homeTextDiv">

            <h1>Welcome to Quiz Nation</h1>
            <Link to="/"><img src={profilePic} alt="Profile" className="Profile" /></Link>
            <h2>Everyone Enjoys A Quiz</h2>
            <p>
                Please feel free to take one of our quizzes or just browse our Quiz App.
                Here at QuizNation we don't want to limit any users from having the ability to enjoy
                playing all our wonderfull quizzes.
                However, we do suggest, for a more taylored and enjoyable experience you sign up
                to be a part of the great QuizNation community.
            </p>

            <h2>Logged in Users</h2>
            <p>
                Being logged in gives you the abiliy to create a bespoke profile and connect
                with like minded quizzers from around the world.
                It also means that your quiz scores will be automatically subbmitted to our
                global scoreboard where you can see how well you are matched against all
                the other quiz loving users from the QuizNation community.
            </p>

        </div>
    )
}

export default HomeText;
import React from 'react';
import './css/Styles.css';
import './css/userScore.css';

const UserScore = () => {

    //! CODE TO PULL QUESTIONS FROM API AND DISPLAY BELOW OFR QUIZ PAGE

    return (
        <div className="profileDiv">

        <h2>Your profile</h2>

        <h3>Your Highest score is 7/10</h3>
        <h3>This took you 3 minutes 12 seconds</h3>

        </div>
    )
}

export default UserScore;
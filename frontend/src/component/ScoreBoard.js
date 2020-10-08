import React from 'react';
import './css/Styles.css';

const ScoreBoard = () => {

    //! CODE TO FIND TOP TEN USERS IN DATABASE AND THEN PASS THEM IN BELOW

    return (
    <div className="scoreBoardDiv">
        
        <h3>Leaderboard</h3>
        
        <ul>
            <li>Dave - 40pts - 1 minute 14 seconds</li>
            <li>John - 36pts - 1 minute 44 seconds</li>
            <li>Mike - 28pts - 1 minute 56 seconds</li>
            <li>Paul - 20pts - 2 minute 04 seconds</li>
            <li>Frank - 14pts - 1 minute 34 seconds</li>
            <li>Eric - 12pts - 2 minute 14 seconds</li>
            <li>Ron - 10pts - 1 minute 45 seconds</li>
        </ul>

    </div>
    )
}

export default ScoreBoard;
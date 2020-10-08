import React from "react";

const Results = ({score}) => (
    <div className="score-board">
        <div className="score">You scored {score} / 5 correct answers</div>
    </div>
)

export default Results
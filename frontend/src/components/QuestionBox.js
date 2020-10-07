import React, {useState} from "react";


const QuestionBox = ({ question, options, correctOption }) => {
    const [answers, setAnswer] = useState(options, correctOption);

    return (
        <div className="questionBox">
            <div className="question">{question}</div>
            {answers.map((text, incorrect_answers, correct_answer) => (
                <button key={incorrect_answers} className="answerBtn" onClick={() =>{
                    setAnswer([text]);
                }}>
                    {text}
                </button>    
            ))} 
        </div>
    );
};

export default QuestionBox;
import React, {useState} from "react";


const QuestionBox = ({ question, options, selected, correct}) => {
    const [answers, setAnswer] = useState(options);
    return (
        <div className="questionBox">
            <div className="question">
                {question}
            </div>
            {answers.map((text, index ) => (
                <button 
                key={index}
                className="answerBtn" 
                onClick={() =>{
                    setAnswer([text]);
                    selected(text)
                }}>
                    {text}
                </button>
            ))} 
        </div>
    );
};

export default QuestionBox;
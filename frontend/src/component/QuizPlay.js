import React, { useState } from 'react';
import axios from 'axios';
import './css/QuizPlay.css';


const QuizPlay = () => {


const time = 80085;
//!

//SET THE STATE OF THE CATEGORY AND DIFFICULTY
  const [ selectOptions, setSelectOptions ] = useState(
    {
    category: "",
    difficulty: ""
    }
  );
//SET THE STATE OF THE allQuizData VARIABLE
  const [ allQuizData, setAllQuizData ] = useState();
  const [ readyForQuiz, setReadyForQuiz ] = useState(false);
  // SET STATE OF FINAL ANSWERS
  const [ finalAnswers, setFinalAnswers ] = useState();
  //SET STATE FOR SCORE - DEFAULT AT ZERO
  const [ score, setScore ] = useState(0);


  //FINDS USERNAME FROM LOGGED IN USER
  // const [Name, setName ] = useState('')
  

//FUNCTION TO UPDATE THE OPTIONS THE USER HAS CHOSEN
  const optionsUpdate = (event) => {
      setSelectOptions({...selectOptions, [event.target.name]: event.target.value
    });
  };

//API CALL TO GE THE RELEVANT QUESTIONS AND ANSWERS
//PASS IN selectedOptions VARIABLE FOR USER CHOSEN ITEMS
  const getAPI = async (event) => {
    event.preventDefault();
    const res = await axios.get(`https://opentdb.com/api.php?amount=10&category=${selectOptions.category}&difficulty=${selectOptions.difficulty}&type=multiple`);
    // const res = await axios.get(`https://opentdb.com/api.php?amount=10&category=${selectOptions.category}&difficulty=${selectOptions.difficulty}&type=multiple&encode=url3986`);
    // const res = await axios.get(`https://opentdb.com/api.php?amount=10&category=${selectOptions.category}&difficulty=${selectOptions.difficulty}&type=multiple&encode=urlencoded`);

//ASSIGN ALL API DATA to allApiData VARIABLE
    let allApiData = res.data.results;
//SHUFFLE ANSWERS INTO shuffledAnswers VARIABLE
//PASS CORRECT ANSWER INTO A RANDOM POSITION
    allApiData.map(answ => {
      const shuffledAnswers = [...answ.incorrect_answers];
      shuffledAnswers.push(answ.correct_answer);
      shuffledAnswers.sort(() => Math.random() - 0.5);
      answ.shuffledAnswers = shuffledAnswers;
    });

    setAllQuizData(allApiData);
    setReadyForQuiz(true);
  }

  const saveAnswers = (qindex, answer) => {
  console.log(`Answer: ${answer} with Index: ${qindex} was chosen`);
  let answers = { ...finalAnswers };
  answers[qindex] = answer;
  setFinalAnswers(answers);
}


//FUNCTION TO FINISH THE QUIZ - UPDATE SCORE / TIMER / POST BACKEND
  const finishQuiz = async(event) => {
    event.preventDefault();
    let finalScore = 0;
    let userAnswers = { ...finalAnswers};
    let rightAnswers = allQuizData.map(object => object.correct_answer);
        for (var i = 0; i < 10; i++){
          if (userAnswers[i] === rightAnswers[i]) {
            finalScore++;
      }
      setScore(finalScore);
    }

//SEND SCORE / TIME TO DATABASE AND SHOW RESULTS MAYBE
//SET THE DATA TO JSON

//GET THE USERNAME OF THE LOGGED IN USER SENDS IT WITH THE QUIZ RESULTS
const res1 = await axios.post('/isAuthQuiz')
console.log(res1.data)
    const body = JSON.stringify({
        userName: res1.data.user,
        userScore: finalScore,
        userTime: time
    });
    
//PASS IT AS A HEADER
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    
    const res = await axios.post('/quizSubmit', body, config); 
    console.log(res.data)



    console.log(`Here is the body: ${body}`);        
}

  // console.log("Below state: allQuizdata");
  // console.log(allQuizData);
  // console.log("Below state: finalAnswers");
  // console.log(finalAnswers);
  // console.log("Below state: score");
  // console.log(score);
  // console.log("Below state: userFinalScore");
  // console.log(userFinalScore);


//IF WE'RE READY FOR THE QUIZ - DO ALL THE BELOW TO ORGANISE QUESTIONS AND ANSWERS
  let questions = null;
  if (readyForQuiz) {
    questions = allQuizData.map((quests, qindex) => {
    const answers = quests.shuffledAnswers.map((answ, aindex) => {
        return (
          <li key={aindex}>
            <label className = "container">{answ}
            <input value={answ} type="checkbox" onChange={(event) =>
              saveAnswers(qindex, event.target.value)} />
              <span className="checkmark"></span>
              </label>
          </li>
        )
      });
        return (
          <li key={qindex}>
            <div className="questionBox">
                {quests.question}
                </div>
            <div className="answerBox">
              <ul>
                {answers}
              </ul>
            </div>
          </li>
        )
      });
    }

// IF WE'RE READY FOR THE QUIZ - DISPLAY IT
// IF NOT - DISPLAY THE CHOOSE OPTIONS PAGE
        return (
          <div className="quizPlayForm">
            {readyForQuiz ?
                    <form onSubmit={finishQuiz}>
                        <ul>
                            {questions}
                        </ul>
                        <button type="submit">Finish Quiz</button>
                    </form>
                :
              <form className="quizChoiceForm" onSubmit={getAPI}>
                <label>
                  <h3>Please choose your difficulty:</h3>
                </label>
                  <select className="quizChoiceOptions" onChange={optionsUpdate} name="difficulty">
                  <option value="defaultValue" selected disabled hidden >please choose...</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                
                <label>
                  <h3>Please choose your category:</h3>
                </label>
                  <select className="quizChoiceOptions" onChange={optionsUpdate} name="category">
                    <option value="defaultValue" selected disabled hidden > please choose... </option>
                    <option value="9">General Knowledge</option>
                    <option value="10">Books</option>
                    <option value="11">Film</option>
                    <option value="12">Music</option>
                    <option value="13">Musicals and Theatre</option>
                    <option value="14">Television</option>
                    <option value="15">Video Games</option>
                    <option value="16">Board Games</option>
                    <option value="17">Science and Nature</option>
                    <option value="18">Computers</option>
                    <option value="19">Mathematics</option>
                    <option value="20">Mythology</option>
                    <option value="21">Sport</option>
                    <option value="22">Geography</option>
                    <option value="23">History</option>
                    <option value="24">Politics</option>
                    <option value="25">Art</option>
                    <option value="26">Celebrities</option>
                    <option value="27">Animals</option>
                    <option value="28">Vehicles</option>
                    <option value="29">Comics</option>
                    <option value="30">Gadgets</option>
                    <option value="31">Japanese Anime</option>
                    <option value="32">Cartoons and Animation</option>
                  </select>
                  <button type="submit" className="submit">Play the Quiz</button>
              </form>
              }
              </div>
  )
}

export default QuizPlay;

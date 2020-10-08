import React, { Component, useState } from 'react';
import axios from 'axios';
import QuestionBox from "./QuestionBox";
import Results from "./Results";

const Quiz = () => {

    //* ALEX - THINK YOUR QUIZ API CODE SHOULD GO HERE
    //! CODE TO PULL QUESTIONS FROM API AND DISPLAY BELOW FOR QUIZ PAGE

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state =  {
      questionBank: [],
      score: 0,
      responses: 0,
      count: 0
    };
  }

   getApi = async () => {
    const res =  await axios.get("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple");
    console.log(res.data.results); 
    this.setState({
      questionBank: res.data.results
    })

  }
        <h3>What is your quest</h3>
        <h2>A - B - C - D</h2>
        <h3>--------------</h3>

  computeAnswer = (incorrect_answers, correct_answer) => {
    if( incorrect_answers ===  correct_answer) {
      this.setState({
        score: this.state.score + 1
      })
    }
    this.setState({
      responses: this.state.responses < 10 ? this.state.responses +1 : 10
    })
  }

  componentDidMount() {
    this.getApi()
    this.myInterval = setInterval(() =>{
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)

  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
      
          <h1>timer {count}</h1>
      
        <div className="title">Quiz</div>
        {this.state.questionBank.length > 0 && 
        this.state.responses < 10 &&
          this.state.questionBank.map(
            ({question, correct_answer, incorrect_answers}) => 
            <QuestionBox 
              question={question} 
              options={incorrect_answers}
              correct ={correct_answer}
              key={question} 
              selected={incorrect_answers => this.computeAnswer(incorrect_answers, correct_answer)}
            />
          )}

          {this.state.responses === 10 ? (<Results score={this.state.score} />)
          : null}
          
      </div>

    );
  }
}
export default Quiz;
import React, {useEffect, useState} from 'react';
import './css/Styles.css';
import './css/Scoreboard.css';
import axios from 'axios';

const Scoreboard = () => {

const [quizResults, setQuizResults ] = useState([])
    //! CODE BELOW SIMILAR BUT FOR WHEN WE HAVE SETUP THE DATABASE

const getUsers = async ()  => {
    const res = await axios.get('/results')
    console.log(res.data)
    setQuizResults(res.data.users)
}

useEffect(() => {
    getUsers()
}, [])
//           <th>Name </th>
//           <th>Score </th>
//           <th>Time </th>
//         </tr>

const nameResults = quizResults.length > 0 && quizResults.map((user, index) => {
    return <li key={index}>{user.name}</li>
})

const scoreResults = quizResults.length > 0 && quizResults.map((user, index) => {
    return <li key={index}>{user.score}</li>
})
const timeResults = quizResults.length > 0 && quizResults.map((user, index) => {
    return <li key={index}>{user.time}</li>
})

//         </tr>
//         {{/each}}
//     </table>


    return (
    <div className="scoreBoardDiv">
        
        <h1>Our Top Quizzers</h1>
        
        <table className="userTable">
        <tbody>
        <tr>
          
          <th>Name </th>
          <th>Score </th>
          <th>Time </th>
        </tr> 
     
        <tr>    
            <td>{nameResults}</td>
            <td>{scoreResults}</td>
            <td>{timeResults}</td>
        </tr>
        
        </tbody>
        </table> 
    </div>
    )
}

export default Scoreboard;


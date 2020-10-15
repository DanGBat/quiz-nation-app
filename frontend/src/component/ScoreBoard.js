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
        
        <h1>Our Top Ten Quizzers</h1>
        
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
        <tr>    
            <td>Yogi Bear </td>
            <td>36pts </td>
            <td>2:24 </td>    
        </tr>
        <tr>    
            <td>Denzel Washington </td>
            <td>32pts </td>
            <td>1:14 </td>    
        </tr>
        <tr>    
            <td>Donald Trump </td>
            <td>31pts </td>
            <td>2:14 </td>    
        </tr>
        <tr>    
            <td>Father Christmas </td>
            <td>40pts </td>
            <td>2:54 </td>    
        </tr>
        <tr>    
            <td>Adam of Eternia </td>
            <td>27pts </td>
            <td>1:19 </td>    
        </tr>
        <tr>    
            <td>Tony Montana </td>
            <td>22pts </td>
            <td>2:11 </td>    
        </tr>
        <tr>    
            <td>Donald Trump </td>
            <td>22pts </td>
            <td>3:18 </td>    
        </tr>
        <tr>    
            <td>Butch Coolidge </td>
            <td>18pts </td>
            <td>1:14 </td>    
        </tr>
        <tr>    
            <td>Tooth Fairy </td>
            <td>5pts </td>
            <td>3:14 </td>    
        </tr>
        <tr>    
            <td>Frank The Tank </td>
            <td>0pts </td>
            <td>2:10 </td>    
        </tr>
        </tbody>
        </table> 
    </div>
    )
}

export default Scoreboard;


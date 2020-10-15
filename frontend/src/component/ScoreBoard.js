import React from 'react';
import './css/Styles.css';
import './css/Scoreboard.css';

const Scoreboard = () => {

    //! CODE TO FIND TOP TEN USERS IN DATABASE AND THEN PASS THEM IN BELOW
    //! CODE BELOW SIMILAR BUT FOR WHEN WE HAVE SETUP THE DATABASE


//     <div className="scoreBoardDiv">
//      <h3>Leaderboard</h3>
//         <tr>
//           <th>Name </th>
//           <th>Score </th>
//           <th>Time </th>
//         </tr>
        
//         {{#each dbUsers}}
//         <tr>
            
//             <td>{{this.name}} </td>
//             <td>{{this.score}} </td>
//             <td>{{this.time}} </td>
            
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
            <td>Marshall Mathers </td>
            <td>40pts </td>
            <td>1:35 </td>    
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


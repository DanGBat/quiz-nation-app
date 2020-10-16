import React from 'react';
import { Link } from 'react-router-dom';
import './css/Nav.css';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/Scoreboard'>Scoreboard</Link>
                </li>
                <li>
                    <Link to='/PlayQuiz'>Let's Quiz</Link>
                </li>
                {/* <li>
                    <Link to='/Register'>Register</Link>
                </li>
                <li>
                    <Link to='/Login'>Login</Link>
                </li> */}
            </ul>
        </nav>
    )
}

export default Nav

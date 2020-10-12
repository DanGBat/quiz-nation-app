import React from 'react';
import './App.css';

function App() {
    return ( 
        <div className = "App">
        </div>
    );
}

export default App;

import React, {useState} from 'react';
import DisplayComponent from './Components/DisplayComponent';
import BtnComponent from './Components/BtnComponent';
import './App.css';

function App() {
  const [time, setTime] = useState({s:0, m:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  
  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedS = time.s, updatedM = time.m;

  const run = () => {
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    return setTime({s:updatedS, m:updatedM});
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({s:0, m:0})
  };

  const resume = () => start();
  return (
    <div className="main-section">
     <div className="clock-holder">
          <div className="stopwatch">
               <DisplayComponent time={time}/>
               <BtnComponent status={status} resume={resume} reset={reset} stop={stop} start={start}/>
          </div>
     </div>
    </div>
  );
}

export default App;
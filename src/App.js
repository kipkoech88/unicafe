import './App.css';
import { useState, useEffect } from 'react';
import Statistics from './Statistics';
import Total from './Total'
import Average from './Average'
import Positive from './Positive' 

function App() {

  const[good, setGood]=useState(0);
  const[neutral,setNeutral]=useState(0);
  const [bad,setBad]=useState(0)

  const [hasFeedback,setFeedback]=useState(false)

  const handleGood=()=>{
    setGood(good+1)
    setFeedback(true)
  } 
  const handleNeutral=()=>{
    setNeutral(neutral+1)
    setFeedback(true)
  }
  const handleBad=()=>{
    setBad(bad+1)
    setFeedback(true)
  } 
  
  return (
    <div className="App">
      <h1>Give feedback</h1> 
      <button onClick={handleGood} >good</button>
      <button onClick={handleNeutral} >neutral</button>
      <button onClick={handleBad}>bad</button>
      
      <Statistics good={good} neutral={neutral} bad={bad} hasFeedback={hasFeedback} />
      {hasFeedback &&<Total good={good} neutral={neutral} bad={bad}/>}
      {hasFeedback &&<Average good={good} neutral={neutral} bad={bad}/>}
      {hasFeedback && <Positive good={good} neutral={neutral} bad={bad} />}
    </div>
  );
}

export default App;

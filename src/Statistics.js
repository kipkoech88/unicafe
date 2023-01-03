import React from 'react'

function Statistics({good,neutral,bad,hasFeedback}) {
  if(!hasFeedback){
    return (
      <>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad} </p>
    </div>
  )
}

export default Statistics
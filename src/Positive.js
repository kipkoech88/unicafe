import React from 'react'

function Positive({good,bad,neutral}) {
  const total=good+bad+neutral
  return (
    <div>
        <p>Positive {(good/total)*100} %</p>
    </div>
  )
}

export default Positive

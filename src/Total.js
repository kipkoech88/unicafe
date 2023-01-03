import React from 'react'

function Total({good,neutral,bad}) {
  return (
    <div>
      <p>all {good+neutral+bad}</p>
    </div>
  )
}

export default Total
import React from 'react'

function Average({good,neutral,bad}) {
  return (
    <div>
      <p>average {(good+neutral+bad)/3}</p>
    </div>
  )
}

export default Average
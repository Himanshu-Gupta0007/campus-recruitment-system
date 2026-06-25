import React from 'react'
import {useState} from 'react'

const App = () => {
  const [count , setcount] = useState(0)
  return (
    <button onClick={() => setcount(count + 1)}>
      count is {count}
    </button>
  )
}

export default App
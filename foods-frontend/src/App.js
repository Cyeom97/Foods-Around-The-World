import { useState, useEffect } from 'react'

import axios from 'axios'

function App() {
  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/foods')
      console.log(response)
    }
  }, [])

  return (
    <div className="App">
      <h1>All Foods are here</h1>
    </div>
  )
}

export default App

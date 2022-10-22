import { useState, useEffect } from 'react'

import axios from 'axios'

function App() {
  const [countries, updateCountries] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/countries')
      updateCountries(response.data)
    }

    apiCall()
  }, [])

  return (
    <div className="App">
      <header>
        <h1>All Foods are here</h1>
      </header>
      {countries.map((country) => (
        <div key={country._id}>
          <h1>{country.name}</h1>
          <img src={country.url} alt="country pics" />
        </div>
      ))}
    </div>
  )
}

export default App

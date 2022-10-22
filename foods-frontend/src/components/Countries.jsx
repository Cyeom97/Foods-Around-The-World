import { useState, useEffect } from 'react'
import axios from 'axios'

const Countries = () => {
    const [countries, updateCountries] = useState([])
  const [foods, updateFoods] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/countries')
      updateCountries(response.data)
    }

    apiCall()
  }, [])

  return (
    <div>
        <h1>Countries</h1>
        {countries.map((country) => (
        <div key={country._id}>
          <h1>{country.name}</h1>
          <img src={country.url} alt="country pics" />
        </div>
      ))}
    </div>
  )

  
}

export default Countries
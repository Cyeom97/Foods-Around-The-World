import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Countries from '../components/Countries'

const Home = () => {
  const [countries, updateCountries] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/countries')
      updateCountries(response.data)
    }

    apiCall()
  }, [])

  let navigate = useNavigate()

  const toFood = (_id) => {
    console.log(_id)
    navigate(`/countries/${_id}`)
  }

  return (
    <div>
      <h1>Countries</h1>
      <section className="container-grid">
        {countries.map((country) => (
          <Countries
            key={country._id}
            id={country._id}
            name={country.name}
            image={country.url}
          />
        ))}
      </section>
    </div>
  )
}

export default Home

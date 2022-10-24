import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const [countries, updateCountries] = useState([])
  let navigate = useNavigate()

  const showFoods = (_id) => {
    navigate(`${_id}`)
  }
  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/countries/')
      updateCountries(response.data)
    }

    apiCall()
  }, [])

  return (
    <div>
      <header></header>
      <h2>Countries</h2>
      <section className="container-grid">
        {countries.map((country) => (
          <div
            key={country._id}
            onClick={() => {
              showFoods(country._id)
            }}
          >
            <h2>{country.name}</h2>
            <img src={country.url} alt="country pics" />
          </div>
        ))}
      </section>
    </div>
  )
}

export default Home

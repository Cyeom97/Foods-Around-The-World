import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
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
      <header>
        <h2 className="nav-title font-face-mulish">Countries</h2>
        <nav className="navbar">
          <Link to="/foods">All Foods</Link>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <div className="countries">
        <h1 className="home-title font-face-playfair">
          <span>Famous Foods From</span>
          Around The World
        </h1>
        <section className="container-grid">
          {countries.map((country) => (
            <div
              key={country._id}
              onClick={() => {
                showFoods(country._id)
              }}
              className="box font-face-playfair"
            >
              <h2>{country.name}</h2>
              <img src={country.url} alt="country pics" className="img" />
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home

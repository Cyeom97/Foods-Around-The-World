import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

const CountryFood = () => {
  const [food, setFood] = useState([])
  const [country, setCountry] = useState([])
  let { id } = useParams()
  let navigate = useNavigate()

  const viewFood = (foodie) => {
    navigate(`${foodie}`)
  }

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`/country/${id}`)
      setFood(response.data)
    }
    apiCall()
  }, [id])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`/countries/${id}`)
      setCountry(response.data)
    }
    apiCall()
  }, [id])

  return (
    <div>
      <header>
        <h2 className="country-title font-face-mulish">{country.name}</h2>
        <nav className="navbar">
          <Link to="/">
            <em>Home</em>
          </Link>
          <Link to="/foods">
            <em>All Foods</em>
          </Link>
        </nav>
      </header>
      <section className="container-grid countryFood-grid">
        {food.map((nation) => (
          <div
            key={nation._id}
            className="box font-face-playfair"
            onClick={() => {
              viewFood(nation.name)
            }}
          >
            <h2>{nation.name}</h2>
            <img src={nation.url} alt={nation.name} className="img" />
          </div>
        ))}
      </section>
    </div>
  )
}

export default CountryFood

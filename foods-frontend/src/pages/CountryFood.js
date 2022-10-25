import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import FoodList from './FoodList'
import Home from './Home'

const CountryFood = (props) => {
  const [byCountry, updateByCountry] = useState('')
  const [food, setFood] = useState([])
  let { id } = useParams()

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`http://localhost:3001/country/${id}`)
      setFood(response.data)
    }
    apiCall()
  }, [id])

  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/foods">All Foods</Link>
      </nav>
      <section className="container-grid">
        {food.map((nation) => (
          <div key={nation._id} className="food">
            <h2>{nation.name}</h2>
            <img src={nation.url} alt={nation.name} />
            <h3>{nation.description}</h3>
          </div>
        ))}
      </section>
    </div>
  )
}

export default CountryFood

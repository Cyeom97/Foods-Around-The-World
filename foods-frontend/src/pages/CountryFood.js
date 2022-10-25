import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

const CountryFood = () => {
  const [food, setFood] = useState([])
  let { id } = useParams()
  let navigate = useNavigate()

  const viewFood = (foodie) => {
    navigate(`${foodie}`)
  }

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`http://localhost:3001/country/${id}`)
      setFood(response.data)
    }
    apiCall()
  }, [id])

  return (
    <div>
      <header>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/foods">All Foods</Link>
        </nav>
      </header>
      <section className="container-grid">
        {food.map((nation) => (
          <div
            key={nation._id}
            className="box"
            onClick={() => {
              viewFood(nation._id)
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

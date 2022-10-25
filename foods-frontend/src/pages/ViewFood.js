import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ViewFood = () => {
  const [aFood, setAFood] = useState([])
  let { id } = useParams()

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`http://localhost:3001/foods/${id}`)
      setAFood(response.data)
    }
    apiCall()
  }, [id])

  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/foods">All Foods</Link>
      </nav>
      <section className="grid-one">
        <h2>{aFood.name}</h2>
        <img src={aFood.url} alt={aFood.name} />
        <h3>{aFood.description}</h3>
      </section>
    </div>
  )
}

export default ViewFood

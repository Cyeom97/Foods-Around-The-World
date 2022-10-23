import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Food from '../components/Food'

const FoodList = () => {
  const [foods, updateFoods] = useState([])

  let navigate = useNavigate()
  let { foodId } = useParams()

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`http://localhost:3001/foods`)
      updateFoods(response.data)
    }

    apiCall()
  }, [foodId])

  const viewFood = (_id) => {
    navigate(`/foods/${_id}`)
  }

  return (
    <div>
      <h1>Foods</h1>
      {foods.map((food) => (
        <Food
          key={food._id}
          id={food._id}
          country={food.country}
          image={food.url}
          name={food.name}
          description={food.description}
        />
      ))}
    </div>
  )
}

export default FoodList

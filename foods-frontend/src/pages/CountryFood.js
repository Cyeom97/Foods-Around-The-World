import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import FoodList from './FoodList'
import Home from './Home'

const CountryFood = (props) => {
  const [byCountry, updateByCountry] = useState('')
  const [food, setFood] = useState([])
  let { id } = useParams()

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`http://localhost:3001/foods`)
      setFood(response.data)
    }
    apiCall()
  }, [])

  useEffect(() => {
    food.map((foods) => {
      if (parseInt(id) === parseInt(foods.country)) {
        updateByCountry(foods)
        console.log(foods.name)
      }
    })
  }, [])

  return (
    <div>
      <div>{byCountry.name}</div>
      <img src={byCountry.url} alt={byCountry._id} />
    </div>
  )
}

export default CountryFood

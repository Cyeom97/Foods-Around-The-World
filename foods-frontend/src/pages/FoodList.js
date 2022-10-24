import { useState, useEffect } from 'react'
import axios from 'axios'

const FoodList = () => {
  const [foods, updateFoods] = useState([])
  const [form, setForm] = useState({
    name: '',
    url: '',
    description: ''
  })

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`http://localhost:3001/foods`)
      updateFoods(response.data)
    }

    apiCall()
  }, [])

  const handleChange = (event) => {
    setForm({ ...form, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(form)
    let newFood = await axios.post('http://localhost:3001/foods', form)

    updateFoods([...foods, newFood.data])
    setForm({ name: '', url: '', description: '' })
  }

  const handleDelete = async (event) => {
    event.preventDefault()
    console.log(form)
    let deleteFood = await axios.delete('http://localhost:3001/foods:id', form)
    updateFoods([...foods, deleteFood.data])
    setForm({ name: '', url: '', description: '' })
  }

  return (
    <div className="foodPage">
      <h1>Foods</h1>
      <h2>Add another Food:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" value={form.name} onChange={handleChange}></input>
        <label htmlFor="url">Image URL:</label>
        <input id="url" value={form.url} onChange={handleChange}></input>
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          value={form.description}
          onChange={handleChange}
        ></input>
        <select id="selection">
          <option>USA</option>
          <option>CAN</option>
          <option>MEX</option>
          <option>CEN AM</option>
        </select>
        <button type="submit">Add Food</button>
      </form>

      {foods.map((food) => (
        <div key={food._id}>
          <h2>{food.name}</h2>
          <img src={food.url} alt={food.name} />
          <h3>{food.description}</h3>
          <h4>{food.country}</h4>
        </div>
      ))}
    </div>
  )
}

export default FoodList

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const FoodList = () => {
  const [foods, updateFoods] = useState([])
  const [nation, updateNation] = useState([])
  const [form, setForm] = useState({
    name: '',
    url: '',
    description: '',
    country: ''
  })

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`foods`)
      updateFoods(response.data)
    }

    apiCall()
  }, [])

  useEffect(() => {
    const nationCall = async () => {
      let response = await axios.get(`countries`)
      updateNation(response.data)
    }

    nationCall()
  }, [])

  const handleChange = (event) => {
    setForm({ ...form, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let newFood = await axios.post('foods', form)

    updateFoods([...foods, newFood.data])
    setForm({ name: '', url: '', description: '' })
  }

  return (
    <div>
      <header>
        <h1 className="nav-title font-face-mulish">Foods</h1>
        <nav className="navbar">
          <Link to="/">Home</Link>
        </nav>
      </header>

      <h2>Add another Food:</h2>
      <form onSubmit={handleSubmit} className="form-type">
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
        <select id="country" onChange={handleChange}>
          <option>Country</option>
          {nation.map((nationFood) => (
            <option value={nationFood._id} key={nationFood._id}>
              {nationFood.name}
            </option>
          ))}
        </select>
        <button type="submit">Add Food</button>
      </form>
      <section className="container-grid">
        {foods.map((food) => (
          <div key={food._id} className="box font-face-playfair">
            <h2>{food.name}</h2>
            <img src={food.url} alt={food.name} className="img" />
          </div>
        ))}
      </section>
    </div>
  )
}

export default FoodList

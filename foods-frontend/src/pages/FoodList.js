import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const FoodList = () => {
  const [foods, updateFoods] = useState([])
  const [form, setForm] = useState({
    name: '',
    url: '',
    description: '',
    country: ''
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
    let newFood = await axios.post('http://localhost:3001/foods', form)

    updateFoods([...foods, newFood.data])
    setForm({ name: '', url: '', description: '' })
  }

  return (
    <div>
      <header>
        <h1 className="nav-title">Foods</h1>
        <nav className="navbar">
          <Link to="/">Home</Link>
        </nav>
      </header>

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
        <select id="country" onChange={handleChange}>
          <option></option>
          <option value="6352b0b96dabb714d7bc6204">USA</option>
          <option value="6352b0cd6dabb714d7bc6207">CAN</option>
          <option value="6352b1086dabb714d7bc620b">MEX</option>
          <option value="6352b1476dabb714d7bc620e">CEN AM</option>
        </select>
        <button type="submit">Add Food</button>
      </form>
      <section className="container-grid">
        {foods.map((food) => (
          <div key={food._id} className="box">
            <h2>{food.name}</h2>
            <img src={food.url} alt={food.name} className="img" />
          </div>
        ))}
      </section>
    </div>
  )
}

export default FoodList

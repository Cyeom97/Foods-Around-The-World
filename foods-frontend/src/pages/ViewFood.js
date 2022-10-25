import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ViewFood = () => {
  const [aFood, setAFood] = useState([])
  const [form, setForm] = useState({
    name: '',
    url: '',
    description: ''
  })
  let { id } = useParams()

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`http://localhost:3001/foods/${id}`)
      setAFood(response.data)
    }
    apiCall()
  }, [id])

  const handleChange = (event) => {
    setForm({ ...form, [event.target.id]: event.target.value })
  }

  const handleUpdate = async (event) => {
    event.preventDefault()
    let updateFood = await axios.put(`http://localhost:3001/foods/${id}`, form)
    setAFood([aFood, updateFood.data])
    setForm({ name: '', url: '', description: '' })
  }

  const handleDelete = async (event) => {
    event.preventDefault()
    let deleteFood = await axios.delete(
      `http://localhost:3001/foods/${id}`,
      form
    )
    setAFood([aFood, deleteFood.data])
    setForm({ name: '', url: '', description: '' })
  }

  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/foods">All Foods</Link>
      </nav>
      <h2>Update the Food:</h2>
      <form onSubmit={handleUpdate}>
        <label htmlFor="name">Name:</label>
        <input id="name" value={form.name} onChange={handleChange}></input>
        <label htmlFor="url">url:</label>
        <input id="url" value={form.url} onChange={handleChange}></input>
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          value={form.description}
          onChange={handleChange}
        ></input>
        <button type="submit">Update Food</button>
      </form>
      <button onClick={handleDelete}>Delete</button>
      <section className="grid-one">
        <h2>{aFood.name}</h2>
        <img src={aFood.url} alt={aFood.name} />
        <h3>{aFood.description}</h3>
      </section>
    </div>
  )
}

export default ViewFood

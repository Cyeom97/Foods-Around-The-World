import { useState, useEffect } from 'react'
import axios from 'axios'

const Food = () => {
    const [foods, updateFoods] = useState([])

    useEffect(() => {
        const apiCall = async () => {
        let response = await axios.get('http://localhost:3001/foods')
        updateFoods(response.data)
        }

        apiCall()
    }, [])

    return (
        <div>
            <h1>Foods</h1>
            {foods.map((food) => (
                <div key={food._id}>
                    <h2>{food.name}</h2>
                    <img src={food.url} alt="food pics"/>
                    <h3>{food.description}</h3>
                </div>
            ))}
        </div>
    )
}

export default Food
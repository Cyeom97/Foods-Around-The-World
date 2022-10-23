import { useState, useEffect } from 'react'
import axios from 'axios'

const Nation = () => {
    const [oneNation, updateOneNation] = useState([])

    useEffect(() => {
        const apiCall = async () => {
            let response = await axios.get('http://localhost:3001/nation/:id')
            
            updateOneNation(response.data)
        }

        apiCall()
    }, [])


    return (
        <div>
            <h1>Hi</h1>
            {oneNation.map((food) => (
                <div>
                    <h2>{food.name}</h2>
                </div>
            ))}
        </div>
    )
}

export default Nation
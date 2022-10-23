import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Nation = () => {
    const [oneNation, updateOneNation] = useState([])

    let navigate = useNavigate()
    let { countryId } = useParams()
    
    useEffect( () => {
        const apiCall = async () => {
            let response = await  axios.get(`http://localhost:3001/countries/${countryId}`)
            updateOneNation(response.data)
        }

        apiCall()
    }, [countryId])
    
    const viewFood = (id) => {
        navigate(`/countries/${id}`)
    }
    


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
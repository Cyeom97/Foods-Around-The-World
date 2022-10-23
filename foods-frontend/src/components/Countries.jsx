import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Countries = () => {
    const [countries, updateCountries] = useState([])

    useEffect(() => {
        const apiCall = async () => {
        let response = await axios.get('http://localhost:3001/countries')
        updateCountries(response.data)
        }

        apiCall()
    }, [])

   let navigate = useNavigate()


   const toFood = (_id) => {
    console.log(_id)
    navigate(`/countries/:id`)
   }

    return (
        <div>
            <h1>Countries</h1>
            {countries.map((country) => (
            <div key={country._id}>
            <h1>{country.name}</h1>
            <img src={country.url} alt="country pics" onClick={toFood}/>
            </div>
        ))}
        </div>
    )

  
}

export default Countries
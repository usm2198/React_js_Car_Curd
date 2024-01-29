import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateCar() {
    const [car, setCar] = useState({name: '',color: '',price: '', rating: ''})
    const navigate = useNavigate()

    function handleChange(e) {
        setCar({...car,[e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        postCars()
    }

    async function postCars() {
        try {
            const {data} = await axios.post('https://carapiserivice.onrender.com/api/car', car)
            if (!data.errors) {
                alert('data saved successfully')
                navigate('/')
            }
        } catch (error) {
            console.log(error.message);
        }
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} type="text" className="form-control" name= 'name' placeholder='Enter car name' />

                    <input onChange={handleChange} type="text" className="form-control" name= 'color' placeholder='Enter car color' />

                    <input onChange={handleChange} type="text" className="form-control" name= 'price' placeholder='Enter car price' />

                    <input onChange={handleChange} type="text" className="form-control" name= 'rating' placeholder='Enter car rating' />

                    <input type="submit" value="save" className="btn btn-primary" />
                </form>
            </div>
            <div className="col-md-3"></div>
        </div>
    </div>
  )
}

export default CreateCar
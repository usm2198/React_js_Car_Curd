import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function UpdateCar() {
    const [car, setCar] = useState({_id: '',name: '',color: '',price: '', rating: ''})
    const navigate = useNavigate()
    const {state} = useLocation()
    const el = state

    useEffect(()=>{
        setCar({_id: el._id, name: el.name, color: el.color, price: el.price, rating: el.rating})
    },[])

    function handleChange(e) {
        setCar({...car,[e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        updateCars()
    }

    async function updateCars() {
        try {
            const {data} = await axios.put(`https://carapiserivice.onrender.com/api/car/${car._id}`, car)
            if (!data.errors) {
                alert('data updated successfully')
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
                    <input onChange={handleChange} type="text" className="form-control" name= 'name' placeholder='Enter car name' value={car.name} />

                    <input onChange={handleChange} type="text" className="form-control" name= 'color' placeholder='Enter car color' value={car.color}/>

                    <input onChange={handleChange} type="text" className="form-control" name= 'price' placeholder='Enter car price' value={car.price} />

                    <input onChange={handleChange} type="text" className="form-control" name= 'rating' placeholder='Enter car rating' value={car.rating} />

                    <input type="submit" value="save" className="btn btn-primary" />
                </form>
            </div>
            <div className="col-md-3"></div>
        </div>
    </div>
  )
}

export default UpdateCar
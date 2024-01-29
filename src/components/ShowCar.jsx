import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ShowCar() {
    const [cars, setCars] = useState([])
    const navigate = useNavigate()

    async function getCar() {
        try {
            const {data} = await axios.get('https://carapiserivice.onrender.com/api/car') 
            setCars(data.data)
        } catch (error) {
            console.log(error.message);
        }
    }

    async function deleteCars(id) {
        try {
            const {data} = await axios.delete(`https://carapiserivice.onrender.com/api/car/${id}`)
            if (!data.errors) {
                alert('data deleted successfully')
            }
            getCar()
        } catch (error) {
            console.log(error.message);
        }
    }

    function editData(el) {
        navigate('/car-update', {state:el})
    }

    useEffect(()=>{
        getCar()
    },[])
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Color</th>
                            <th>Price</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map((el)=>(
                            <tr key={el._id}>
                                <td>{el.name}</td>
                                <td>{el.color}</td>
                                <td>{el.price}</td>
                                <td>{el.rating}</td>
                                <td><button onClick={()=>{
                                    editData(el)
                                }} className="btn btn-dark">Edit</button></td>
                                <td><button onClick={()=>{
                                    deleteCars(el._id)
                                }} className="btn btn-danger">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="col-md-3"></div>
        </div>
    </div>
  )
}

export default ShowCar

import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import ShowCar from './components/ShowCar'
import CreateCar from './components/CreateCar'
import UpdateCar from './components/UpdateCar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <nav className='d-flex p-3 justify-content-between align-align-items-center'>
          <Link to=''>Show Car</Link>
          <Link to='/car-create'>Create Car</Link>
        </nav>
        <Routes>
          <Route path='' element={<ShowCar />} />
          <Route path='/car-create' element={<CreateCar />} />
          <Route path='car-update' element={<UpdateCar />} />
        </Routes>
        <footer className='text-center p-3'>@2023copyright</footer>
    </div>
  )
}

export default App

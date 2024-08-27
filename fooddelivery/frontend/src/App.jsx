
import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'


const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/Cart' element={<Cart />}/>
        <Route path='/order' element={<PlaceOrder />}/>
      </Routes>
      
    </div>
  )
}

export default App
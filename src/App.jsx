import React from "react"
import "./App.css"
import Navbar from "./Components/Navbar/Navbar.jsx"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartContextProvider } from './Context/CartContext.jsx'
import Cart from "./Components/Cart/Cart.jsx"
import Checkout from './Components/Checkout/Checkout.jsx'

function App() {

  return (
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer 
            titulo="Junior Sport"
            texto="Tools for Digital Nomads"
          />} />
          <Route path='/categoria/:categoria' element={<ItemListContainer 
            titulo="Junior Sport"
            texto="Tools for Digital Nomads"
          />} />
          <Route path='/item/:productId' element={<ItemDetailContainer />} />
          <Route path='/*' element={<h1>404 NOT FOUND</h1>} />
          <Route path='/Cart/Cart' element={<Cart/>} />
          <Route path='/Checkout' element={<Checkout/>} /> 
          
          </Routes>
          
          
          </BrowserRouter>
      
        </CartContextProvider>
  )
}

export default App

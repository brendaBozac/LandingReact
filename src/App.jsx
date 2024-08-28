import React from "react"
import "./App.css"
import Navbar from "./Components/Navbar/Navbar.jsx"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartContextProvider } from './Context/CartContext.jsx'
import Cart from "./Components/Cart/Cart.jsx"

function App() {

  return (
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer 
            titulo="Bienvenidos a Junior Sport!"
            texto=" Todo lo que necesitas para estar siempre en movimiento."
          />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer 
            titulo="Bienvenidos a Junior Sport!"
            texto=" Todo lo que necesitas para estar siempre en movimiento."
          />} />
          <Route path='/item/:productId' element={<ItemDetailContainer />} />
          <Route path='/*' element={<h1>404 NOT FOUND</h1>} />
          <Route path='/Cart/Cart' element={<Cart/>} />
          </Routes>
          
          
          </BrowserRouter>
      
        </CartContextProvider>
  )
}

export default App

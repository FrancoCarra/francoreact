import React from 'react';
import './App.css';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { ItemListContainer } from './Components/ItemListContainer';
import { NavBar } from './Components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './firebase/config'

export const CartContext = React.createContext('')
console.log('CartContext: ', CartContext)



function App() {
  return (
    <>

      <BrowserRouter>
        <CartContext>
          <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer greetings='Buenas Tardes a todos!'/> }/>
              <Route path='/categoria/:categoriaId' element={<ItemListContainer/> }/>
              <Route path='/detalle/:detalleId' element={<ItemDetailContainer/> }/>
            </Routes>
        </CartContext>
      </BrowserRouter>
    <ItemDetailContainer/>

    </>
  );
}

export default App;

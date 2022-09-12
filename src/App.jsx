import React from 'react';
import './App.css';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { ItemListContainer } from './Components/ItemListContainer';
import { NavBar } from './Components/NavBar';


function App() {
  return (
    <>
    <div className='body'>
    <NavBar/>
    <ItemListContainer greetings='Buenas Tardes a todos!'/>  
    <ItemDetailContainer/>
    </div>
    </>
  );
}

export default App;

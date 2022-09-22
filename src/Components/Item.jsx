/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../App';


 export const Item = ({info}) => {
  const nombre = useContext(CartContext);
  console.log('item: ', nombre)
return (
   <>
    <Link to={`/detalle/${info.id}`} className="film">
        <img src={info.image}/>
        <p>{info.title}</p>
    </Link>
  </>
)
}
export default Item;
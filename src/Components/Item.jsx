/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'


 export const Item = ({info}) => {
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
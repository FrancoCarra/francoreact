/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'


 export const Item = ({info}) => {
return (
   <>
    <a href="#" className="film">
        <img src={info.image}/>
        <p>{info.title}</p>
    </a>
  </>
)
}
export default Item;
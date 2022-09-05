import React, { useState } from "react";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

  
export const ItemCount = ({ onAdd, initial, stock }) => {
    initial = 1;
    stock = 7;

  const [qty, setQty] = useState(initial);

  const addProduct = (num) => {
    setQty(qty + num);
  };
  return (
<>

<div className="container-count">
    <div class='card'>
      Proximo Item
      <div>
      <span className="count-container__qty">{qty}</span>
      </div>
      <div className="buttons">
        <button onClick={() => addProduct(-1)} disabled={qty === initial} className='button-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg>
        </button>
        <button onClick={() => addProduct(+1)} disabled={qty === stock} className='button-2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        </button>
      </div>
    </div>
</div>
</>
  )
}
  
export default ItemCount
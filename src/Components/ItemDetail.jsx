
import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'



 export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);
    const onAdd = (quantity) =>{
        console.log(`compraste ${quantity} unidades`)
      }
return (
        <div className="container">
            <div className="detail">
                <img className="detail-image" src={data.image} alt="" />
                <div className="content">
                    <h2>{data.title}</h2>
                    {
                        goToCart ? <Link to='/cart'>Terminar Compra</Link>
                        : <ItemCount initial={3} stock={5} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
        );
}
export default ItemDetail;
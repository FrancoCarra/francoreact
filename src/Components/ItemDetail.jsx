import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'



 export const ItemDetail = ({data}) => {
return (
        <div className="container">
            <div className="detail">
                <img className="detail-image" src={data.image} alt="" />
                <div className="content">
                    <h2>{data.title}</h2>
                </div>
            </div>
        </div>
        );
}
export default ItemDetail;
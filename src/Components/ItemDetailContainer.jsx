import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom'
import { getFirestone, doc, getDoc } from 'firebase/firestone'

/*const films = [
    {id: 1, price: 200, image: "https://pad.mymovies.it/filmclub/2014/01/001/locandina.jpg", title: 'Interestellar', category: 'films'},
    {id: 2, price: 250, image: "https://image.posterlounge.it/images/l/1898558.jpg", title: 'Star Strek', category: 'films'},
    {id: 3, price: 100, image: "https://pad.mymovies.it/filmclub/2006/07/192/locandina.jpg", title: 'Ronin', category: 'films'}
  ]*/


 export const ItemDetailContainer = () => {
    const [data, setData] = useState ({});
    const {detalleId} = useParams(); 

    useEffect(() => {
        const querydb = getFirestone(); 
        const queryDoc = doc(querydb, 'products', detalleId) 
        getDoc(queryDoc)
        .then(res => setData({id: res.id, ...res.data()}))
    },[detalleId])

return (
        <ItemDetail data ={data}/>
        );
}
export default ItemDetailContainer ;
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom'
import { getFirestone, collection, getDocs, query, where } from 'firebase/firestone'



/*const films = [
  {id: 1, price: 200, image: "https://pad.mymovies.it/filmclub/2014/01/001/locandina.jpg", title: 'Interestellar', category: 'films'},
  {id: 2, price: 250, image: "https://image.posterlounge.it/images/l/1898558.jpg", title: 'Star Strek', category: 'films'},
  {id: 3, price: 100, image: "https://pad.mymovies.it/filmclub/2006/07/192/locandina.jpg", title: 'Ronin', category: 'films'}
]*/

 export const ItemListContainer = ({greetings}) => {

  const [data, setData] = useState([]);

  const {categoriaId} = useParams(); 

  useEffect (() =>{
    const querydb = getFirestone(); 
    const queryCollection = collection(querydb, 'products')
    if (categoriaId){
    const queryFilter = query(queryCollection, where('category', '==', categoriaId))
    getDocs(queryFilter)
    .then(res => setData(res.docs.map(product => ({id: res.id, ...res.data()}))))
  }else{
    getDocs(queryCollection)
    .then(res => setData(res.docs.map(product => ({id: res.id, ...res.data()}))))
  }
 },[categoriaId])
return (
   <>
    <div>
        {greetings}
        <ItemList data ={data} />
    </div>
  </>
)

}
export default ItemListContainer;
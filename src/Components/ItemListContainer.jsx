import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom'



const films = [
  {id: 1, image: "https://pad.mymovies.it/filmclub/2014/01/001/locandina.jpg", title: 'Interestellar'},
  {id: 2, image: "https://image.posterlounge.it/images/l/1898558.jpg", title: 'Star Strek'},
  {id: 3, image: "https://pad.mymovies.it/filmclub/2006/07/192/locandina.jpg", title: 'Ronin'}
]

 export const ItemListContainer = ({greetings}) => {

  const [data, setData] = useState([]);

  const {categoriaId} = useParams(); 

  useEffect (() =>{
const getData = new Promise(resolve => {
  setTimeout(() => {
    resolve(films);
}, 3000);
});
if (categoriaId){
  getData.then(res => res.filter(film => film.category === categoriaId));
}else{
  getData.then(res => setData(res));
}




 },[categoriaId])

  const onAdd = (quantity) =>{
    console.log(`compraste ${quantity} unidades`)
  }
return (
   <>
    <div>
        {greetings}
        <ItemCount initial={3} stock={5} onAdd={onAdd} />
        <ItemList data ={data} />
    </div>
  </>
)

}
export default ItemListContainer;
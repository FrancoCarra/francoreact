import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Item from "./Item";


 export const ItemList = ({data = []}) => {
return (
  data.map(film => <Item key={film.id} info={film} />)
  );
}
export default ItemList;
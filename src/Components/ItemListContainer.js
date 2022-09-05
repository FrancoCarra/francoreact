import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemCount from "./ItemCount";





 export const ItemListContainer = ({greetings}) => {
return (
   <>
    <div>
        {greetings}
        <ItemCount/>
    </div>
  </>
)

}
export default ItemListContainer;
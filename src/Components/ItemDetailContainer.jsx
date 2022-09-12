import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetail from "./ItemDetail";

const film = {id: 1, image: "https://pad.mymovies.it/filmclub/2014/01/001/locandina.jpg", title: 'Interestellar'};


 export const ItemDetailContainer = () => {
    const [data, setData] = useState ({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(film);
            }, 3000);
        });

        getData.then(res => setData(res))
    },[]);

return (
        <ItemDetail data ={data}/>
        );
}
export default ItemDetailContainer ;
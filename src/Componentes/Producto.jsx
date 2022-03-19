import React, {useState, useEffect} from 'react';
import '../style.css';

function Producto({titulo}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    //Prepara algo, antes de que lo tengamos que usar
    useEffect(() =>{
       fetch('https://api.mercadolibre.com/items/MLA841413632') 
       .then(response =>{
           return response.json();
       })
       .then(res =>{
           setData(res);
          // console.log(res);
          // console.log(data);
           setLoading(false);     
       })
    }, []);

    useEffect(() =>{
      console.log(data);
    }, [data]);

    //if(loading) console.log(data);

    if(loading){
        return <div>Buscando información</div>
    }
    return(
        <>
           <h1> {titulo} </h1> 
           <hr />
           <h2> {data.title} </h2>
           <hr />
           <img src={data.pictures[0].secure_url} alt='tubo'></img>
           <h3> ${data.price} </h3>
           <h3> {data.warranty} </h3>
           <h3> {data.domain_id} </h3>
           <h3> {data.seller_address.city.name} </h3>
           
           
        </>
    );
}

export default Producto;
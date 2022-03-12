//Importo la libreria react para crear el componente
import React from "react";

const date = new Date();
    const dia = date.getDate();
    const hora = date.getHours();
    const min = date.getMinutes();
    const mes = date.getMonth() +1;
    const nombre = date.getDay();
    const arreglo = ['Peras', 'Manzanas', 'Ciruelas'];

function dameHora(){
    console.log(arreglo[0]);
    console.log(arreglo[1]);
    console.log(arreglo[2]);
    /*
    0 = enero
    1 = febrero
    2 = marzo

    0 = domingo
    1 = lunes
    2 = martes
    */
    mejora(nombre);
    return `${nombre} ${dia}/${mes} y la hora es
    ${hora}:${min}`
}

function mejora(nombre){
    switch(nombre){
        case 0: 
        console.log('Domingo');
        break;
        case 1: 
        console.log('Lunes');
        break;
        case 2: 
        console.log('Martes');
        break;
        case 3: 
        console.log('Miércoles');
        break;
        case 4: 
        console.log('Jueves');
        break;
        case 5: 
        console.log('Viernes');
        break;
        case 6: 
        console.log('Sábado');
        break;
        default:
            console.log('No corresponde a un día');
    }
}

function Reloj(){
return (
    <div>
        <h1>Hoy es {dameHora()}</h1>
        <h3>Nuestro nombre es MayxMag</h3>
    </div>
    
);
}

export default Reloj;

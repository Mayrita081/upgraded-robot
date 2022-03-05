import React from "react";

function dameHora(){

    const date = new Date();
    const dia = date.getDay();
    const hora = date.getHours();
    const min = date.getMinutes();
    
    return `Hoy es ${dia} y la hora en este momento es
    ${hora} : ${min}`

}
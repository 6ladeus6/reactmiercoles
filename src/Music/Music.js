import { servicioCanciones } from "../services/servicioCanciones.js";
//Necesito usar  el hook USESTATE
//Para alamacenar la respuesta del servicio de forma global
import { useState, useEffect } from "react";

export function Music(){

    //Creando mi primer USESTATE
    const [canciones,setCanciones] = useState(null);
    const [estamosCargando,setEstamosCargando] = useState(true);
    // Usando mi primer USEEFFECT
    useEffect(function(){
        servicioCanciones()
        .then(function(respuesta){
            setCanciones(respuesta)
            setEstamosCargando(false)
        })

    },[])
 if(estamosCargando == true){
    return(
        <>
        <h1>Estamos Cargando...</h1>
        </>
    )
 }else{
    return(
        <>
        <h1>Cargado</h1>
        {
            canciones.tracks.map(function(cancion){
                return(
                    <>
                    <diV className="col mt-3">
                        <div className="card h-100">
                           
                            <h1>{cancion.name}</h1>
                            <audio src="{cancion.preview_url}" ></audio>
                            

                        </div>   
                    </diV>
                </>
                )
            })

            }
        
        
        
      
        </>
    )
 }
} 
import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

 const Movie =(props) =>{
     
    //console.log(useParams())//aqui recogemos lo que aparece en el navegador
    const {titulo}=useParams()
    //console.log(titulo)

   
    const movie= props.taquilla.peliculas.map((peli, index)=>{
        return (
            <Tarjeta2 
            titulo={peli.titulo}
            imagen={peli.imagen}
            sinopsis={peli.sinopsis}                         
            />
        );

    })

    function Tarjeta2(props){
        return(
            <>
            <div key={props.index} className="card">                
            <h2>{props.titulo}</h2>
            <img src={props.imagen} alt={props.titulo}/>
            <p>{props.sinopsis}</p>
            </div>
            </>
        )
    }

    var election= movie[Math.floor(Math.random() * movie.length)]


    return (
        <>
        <div key="peeliii" className="movie">{election}
        </div>
        </>
    );
 }

 export default Movie
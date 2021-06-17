
import {Link} from 'react-router-dom'

function Jugador(props){
    return(
        <>
            <div key={props.index} className="card">                
            <h2>{props.nombre}</h2>
            <img src={props.imagen} alt={props.nombre}/>
            <div>
            <Link to={`/${props.nombre}`}>Más información</Link>   
            </div>
            </div>
            </>
    )
}

function Jugadores(props){
    return props.jugadores.map((jugones, index) => {
        return(
            <Jugador
            key={index}
            imagen={jugones.imagen}
            nombre={jugones.nombre}
            index={index}
            />
        )
    })
}

export default Jugadores;
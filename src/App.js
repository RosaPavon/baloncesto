
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import equipo from './equipo';
import Jugadores from './Jugadores'
import { useState } from 'react';

function App() {

  const [jugadores, setJugadores] = useState(equipo)

  let rutas = jugadores.map((jugones, index)=>{
    return(
      <Route path={"/" + jugones.nombre}>
            <h2>{jugones.nombre}</h2>
            <img src={jugones.imagen} alt={jugones.nombre}/>
            <p>{jugones.titulos}</p>
            <p>{jugones.promedios}</p>
            <Link to="/">Inicio</Link>
      </Route>
    )
  })

  return (
      <BrowserRouter> 
              <Route exact path="/">
                <div id="equipo">
              <Jugadores jugadores={jugadores}/>
              </div>
              </Route>
              {rutas}
         </BrowserRouter>
  );
}
export default App;
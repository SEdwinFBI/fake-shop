import React from 'react'
import ListaProductos from "./components/ListaProductos";
//import Paginas from "./components/Paginas"
//import Pokemons from './Pokemons';
//import './components/ListaPokemon';


/*const urlBase = 'https://fakestoreapi.com/products';

const obtenerP = async () => {
  const res = await fetch(urlBase);
  const json = await res.json();

  return json;
}

obtenerP().then(
  console.log
); */


function App() {


  return (
    <div className="container ">
      <h1>Productos disponibles</h1>
      {<ListaProductos />
      //<Paginas />
      //<Pokemons/>
      }
      


    </div>
  )
}

export default App

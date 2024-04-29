import React, { useEffect, useState } from 'react'

const Pokemons = () => {

    const urlBase = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';
const [pokemons, setPokemons] = useState([]);


const listPokemons = async()=>{
    const response = await fetch(urlBase);
    const result = await response.json();

    setPokemons(result);
    console.log(result)
}

useEffect(()=>{
    listPokemons();
},[])






  return (
    <div>
      dfjklsdjf
    </div>
  )
}

export default Pokemons

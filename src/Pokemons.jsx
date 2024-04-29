import React, { useEffect, useState } from 'react'

const Pokemons = () => {

  const urlBase = 'https://pokeapi.co/api/v2/pokemon?limit=30&offset=0';
  const [pokemons, setPokemons] = useState([]);


  const listPokemons = async () => {
    const response = await fetch(urlBase);
    const result = await response.json();
    const res = await result.results;


    setPokemons(result.res)
    console.log(result)
  }

  useEffect(() => {
    listPokemons();
  }, [])






  return (
    <div>
      {pokemons.map(
        pokemon => (
          <div>
            <div>{pokemon.name}</div>
            <br />
          </div>

        )
      )}
    </div>
  )
}

export default Pokemons

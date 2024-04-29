const lista = document.querySelector("#Pokemons");//agarramos la ID del div

const urlBase = 'https://fakestoreapi.com/products'

export const Pokedex = async () => {

    const res = await fetch(urlBase)
    const datos = await res.json();

    return datos;
    //Obtenemos los pokemons, y manipulamos las respuesta en un array

}

Pokedex().then(datos => {
    datos.map(h => {
        const div = document.createElement("div");
        div.classList.add("col");

        div.innerHTML = `
              <div class="col" style="margin-bottom:10px;">
                <div class="card" key=${h.id} style=" width: 15rem; height:28rem;" >
                  <img src=${h.image} alt="..." style="max-width:100%; height:15rem; objectFit:contain;" />
                  <div class="card-body" style="overflow:hidden;marginBottom:10px;">
                    <h5 class='card-title'>${h.title}</h5>
                    <p class="card-text" style="fontSize:10px; overflow:hidden; textOverflow:ellipsis;">${h.description}</p>
                  </div>
                </div>
              </div>
          `;
        lista.append(div);
    }
    )
});



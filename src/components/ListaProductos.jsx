import React, { useEffect, useState } from 'react'



const ListaProductos = () => {
  const urlBase = 'https://fakestoreapi.com/products';
  const [productos, setProductos] = useState([]);//arreglo vacio
  const [paginas, setPaginas] = useState(6);//6 elementos por pagina
  const [paginaActual, setpaginaActual] = useState(1);//pagina actual, 1 por defecto

  //Obtener productos
  const productList = async () => {
    const res = await fetch(urlBase);
    const resJson = await res.json();//formato json

    console.log(resJson);
    setProductos(resJson);//metemos el json
  }

  useEffect(() => {
    productList();//para que se renderize una vez
  }, []);//Array de Dependencias: El segundo argumento de useEffect es un array de dependencias.
  // Este array determina cuándo se ejecutará el efecto secundario. Si el array está vacío ([]), 
  //el efecto secundario se ejecutará solo una vez después de la renderización inicial del componente.


  return (
    <>
      <div>lista De Productos</div>
      <section className='container '>
        <div className="row row-cols-1 row-cols-md-4 row-cols-sm-2 offset-1 offset-md-0 offset-sm-0" >
          {//parentesis porque solo retornamos html
            productos.map(producto => (
              <div className="col " style={{marginBottom:"10px"}}>
                <div className="card" key={producto.id} style={{ width: "15rem", height:"28rem" }}>
                  <img src={producto.image} alt="..." style={{maxWidth:"100%", height:"15rem", objectFit:"contain"}} />
                  <div className="card-body" style={{overflow:"hidden",marginBottom:"10px"}}>
                    <h5 className='card-title'>{producto.title}</h5>
                    <p className="card-text" style={{fontSize:"10px", overflow:"hidden", textOverflow:"ellipsis"}}>{producto.description}</p>
                  </div>
                </div>
              </div>


            ))
          }
        </div>

      </section>

    </>



  )
}

export default ListaProductos
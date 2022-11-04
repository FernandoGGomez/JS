let carrito = [];
let productos = [];
const marcas = [
  {
      id: 1,
      marca: "Intel",
  },
  {
      id: 2,
      marca: "AMD",
  },
];

const contenedor = document.getElementById("filtrado");
contenedor.innerHTML = "";


let gestor;
const clave_carrito = "carrito";


document.addEventListener("DOMContentLoaded",()=>{


    carrito = JSON.parse(localStorage.getItem("carrito")) || [] ;

    gestor = new GestionarProductos();
    gestor.iniciar();

})

function addCarrito(id){

    let prod = document.getElementById("producto_" + id);
    let producto = new Producto(id,
                                prod.querySelector('h3').textContent,
                                prod.querySelector('.precio').textContent.substring(1,6),
                                prod.querySelector('img').src);


    gestor.addCart(producto);

}

function eliminar(id){

        gestor.eliminarProdCarrito(id);

}

function vaciarCarrito(){
  gestor.vaciarCar();
}


function filtrarMarca(marca){

  let productosFil = productos.filter(prod => prod.marca == marca);
  gestor.cargarProductos(productosFil);

}




function filtrarPorMarca(e){
  const contenedor = document.getElementById("seccionProductos");
  contenedor.innerHTML = '';
  const filtro = productos.filter((producto) => producto.marca === e.target.id);
  filtro.forEach((producto) => {
  gestor.cargarProductos(producto);
});
  gestor.cargarProductos();
  
  }
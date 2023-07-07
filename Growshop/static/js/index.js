// Obtén la referencia al contenedor del carrusel
const sliderContainer = document.querySelector('.slider');

// Establece el intervalo de tiempo para el desplazamiento automático (por ejemplo, cada 3 segundos)
const interval = 3000;

// Función para desplazar el carrusel automáticamente
function autoScroll() {
  // Obtén el ancho de cada imagen en el carrusel
  const slideWidth = sliderContainer.querySelector('img').offsetWidth;

  // Desplaza el carrusel hacia la siguiente imagen
  sliderContainer.scrollBy({
    left: slideWidth,
    behavior: 'smooth'
  });
}

// Inicia el desplazamiento automático del carrusel
setInterval(autoScroll, interval);

/* ======================================================================================= */

const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
});

document.getElementById('btn-registrarse').addEventListener('click', function() {
    window.location.href = 'registro.html';
});

document.getElementById('btn-iniciar-sesion').addEventListener('click', function() {
    window.location.href = 'iniciar-sesion.html';
});

/*==================================================================================*/

const cartInfo = document.querySelector('cart-product');
const rowProduct = document.querySelector('.row-product');

/* Lista de contenedores de productos */

const productsList = document.querySelector('.container-items');

/* Variable de arreglos de productos */

let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

productsList.addEventListener('click', e => {

  if(e.target.classList.contains('btn-add-cart')){
    const product = e.target.parentElement;

    const infoProduct = {
      quantity: 1,
      title: product.querySelector('h2').textContent,
      price: product.querySelector('p').textContent,
    };

    const exist = allProducts.some(product => product.title === infoProduct.title);

    if (exist){
      const products = allProducts.map(product => {
        if(product.title === infoProduct.title){
          product.quantity++;
          return product
        } else {
          return product
        }
      });

      allProducts = [...products]
    } else {
      allProducts = [...allProducts, infoProduct];
    };

    showHTML();

  };

});

rowProduct.addEventListener('click', (e) => {
  if (e.target.classList.contains('icon-close')){
    const product = e.target.parentElement;
    const title = product.querySelector('p').textContent;

    allProducts = allProducts.filter(
      product => product.title !== title);

      showHTML();
  }
});

/* Funciones para mostrar html */

const showHTML = () => {

  if(!allProducts.length){
    containerCartProducts.innerHTML=`
    <p class="cart-empty">El carrito está vacio</p>
    `
  };

  //Liampiar HTML
rowProduct.innerHTML = '';

let total = 0;
let totalOfProducts = 0;

allProducts.forEach(product => {
  const containerProduct = document.createElement('div');
  containerProduct.classList.add('cart-product');

  containerProduct.innerHTML = `
    <div class="info-cart-product">
      <span class="cantidad-producto-carrito">${product.quantity}</span>
      <p class="titulo-producto-carrito">${product.title}</p>
      <span class="precio-producto-carrito">${product.price}</span>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  `;

  rowProduct.append(containerProduct);

  total = total + parseInt(product.quantity * product.price.slice(1));
  totalOfProducts = totalOfProducts + product.quantity;

});

valorTotal.innerText = `$${total}`;
countProducts.innerText = totalOfProducts;

}
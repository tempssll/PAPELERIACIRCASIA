// Datos simulados de productos para sacos y camisas
const sacos = [
  { id: 101, name: "PIÑATERIA", price: 0, image: "piñauno.jpg" },
  { id: 102, name: "PIÑATERIA", price: 0, image: "piñados.jpeg" },
  { id: 102, name: "PIÑATERIA", price: 0, image: "piñatres.jpeg" },
  { id: 102, name: "PIÑATERIA", price: 0, image: "piñacuatro.jpeg" },
  { id: 101, name: "PIÑATERIA", price: 0, image: "piñacinco.jpeg" },
  { id: 102, name: "PIÑATERIA", price: 0, image: "piñaseis.jpeg" },
  { id: 102, name: "PIÑATERIA", price: 0, image: "piñasiete.jpeg" },
  { id: 102, name: "PIÑATERIA", price: 0, image: "piñaocho.jpeg" },
  { id: 102, name: "PIÑATERIA", price: 0, image: "piñanueve.jpeg" },
  { id: 102, name: "PIÑATERIA", price: 0, image: "piñadies.jpeg" },
  { id: 102, name: "PIÑATERIA", price: 0, image: "piñaonce.jpeg" },
  { id: 102, name: "PIÑATERIA", price: 0, image: "piñadoce.jpeg" },
  { id: 102, name: "PIÑATERIA", price: 0, image: "piñatrece.jpeg" },
  { id: 102, name: "PIÑATERIA", price: 0, image: "piñacatorce.jpeg" },
  { id: 102, name: "PIÑATERIA", price: 0, image: "piñaquince.jpeg" },
  { id: 102, name: "PIÑATERIA", price: 0, image: "piñadieciceis.jpeg" },
  { id: 102, name: "PIÑATERIA", price: 0, image: "piñadieciciete.jpeg" },
  { id: 102, name: "PIÑATERIA", price: 0, image: "piñadieciocho.jpeg" },
  { id: 102, name: "PIÑATERIA", price: 0, image: "piñadiecinueve.png" },
  { id: 102, name: "PIÑATERIA", price: 0, image: "piñaveinte.png" },
  { id: 102, name: "PIÑATERIA", price: 0, image: "piñaveintiuno.png" },
  { id: 102, name: "PIÑATERIA", price: 0, image: "piñaveintidos.png" },
  { id: 102, name: "PIÑATERIA", price: 0, image: "piñaventitres.png" },

  // Agrega más sacos aquí
];

const camisas = [
  { id: 201, name: "Camisa Blanca", price: 8000, image: "" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },

  // Agrega más camisas aquí
];

const mugs = [
  { id: 201, name: "Camisa Blanca", price: 8000, image: "posillo.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "posillotres.jpg" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "posillocu.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "posillos.jpg" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "posillon.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "posilloca.jpg" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "posillodi.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "posilloquin.jpg" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "posillodos.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "posilloon.jpg" },

  // Agrega más camisas aquí
];

const toallas = [
  { id: 201, name: "Toallas Blanca", price: 8000, image: "toallas.jpg" },
  { id: 202, name: "Toalla a Rayas", price: 8000, image: "toallaocho.jpg" },
  { id: 201, name: "Toalla", price: 8000, image: "toallacuatro.jpg" },
  { id: 202, name: "Toalla  ", price: 9000, image: "toallas.jpg" },
  { id: 201, name: "Toalla ", price: 7000, image: "toallas.jpg" },
  { id: 202, name: "Toalla", price: 8000, image: "toallas.jpg" },
  { id: 201, name: "Toalla ", price: 8000, image: "toallacinco.jpg" },
  { id: 202, name: "Toalla ", price: 8000, image: "toallados.jpg" },
  { id: 201, name: "Toalla", price: 8000, image: "toallas.jpg" },
  { id: 202, name: "Toalla ", price: 8000, image: "toallatres.jpg" },

  // Agrega más camisas aquí
];

const indumentaria = [
  { id: 201, name: "Camisa Blanca", price: 8000, image: "camisa.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "camisados.jpeg" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "camisa.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "camisados.jpeg" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "camisa.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },

  // Agrega más camisas aquí
];

const chaleco = [
  { id: 201, name: "Camisa Blanca", price: 8000, image: "chaquetatres.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "chaquetados.jpg" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "chaquetauno.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "chaqueta.jpg" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "chaquetatres.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "chaquetauno.jpg" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "chaqueta.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "chaquetados.jpg" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "chaqueta.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "chaquetauno.jpg" },

  // Agrega más camisas aquí
];

const sacoProductsContainer = document.getElementById("sacoProducts");
const camisaProductsContainer = document.getElementById("camisaProducts");
const mugsProductsContainer = document.getElementById("mugsProducts");
const toallasProductsContainer = document.getElementById("toallasProducts");
const indumentariaProductsContainer = document.getElementById(
  "indumentariaProducts"
);
const chalecoProductsContainer = document.getElementById("chalecoProducts");

// Función para mostrar los productos de sacos
function showSacos() {
  sacoProductsContainer.innerHTML = "";
  sacos.forEach((product) => {
    const productCard = createProductCard(product);
    sacoProductsContainer.appendChild(productCard);
  });
}

function showCamisas() {
  camisaProductsContainer.innerHTML = "";
  camisas.forEach((product) => {
    const productCard = createProductCard(product);
    camisaProductsContainer.appendChild(productCard);
  });
}

function showMugs() {
  mugsProductsContainer.innerHTML = "";
  mugs.forEach((product) => {
    const productCard = createProductCard(product);
    mugsProductsContainer.appendChild(productCard);
  });
}

function showToallas() {
  toallasProductsContainer.innerHTML = "";
  toallas.forEach((product) => {
    const productCard = createProductCard(product);
    toallasProductsContainer.appendChild(productCard);
  });
}
function showIndumentaria() {
  indumentariaProductsContainer.innerHTML = "";
  indumentaria.forEach((product) => {
    const productCard = createProductCard(product);
    indumentariaProductsContainer.appendChild(productCard);
  });
}

function showChaleco() {
  chalecoProductsContainer.innerHTML = "";
  chaleco.forEach((product) => {
    const productCard = createProductCard(product);
    chalecoProductsContainer.appendChild(productCard);
  });
}

//RUTA DE LAS IMAGENES
function createProductCard(product) {
  const productCard = document.createElement("div");
  productCard.className = "productCard";
  productCard.innerHTML = `
      <img src="imagenes/papeleria/${product.image}"alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Precio: $${product.price}</p>
     
      <div class="productDetails" id="details-${product.id}">
      </div>
    `;
  return productCard;
}

// Mostrar los productos al cargar la página
showSacos();
showCamisas();
showMugs();
showToallas();
showIndumentaria();
showChaleco();

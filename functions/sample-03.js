/**
 * Use dois ou menos argumentos de funções
 */

// ruim 👎
function insertProduct(name, description, price, category) {}

insertProduct("Clean Code", 40.55, "Livro sobre qualidade de código", "livro");

// bom 😃
function insertProduct(product) {} // exemplo do objeto como argumento

function insertProduct({ name, description, price, category }) {} // exemplo com objeto desestruturado

const product = {
  name: "Clean Code",
  price: 40.55,
  description: "Livro sobre qualidade de código",
  category: "livro",
};

insertProduct(product);

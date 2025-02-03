window.addEventListener("load", vises);

function vises() {
  console.log("Hello World!");
  fetchProducts();
}

const Stock = document.querySelector(".stock");
const Img = document.querySelector(".img");
const Name = document.querySelector(".name");
const ProductType = document.querySelector(".productType");
const Price = document.querySelector(".price");
const Sale = document.querySelector(".sale");

function fetchProducts() {
  fetch("json.json")
    .then((response) => response.json())
    .then((data) => {
      console.log("Fetched data:", data);
      displayProduct(data, 1);
    })
    .catch((error) => console.error("Error fetching JSON:", error));
}

let getById = (products, id) => {
  products.find((product) => product.id === id);
};

let displayProduct = (products, id) => {
  const product = getById(products, id);
  if (!product) {
    console.error("Product not found!");
    return;
  }

  if (product.stock === true) {
    Stock.classList.remove("disable");
  }

  Name.textContent = product.name;
  ProductType.textContent = product.productType;
  Price.textContent = "Dkk " + product.price;

  if (product.sale.tilbud === true) {
    Sale.classList.remove("disable");
    Sale.textContent = "-" + product.sale.amount + "%";
  }
};

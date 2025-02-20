const productContainer = document.querySelector(".container");
const categori = new URLSearchParams(window.location.search).get("category");
const dropdown = document.querySelector("#filter");

dropdown.addEventListener("change", showProducts);
showProducts();

function showProducts() {
  const selectedValue = dropdown.value;
  let fetchUrl = `https://kea-alt-del.dk/t7/api/products?category=${categori}&limit=8`;

  fetch(fetchUrl)
    .then((response) => response.json())
    .then((products) => {
      showData(products, selectedValue);
    });
}

function showData(products, selectedValue) {
  productContainer.innerHTML = "";

  // **Filtering logic**
  const filteredProducts = products.filter((product) => {
    if (selectedValue === "all_items") {
      return true;
    } else if (selectedValue === "stocked_items") {
      return !product.soldout;
    } else if (selectedValue === "discounted_items") {
      return product.discount;
    }
  });

  // **Mapping products to HTML**
  const htmlProducts = filteredProducts.map((data) => {
    let discPrice = (data.price - data.price * (data.discount / 100)).toFixed(2);

    return `
      <div class="box ${data.soldout ? "udsolgt" : ""}">
        <h1 class="stock udsolgtskrift ${data.soldout ? "" : "disable"}"> UDSOLGT</h1>
        <img class="img" src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="product">
        <div class="flexcol boxinfo">
          <h2 class="name">${data.productdisplayname}</h2>
          <p class="productType">${data.articletype}/${data.brandname}</p>
          <div class="flexrow">
            <p class="price ${data.discount ? "red" : ""}">Dkk ${data.discount ? discPrice : data.price}</p>
            <p class="sale tilbud ${data.discount ? "" : "disable"}">-${data.discount}%</p>
          </div>
          <a href="product.html?id=${data.id}">Read More</a>
        </div>
      </div>`;
  });

  productContainer.innerHTML = htmlProducts.join("");
}

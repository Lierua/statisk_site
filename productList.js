const productContainer = document.querySelector(".container");

const mitArray = ["navn-1", "navn-2", "navn-3"];

const nytArray = mitArray.map((navn) => `<li>${navn}</li>`);

const string = nytArray.join(" ");

console.log(string);

fetch(`https://kea-alt-del.dk/t7/api/products?start=640&limit=8`)
  .then((response) => response.json())
  .then((products) => {
    productContainer.innerHTML = "";

    const htmlProducts = products.map((data) => {
      return `
    <div class="box">
        <h1 class="stock udsolgtskrift disable"> UDSOLGT</h1>
        <img class="img" src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="product">
        <div class="flexcol boxinfo">
            <h2 class="name">${data.productdisplayname}</h2>
            <p class="productType">${data.articletype}/${data.brandname}</p>
            <div class="flexrow">
                 <p class="price">Dkk ${data.price}</p>
                <p class="sale tilbud disable">-30%</p>
            </div>
            <a href="">product.html</a>
        </div>
    </div>`;
    });
    const string_2 = htmlProducts.join(" ");
    productContainer.innerHTML = string_2;
  });

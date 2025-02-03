const productContainer = document.querySelector("#productcontainer");

let productId = 1526;

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(data) {
  console.log("data", data);
  productContainer.innerHTML = `
    <div>
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="product image">
            </div>
            <div id="infobox" class="flexcol">
                <h1>Product Information</h1>
                <ul class="flexcol">
                    <li>
                        <h2>Model name</h2>
                    </li>
                    <li class="innerlink">
                        <p>${data.productdisplayname}</p>
                    </li>
                    <li>
                        <h2>Color</h2>
                    </li>
                    <li class="innerlink">
                        <p>${data.basecolour}</p>
                    </li>
                    <li>
                        <h2>Inventory number</h2>
                    </li>
                    <li class="innerlink">
                        <p>Dkk ${data.price}</p>
                    </li>
                </ul>
                <h1 class="name">${data.brandname}</h1>
                <p>${data.brandbio}</p>
                            </div>
            <div id="basket" class="flexcol">
                <h1>${data.variantname}</h1>
                <p class="info">${data.articletype}/${data.brandname}</p>
                <div>
                    <div class="dropdown-container">
                        <label for="size">Choose a size</label>
                        <select id="size">
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </div>
                </div>
                <div class="button">
                    <a href="#">Add to basket</a>
                </div>
            </div>
            `;
}

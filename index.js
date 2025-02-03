// const ink = document.querySelector("#link");

// const randomParm = ["red", "green", "blue"];

// let link = randomParm.map((farve) => `<a href="farve.html?farve=${farve}">${farve}</a>`);

// ink.innerHTML = link.join(" ");

const container = document.querySelector("#container");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then((category) => {
    container.innerHTML = "";

    const box = category.map((data) => {
      return `
     <a href="productlist.html?category=${data.category}">
                <div>${data.category}</div>
    `;
    });

    container.innerHTML = box.join(" ");
  });

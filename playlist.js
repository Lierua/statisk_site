const ul = document.querySelector("#ul");

const playArray = ["We Never Run", "Born To Be Wild", "Lag Train", "Brand New B****"];

const liArray = playArray.map((songs) => ` <li>${songs}</li>`);

ul.innerHTML = liArray.join(" ");

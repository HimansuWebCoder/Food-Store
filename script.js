const btns = document.querySelectorAll("button");
const foodContainer = document.querySelector("#output");

import { fruits, veg, nonVeg} from "./foods.js"
const allItems = [...fruits, ...veg, ...nonVeg];

allItems.forEach((x) => {
  const image = document.createElement("img");
  foodContainer.appendChild(image);
  image.setAttribute("src", x);
  image.setAttribute("alt", x);
  image.classList.add("fruits-style");
});

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
	foodContainer.textContent = "";
	if (e.target.textContent === "Fruits") {
	  fruits.forEach((x, i) => {
		const image = document.createElement("img");
		foodContainer.appendChild(image);
		image.setAttribute("src", x);
		image.classList.add("fruits-style");
	  });
	} else if (e.target.textContent === "Veg") {
	  veg.forEach((x, i) => {
		const image = document.createElement("img");
		foodContainer.appendChild(image);
		image.setAttribute("src", x);
		image.classList.add("fruits-style");
	  });
	} else if (e.target.textContent === "Non-Veg") {
	  nonVeg.forEach((x, i) => {
		const image = document.createElement("img");
		foodContainer.appendChild(image);
		image.setAttribute("src", x);
		image.classList.add("fruits-style");
	  });
	} else {
	  allItems.forEach((x) => {
		const image = document.createElement("img");
		foodContainer.appendChild(image);
		image.setAttribute("src", x);
		image.classList.add("fruits-style");
	  });
	}
  });
});
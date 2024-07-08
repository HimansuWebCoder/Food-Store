const btns = document.querySelectorAll("button");
const foodContainer = document.querySelector("#output");
const searchInput = document.querySelector("#food-search");
const errorShowBox = document.querySelector("#error-box");
const errorHeaderMsg = document.querySelector("#error-header");

import { fruits, veg, nonVeg} from "./foods.js"
const allItems = [...fruits, ...veg, ...nonVeg];


function createImage(img, src, name, style) {
	const image = document.createElement(img);
	foodContainer.appendChild(image);
	image.setAttribute("alt", name);
	image.setAttribute("src", src);
	image.setAttribute("id", "images")
	image.classList.add(style);
}


// Refactoring creating images DRY run
allItems.forEach((x) => {
  // const image = document.createElement("img");
  // foodContainer.appendChild(image);
  // image.setAttribute("src", x);
  // image.setAttribute("alt", x);
  // image.classList.add("fruits-style");
  createImage("img", x.src, x.alt, "fruits-style")
});

const images = document.querySelectorAll("#images");


btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
	foodContainer.textContent = "";
	if (e.target.textContent === "Fruits") {
	  fruits.forEach((x, i) => {
	  	  createImage("img", x.src, x.alt, "fruits-style")
	  });
	} else if (e.target.textContent === "Veg") {
	  veg.forEach((x, i) => {
	  	  createImage("img", x.src, x.alt, "fruits-style")
	  });
	} else if (e.target.textContent === "Non-Veg") {
	  nonVeg.forEach((x, i) => {
	  	  createImage("img", x.src, x.alt, "fruits-style")
	  });
	} else {
	  allItems.forEach((x, i) => {
	  	  createImage("img", x.src, x.alt, "fruits-style")
	  });
	}
  });
});



searchInput.addEventListener("input", () => {
	   let isSearched = false; 
		allItems.forEach((x, i) => {
			if (x.name.toUpperCase().includes(searchInput.value.toUpperCase())) {
        images[i].style.display = "block";
				isSearched = true;
				errorHeaderMsg.textContent = ""
				errorShowBox.style.display = ""
			} else {
				images[i].style.display = "none";
			}
		})

		if (!isSearched) {
			console.log("not found");
			errorHeaderMsg.textContent = "Food Not Found Please search again";
			errorShowBox.style.display = "block";
		}
})
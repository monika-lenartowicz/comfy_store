// global imports
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";
// specific
import { addToCart } from "../cart/setupCart.js";
import { singleProductUrl, getElement, formatPrice } from "../utils.js";

// selections
const loading = getElement(".page-loading");
const centerDOM = getElement(".single-product__center");
const pageTitleDOM = getElement(".page-hero__title");
const imgDOM = getElement(".single-product__img");
const titleDOM = getElement(".single-product__title");
const companyDOM = getElement(".single-product__company");
const priceDOM = getElement(".single-product__price");
const colorsDOM = getElement(".single-product__colors");
const descDOM = getElement(".single-product__desc");
const cartBtn = getElement(".addToCartBtn");

// cart product
let productID;

// show product when page loads
window.addEventListener("DOMContentLoaded", async function () {
	const urlID = window.location.search;
	// const urlID = "?id=hello";
	try {
		const response = await fetch(`${singleProductUrl}${urlID}`);
		if (response.status >= 200 && response.status <= 299) {
			const product = await response.json();
			console.log(product);
		} else {
			console.log(response.status, response.statusText);
			centerDOM.innerHTML = `
      <div>
        <h3 class="error">... ${response.status} ${response.statusText},<br><br>
         sorry, something went wrong</h3>
        <a href="index.html" class="btn">back home</a>
      </div>
      `;
		}
	} catch (error) {
		console.log(error);
	}

	loading.style.display = "none";
});

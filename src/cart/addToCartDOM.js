import { formatPrice, getElement } from "../utils.js";
const cartItemsDOM = getElement(".cart-items");

const addToCartDOM = ({ id, name, price, image, amount }) => {
	const article = document.createElement("article");
	article.classList.add("cart-item");
	article.setAttribute("data-id", id);
	article.innerHTML = `
             <img src="${image}" class="cart-item__img" alt="${name}">
           
            <div>
              <h4 class="cart-item__name">${name}</h4>
              <p class="cart-item__price">${formatPrice(price)}</p>
              <button class="cart-item__remove-btn" data-id="${id}">remove</button>
            </div>
           
            <div>
              <button class="cart-item__increase-btn" data-id="${id}">
                <i class="fas fa-chevron-up"></i>
              </button>
              <p class="cart-item__amount" data-id="${id}">${amount}</p>
              <button class="cart-item__decrease-btn"data-id="${id}">
                <i class="fas fa-chevron-down"></i>
              </button>
            </div>
   `;
	cartItemsDOM.appendChild(article);
};

export default addToCartDOM;

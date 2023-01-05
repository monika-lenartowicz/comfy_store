import { getElement } from "../utils.js";

const cartOverlay = getElement(".cart-overlay");
const closeCartBtn = getElement(".cart-close");
const toggleCartBtn = getElement(".toggle-cart");

toggleCartBtn.addEventListener("click", () => {
	cartOverlay.classList.add("show");
});

closeCartBtn.addEventListener("click", () => {
	cartOverlay.classList.remove("show");
});

// eksporujemy tę funkcję ponieważ jest potrzebna do wywołania, kiedy klikamy bezpośrednio na "dodaj do koszyka" na zdjęciu
export const openCart = () => {
	cartOverlay.classList.add("show");
};

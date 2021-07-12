"use strict";
class Basket {
	/**
	 *
	 * @param {number} id  уникальный идентификатор
	 * @param {string} image название файла с картинкой
	 * @param {string} name имя товара
	 * @param {number} price цена товара
	 * @param {string} icon путь до иконки
	 * @param {number} totalPrice цена всех товаров
	 */
	constructor(id, image, name, price, icon, totalPrice) {
		this.id = id;
		this.image = image;
		this.name = name;
		this.price = price;
		this.icon = icon;
		this.totalPrice = totalPrice;
	}
}

let basket = {};
const openBasketBtn = document.querySelector(".cart-dropdown");
const basketEl = document.querySelector(".cart-dropdown_menu_box");
openBasketBtn.addEventListener("onclick", function () {
	basketEl.classList.toggle("hidden");
});

/**
 * Метод добавляет продукт в объект basket.
 * @param {number} productId
 */
function addProductToObject(productId) {
	if (!(productId in basket)) {
		basket[productId] = 1;
	} else {
		basket[productId]++;
	}
	console.log(basket[productId]);
}
/**
 * Функция срабатывает когда нужно отрисовать продукт в корзине.
 * @param {number} productId
 */
function renderProductInBasket(productId) {
	let productExist = document.querySelector(
		`.productCount[data-productid="${productId}"]`
	);
	if (productExist) {
		increaseProductCount(productId);
		recalculateSumForProduct(productId);
	} else {
		renderNewProductInBasket(productId);
	}
}

/**
 * Функция отрисовывает новый товар в корзине.
 * @param {number} productId
 */
function renderNewProductInBasket(productId) {
	let productRow = `
    <div class="cart-dropdown_item">
        <div class="cart-dropdown_item_photo">
            <img src="img/cart-dropdown-photo1.png">
        </div>
        <div class="item-description">
            <h2>Rebox Zane</h2>
            <p>1 x $250</p>
        </div>
        <div class="icon">
            <i class="fas fa-times-circle"></i>
        </div>
    </div>
    `;
}

/**
 * Метод увеличивает количество товаров в строке в корзине.
 * @param {number} productId
 */
function increaseProductCount(productId) {
	const productCountEl = document.querySelector(
		`.productCount[data-productid="${productId}"]`
	);
	productCountEl.textContent++;
}

/**
 * Метод пересчитывает стоимость товара умноженное на количество товара
 * в корзине.
 * @param {number} productId
 */
function recalculateSumForProduct(productId) {
	basketCounterEl.textContent++;
}

/**
 * Метод пересчитывает общую стоимость корзины и выводит это значение на страницу.
 */
function calculateAndRenderTotalBasketSum() {
	let totalSum = 0;
	for (let productId in basket) {
		totalSum += basket[productId] * products[productId].price;
	}
	basketTotalValueEl.textContent = totalSum.toFixed(2);
}
/**
 * Метод удаляет товар из корзины и пересчитывает общую сумму.
 */
function deleteAndRenderTotalBasketSum() {}

/**
 * эта функц срабатывает когда добавляется новый товар в корзину.
 * @param {number} productId
 */
function addProductIntoBasket(productId) {
	addProductToObject(productId);
	increaseProductCount(productId);
	renderProductInBasket(productId);
	calculateAndRenderTotalBasketSum();
}

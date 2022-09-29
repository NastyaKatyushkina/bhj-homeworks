const products = document.getElementsByClassName('product');
const cartProductsList = document.getElementsByClassName('cart__product');
const cartProducts = document.querySelector('.cart__products');

for (let product of products) {
    const quantityValue = product.querySelector('.product__quantity-value');
    const quantityControlDec = product.querySelector('.product__quantity-control_dec');
    const quantityControlInc = product.querySelector('.product__quantity-control_inc');
    const productAdd = product.querySelector('.product__add');
    const productId = product.dataset.id;
    const productImg = product.querySelector('.product__image').src;

    quantityControlDec.addEventListener('click', () => {
        const orderedAmount = Number(quantityValue.textContent);
        if(orderedAmount > 1) {
            quantityValue.innerHTML = Number(orderedAmount - 1);
        }
    });

    quantityControlInc.addEventListener('click', () => {
        let orderedAmount = Number(quantityValue.textContent);
        quantityValue.innerHTML = orderedAmount + 1;
    });

    productAdd.addEventListener('click', () => {
        const checkId = (Array.from(cartProductsList)).find((item) => (item.dataset.id === productId));
        if (!checkId) {
            const productInCard = document.createElement('div');
            productInCard.insertAdjacentHTML('afterbegin', `<div class='cart__product' data-id=${productId}>
            <img class='cart__product-image' src=${productImg}>
            <div class='cart__product-count'>${quantityValue.textContent}</div>
            </div>`);
            cartProducts.appendChild(productInCard);
        } else {
            checkId.querySelector('.cart__product-count').textContent = Number(checkId.querySelector('.cart__product-count').textContent) + Number(quantityValue.textContent);
        }
    });
}
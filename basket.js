let basket = {};

let buyEls = document.querySelectorAll('.toBuy');
let basketCount = document.querySelector('.cartIconWrap span');
let TotalValue = document.querySelector('.basketTotalValue');
let basketTotalEl = document.querySelector('.basketTotal')

buyEls.forEach(buyEl => {
    buyEl.addEventListener('click', event => {
        basketCount.textContent = +basketCount.textContent + 1;
        let ItemEl = buyEl.closest('.featuredItem');
        const name = ItemEl.dataset.name;
        const id = ItemEl.dataset.id;
        const price = ItemEl.dataset.price;
        getProductAtBasket(name, id, price);
        TotalValue.textContent = getTotalPrice();
        renderNewProductInBasket(id);
    })
})

function getProductAtBasket(name, id, price) {
    if (!(id in basket)) {
        basket[id] = { id, name, price, count: 0 };
    }
    basket[id].count++;
}

function getTotalCount() {
    return Object.values(basket).reduce((cnt, product) => cnt + product.count, 0);
}

function getTotalPrice() {
    return Object.values(basket).
        reduce((sum, product) => sum + product.count * product.price, 0);
}

function renderNewProductInBasket(id) {
    let basketRowEl = document.querySelector(`.basketRow[data-id="${id}"]`);
    if (basketRowEl) {
        basketRowEl.querySelector('.productCount').textContent = basket[id].count;
        basketRowEl.querySelector('.productTotalRow').textContent =
            basket[id].count * basket[id].price;
        return;
    }

    let basketDivEl = `
    <div class="basketRow" data-id="${id}">
      <div>${basket[id].name}</div>
      <div>
        <span class="productCount">${basket[id].count}</span> шт.
      </div>
      <div class=>$${basket[id].price}</div>
      <div>
        $<span class="productTotalRow">${(basket[id].price * basket[id].count).toFixed(1)}</span>
      </div>
    </div>
    `;
    basketTotalEl.insertAdjacentHTML("beforebegin", basketDivEl);
}

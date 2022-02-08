let catalog = {
    1: {
        id: 1,
        name: 'Shirt',
        price: 800,
    },
    2: {
        id: 2,
        name: 'Coat',
        price: 4700,
    },
    3: {
        id: 3,
        name: 'Dress',
        price: 5500,
    },
    4: {
        id: 4,
        name: 'Socks',
        price: 150,
    },

};
let basket = {
    quantity: 0,
    result: 0,
};

function Buy(id) {
    if (!(id in basket)) {
        basket[id] = {
            counter: 1,
        };
        basket.quantity++;
    }
    else {
        basket[id].counter++;
        basket.quantity++;
    }
};

let doc_basket = document.querySelector('.basket');
let doc_board = document.querySelector('.board');
let doc_product = document.createElement('div');
let doc_result = document.createElement('div');

doc_product.className = 'product';
doc_result.className = 'info';

for (let i in catalog) {
    doc_product.id = i;
    doc_product.innerHTML =
        catalog[i].name +
        ' FOR <span class = "val">' +
        catalog[i].price + '</span>\n';
    doc_board.appendChild(doc_product.cloneNode(true));
}

const product_count = document.querySelectorAll('.product');
for (i = 0; i < product_count.length; i++) {
    product_count[i].addEventListener('click', Buy(product_count[i].id));
};

doc_result.innerHTML = '<p>В корзине<\p> <p> ' + basket.quantity + ' товаров<\p> <p>На сумму: ' + basket.result + '</p>';

doc_basket.appendChild(doc_result);
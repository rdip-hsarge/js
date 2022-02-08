let table = document.querySelector('.board');
let tr = document.createElement('tr');
let th = document.createElement('th');
let color = '';
let numerate = {
    0: ' ',
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'E',
    6: 'F',
    7: 'G',
    8: 'H',
};

th.style.width = '30px';
th.style.height = '30px';

for (i = 0; i <= 8; i++) {
    for (j = 0; j <= 8; j++) {
        if (i == 0) {
            th.innerHTML = numerate[j];
        }
        else if (j == 0) {
            th.style.backgroundColor = 'white';
            th.innerHTML = 9 - i;
        }
        else {
            th.innerHTML = '';
            if ((i + j) % 2) {
                color = '#DDD';
            }
            else {
                color = '#111';
            }
            th.style.backgroundColor = color;
        }
        tr.appendChild(th.cloneNode(true));
    }
    table.appendChild(tr.cloneNode(true));
    tr.innerHTML = '';
}
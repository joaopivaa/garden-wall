// INPUTS
var btn_1 = document.querySelector('#item-1');
var btn_2 = document.querySelector('#item-2');
var btn_3 = document.querySelector('#item-3');

// IMG
var img_1 = document.querySelector('#IMG-1');
var img_2 = document.querySelector('#IMG-2');
var img_3 = document.querySelector('#IMG-3');

// ITEM
var item_1 = document.querySelector('#ITEM-1');
var item_2 = document.querySelector('#ITEM-2');
var item_3 = document.querySelector('#ITEM-3');

// SKIPS
var ant_1 = document.querySelector('#ant-1');
var ant_2 = document.querySelector('#ant-2');
var ant_3 = document.querySelector('#ant-3');

var next_1 = document.querySelector('#next-1');
var next_2 = document.querySelector('#next-2');
var next_3 = document.querySelector('#next-3');

btn_1.addEventListener('click', function () {

    if (img_1.style.display === 'none' && item_1.style.display === 'none') {
        img_1.style.display = 'block';
        item_1.style.display = 'flex';

        img_2.style.display = 'none';
        item_2.style.display = 'none';

        img_3.style.display = 'none';
        item_3.style.display = 'none';
    }
    else {
        img_1.style.display = 'block';
        item_1.style.display = 'flex';

        img_2.style.display = 'none';
        item_2.style.display = 'none';

        img_3.style.display = 'none';
        item_3.style.display = 'none';
    }
});

btn_2.addEventListener('click', function () {

    if (img_2.style.display === 'none' && item_2.style.display === 'none') {
        img_2.style.display = 'block';
        item_2.style.display = 'flex';

        img_1.style.display = 'none';
        item_1.style.display = 'none';

        img_3.style.display = 'none';
        item_3.style.display = 'none';
    }
    else {
        img_2.style.display = 'block';
        item_2.style.display = 'flex';

        img_1.style.display = 'none';
        item_1.style.display = 'none';

        img_3.style.display = 'none';
        item_3.style.display = 'none';
    }
});

btn_3.addEventListener('click', function () {

    if (img_3.style.display === 'none' && item_3.style.display === 'none') {
        img_3.style.display = 'block';
        item_3.style.display = 'flex';

        img_1.style.display = 'none';
        item_1.style.display = 'none';

        img_2.style.display = 'none';
        item_2.style.display = 'none';
    }
    else {
        img_3.style.display = 'block';
        item_3.style.display = 'flex';

        img_1.style.display = 'none';
        item_1.style.display = 'none';

        img_2.style.display = 'none';
        item_2.style.display = 'none';
    }
});

ant_1.addEventListener('click', function () {
    img_3.style.display = 'block';
    item_3.style.display = 'flex';
    ant_3.style.display = 'block';
    next_3.style.display = 'block';
    btn_3.checked = true ;

    img_1.style.display = 'none';
    item_1.style.display = 'none';
    ant_1.style.display = 'none';
    next_1.style.display = 'none';

    img_2.style.display = 'none';
    item_2.style.display = 'none';
    ant_2.style.display = 'none';
    next_2.style.display = 'none';
});

next_1.addEventListener('click', function () {
    img_2.style.display = 'block';
    item_2.style.display = 'flex';
    ant_2.style.display = 'block';
    next_2.style.display = 'block';
    btn_2.checked = true ;

    img_1.style.display = 'none';
    item_1.style.display = 'none';
    ant_1.style.display = 'none';
    next_1.style.display = 'none';

    img_3.style.display = 'none';
    item_3.style.display = 'none';
    ant_3.style.display = 'none';
    next_3.style.display = 'none';
});

ant_2.addEventListener('click', function () {
    img_1.style.display = 'block';
    item_1.style.display = 'flex';
    ant_1.style.display = 'block';
    next_1.style.display = 'block';
    btn_1.checked = true ;

    img_2.style.display = 'none';
    item_2.style.display = 'none';
    ant_2.style.display = 'none';
    next_2.style.display = 'none';

    img_3.style.display = 'none';
    item_3.style.display = 'none';
    ant_3.style.display = 'none';
    next_3.style.display = 'none';
});

next_2.addEventListener('click', function () {
    img_3.style.display = 'block';
    item_3.style.display = 'flex';
    ant_3.style.display = 'block';
    next_3.style.display = 'block';
    btn_3.checked = true ;

    img_1.style.display = 'none';
    item_1.style.display = 'none';
    ant_1.style.display = 'none';
    next_1.style.display = 'none';

    img_2.style.display = 'none';
    item_2.style.display = 'none';
    ant_2.style.display = 'none';
    next_2.style.display = 'none';
});

ant_3.addEventListener('click', function () {
    img_2.style.display = 'block';
    item_2.style.display = 'flex';
    ant_2.style.display = 'block';
    next_2.style.display = 'block';
    btn_2.checked = true ;

    img_1.style.display = 'none';
    item_1.style.display = 'none';
    ant_1.style.display = 'none';
    next_1.style.display = 'none';

    img_3.style.display = 'none';
    item_3.style.display = 'none';
    ant_3.style.display = 'none';
    next_3.style.display = 'none';
});

next_3.addEventListener('click', function () {
    img_1.style.display = 'block';
    item_1.style.display = 'flex';
    ant_1.style.display = 'block';
    next_1.style.display = 'block';
    btn_1.checked = true ;

    img_2.style.display = 'none';
    item_2.style.display = 'none';
    ant_2.style.display = 'none';
    next_2.style.display = 'none';

    img_3.style.display = 'none';
    item_3.style.display = 'none';
    ant_3.style.display = 'none';
    next_3.style.display = 'none';
});
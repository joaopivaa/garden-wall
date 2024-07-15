// CONTROLE DE OPÇÕES

var open = document.querySelector('.open-fill');
var close = document.querySelector('.close-fill');

open.addEventListener('click', function () {

    if (open.style.display === 'none') {
        open.style.display = 'block';
        close.style.display = 'none';
    }
    else {
        open.style.display = 'none';
        close.style.display = 'block';
    }
});

close.addEventListener('click', function () {

    if (close.style.display === 'none') {
        close.style.display = 'block';
        open.style.display = 'none';
    }
    else {
        close.style.display = 'none';
        open.style.display = 'block';
    }
});

// FUNÇÃO DO MENU

const body = document.querySelector("body");

function openMenu() {
    document.getElementById("mobile").classList.toggle("open");
    body.classList.toggle("hidden");
}

function closeMenu() {
    document.getElementById("mobile").classList.remove("open");
    body.classList.remove("hidden");
    open.style.display = "block" ;
    close.style.display = "none" ;
}
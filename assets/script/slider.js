// INPUTS
const buttons = {
    1: document.querySelector('#item-1'),
    2: document.querySelector('#item-2'),
    3: document.querySelector('#item-3')
};

// IMG
const images = {
    1: document.querySelector('#IMG-1'),
    2: document.querySelector('#IMG-2'),
    3: document.querySelector('#IMG-3')
};

// ITEM
const items = {
    1: document.querySelector('#ITEM-1'),
    2: document.querySelector('#ITEM-2'),
    3: document.querySelector('#ITEM-3')
};

// SKIPS
const navigations = {
    ant: {
        1: document.querySelector('#ant-1'),
        2: document.querySelector('#ant-2'),
        3: document.querySelector('#ant-3')
    },
    next: {
        1: document.querySelector('#next-1'),
        2: document.querySelector('#next-2'),
        3: document.querySelector('#next-3')
    }
};

// Função utilitária para mostrar e ocultar elementos
function updateDisplay(activeIndex) {
    for (let i = 1; i <= 3; i++) {
        const displayStyle = i === activeIndex ? 'block' : 'none';
        const flexDisplay = i === activeIndex ? 'flex' : 'none';
        
        images[i].style.display = displayStyle;
        items[i].style.display = flexDisplay;
        buttons[i].checked = i === activeIndex;
        
        if (navigations.ant[i]) navigations.ant[i].style.display = i === activeIndex ? 'block' : 'none';
        if (navigations.next[i]) navigations.next[i].style.display = i === activeIndex ? 'block' : 'none';
    }
}

// Evento para os botões
Object.keys(buttons).forEach(index => {
    buttons[index].addEventListener('click', () => updateDisplay(Number(index)));
});

// Evento para os botões de navegação
Object.keys(navigations.ant).forEach(index => {
    navigations.ant[index].addEventListener('click', () => {
        const prevIndex = Number(index) === 1 ? 3 : Number(index) - 1;
        updateDisplay(prevIndex);
    });
    navigations.next[index].addEventListener('click', () => {
        const nextIndex = Number(index) === 3 ? 1 : Number(index) + 1;
        updateDisplay(nextIndex);
    });
});
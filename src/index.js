// imports
import loadHome from './home';
import loadMenu from './menu';
import loadAbout from './about';
import loadContact from './contact';
import './style.css';

import SweetPotato from './images/sweet-potato.jpg';
import BananaBread from './images/banana-bread.jpg';
import ChickpeaSalad from './images/chickpea-salad.jpg';
import ChocoDonut from './images/chocolate-donut.jpg';

export { SweetPotato, BananaBread, ChickpeaSalad, ChocoDonut } 


// Application
loadHome();

const navButtons = document.querySelectorAll('nav button');
navButtons.forEach(button => {
    button.addEventListener('click', getPage);
})

function getPage(e) {
    clearPage();
    switch (e.target.textContent) {
        case 'Home':
            loadHome();
            break;
        case 'Menu':   
            loadMenu();
            break;
        case 'About':
            loadAbout();
            break;
        case 'Contact':   
            loadContact();
            break;    

    }
}

function clearPage() {
    document.getElementById('content').innerHTML = '';
}
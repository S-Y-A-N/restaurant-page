import loadHome from './home';
import loadMenu from './menu';
import loadAbout from './about';
import loadContact from './contact';

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
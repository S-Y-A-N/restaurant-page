import * as image from './index.js';

export default function loadHome() {
    const content = document.getElementById('content')
    
    const top = document.createElement('div')
    top.classList.add('top')

    // top section
    const text1 = document.createElement('p')
    const text2 = document.createElement('p')
    const text3 = document.createElement('p')
    const button = document.createElement('button')

    text1.classList.add('promo-text')
    text2.classList.add('promo-text')
    text3.classList.add('promo-text')
    button.classList.add('order-button')

    text1.textContent = 'Enjoy food like never before'
    text2.textContent = 'A taste beyond imagination...'
    text3.textContent = 'Beyond dreams!'
    button.textContent = 'Order Now'

    top.appendChild(text1)
    top.appendChild(text2)
    top.appendChild(text3)
    top.appendChild(button)

    content.appendChild(top)

    // middle section
    const menuBanner = document.createElement('div')
    const lBtn = document.createElement('button')
    const rBtn = document.createElement('button')

    const img1 = document.createElement('img')
    const img2 = document.createElement('img')
    const img3 = document.createElement('img')
    
    img1.setAttribute('src', image.ChickpeaSalad);
    img2.setAttribute('src', image.BananaBread);
    img3.setAttribute('src', image.ChocoDonut);
    
    menuBanner.classList.add('banner')
    
    menuBanner.appendChild(lBtn)
    menuBanner.appendChild(img1)
    menuBanner.appendChild(img2)
    menuBanner.appendChild(img3)
    menuBanner.appendChild(rBtn)

    content.appendChild(menuBanner)
}
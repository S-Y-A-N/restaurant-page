export default function loadHome() {
    const content = document.getElementById('content')
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

    content.appendChild(text1)
    content.appendChild(text2)
    content.appendChild(text3)
    content.appendChild(button)
}
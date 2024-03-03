export default function loadAbout() {
    const content = document.getElementById('content')
    const container = document.createElement('div')
    const title = document.createElement('h2')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')

    container.classList.add('card')

    title.textContent = 'Serving since and for Eternity'

    p1.textContent = 'Fandango opened on the destined day of old. That is to say, it has always been there, but your gaze may have only met with us when it was fated. Oh, ever beautiful customer, it is in our nature to cook and serve, and for you to eat and leave no crumbs.'

    p2.textContent = 'We are here for you and only you. You are our priority, and for that we live. Committed to cooking and serving as we always did, we opened branches in every corner of this meticulously crafted universe. Successful as we were, we are one with every atom. Fear not, customer, for we make food specially made for your unique being.'

    p3.textContent = 'Welcome Home'
    p3.style.fontWeight = 'bold'

    container.appendChild(title)
    container.appendChild(p1)
    container.appendChild(p2)
    container.appendChild(p3)
    
    content.appendChild(container)
}
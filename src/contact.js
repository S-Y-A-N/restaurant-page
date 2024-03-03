export default function loadContact() {
    const content = document.getElementById('content')
    const container = document.createElement('div')
    const title = document.createElement('h2')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')

    container.classList.add('card')

    title.textContent = `Don't hesitate to contact us!`

    p1.textContent = 'Phone Number: +973 17 0101 0111'

    p2.textContent = 'Email: info@fandango.com'

    p3.textContent = 'We are happy to hear from you'
    p3.style.fontWeight = 'bold'

    container.appendChild(title)
    container.appendChild(p1)
    container.appendChild(p2)
    container.appendChild(p3)
    
    content.appendChild(container)
}
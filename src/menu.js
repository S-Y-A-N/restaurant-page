import { SweetPotato, ChickpeaSalad, BananaBread, ChocoDonut} from './index.js';

export default function loadMenu() {
    const content = document.getElementById('content')
    const title = document.createElement('h2')
    const container = document.createElement('div')

    title.classList.add('promo-text')
    container.classList.add('menu')

    title.textContent = 'Menu'

    // Menu items
    let menuItems = []

    const item1 = new Item(SweetPotato, 'Sweet Potato Fries', 'Golden sweet potato fries with parsely on top and a side of ketchup.', 2.99);
    const item2 = new Item(ChickpeaSalad, "Autumn's Bounty", "Roasted chickpeas, pumpkins and sliced apples. Adorned with raisins and fresh basil.", 4.99);
    const item3 = new Item(BananaBread, 'Banana Bread', 'Golden sweet potato fries with parsely on top and a side of ketchup.', 3.99);
    const item4 = new Item(ChocoDonut, 'Chocolate Donut', 'Golden sweet potato fries with parsely on top and a side of ketchup.', 0.99);

    menuItems.push(item1, item2, item3, item4)
    menuItems.forEach(item => container.appendChild(displayItem(item)));


    content.appendChild(title)
    content.appendChild(container)
}

function Item(img, name, desc, price) {
    this.img = img;
    this.name = name;
    this.desc = desc;
    this.price = price;
}

function displayItem(item) {
    const div = document.createElement('div')
    const textDiv = document.createElement('div')
    const itemImg = document.createElement('img')
    const itemName = document.createElement('h3')
    const itemDesc = document.createElement('p')
    const itemPrice = document.createElement('p')

    itemImg.setAttribute('src', item.img);

    itemName.textContent = item.name;
    itemDesc.textContent = item.desc;
    itemPrice.textContent = `$ ${item.price}`;

    div.appendChild(itemImg)
    textDiv.appendChild(itemName)
    textDiv.appendChild(itemDesc)
    textDiv.appendChild(itemPrice)

    div.appendChild(textDiv)
    
    return div;
}
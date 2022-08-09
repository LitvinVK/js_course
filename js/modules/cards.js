import {getResource} from '../services/services';

function cards() {
    const cardContainer = document.querySelector('.menu__field').firstElementChild; 
    cardContainer.innerHTML = '';

    class CardMenu {
        constructor(image, alt, title, text, cost) {
            this.image = image;
            this.alt = alt;
            this.title = title;
            this.text = text;
            this.cost = cost;
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.cost = this.cost * this.transfer;
        }

        render() {
            cardContainer.innerHTML += `
                <div class="menu__item">
                    <img src="${this.image}" alt="${this.alt}">
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.text}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.cost}</span> грн/день</div>
                    </div>
                </div>
            `;
        }
    }

    getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => {
                new CardMenu(img, altimg, title, descr, price).render();
            });
        });
}

export default cards;
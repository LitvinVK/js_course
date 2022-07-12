/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const ads = document.querySelectorAll('.promo__adv > img');
ads.forEach(item => {
    item.remove();
});

const genre = document.querySelector('.promo__genre');
genre.textContent = 'ДРАМА';

const bg = document.querySelector('.promo__bg');
bg.style.backgroundImage = 'url("img/bg.jpg")';

const movies = document.querySelector('.promo__interactive-list');
movies.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movies.innerHTML += `
        <li class="promo__interactive-item">${i + 1}: ${film}
            <div class="delete"></div>
        </li>
    `;
});

const btn = document.querySelector('.add > button');
const inp = document.querySelector('.adding__input');
const cb = document.querySelector('[type="checkbox"]');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (inp.value) {
        movieDB.movies.push(inp.value);
    }

    movieDB.movies.sort();

    movies.innerHTML = '';
    
    movieDB.movies.forEach((film, i) => {
        if (film.length > 21) {
            film = `${film.substring(0,22)}...`;
        }
            movies.innerHTML += `
                <li class="promo__interactive-item">${i + 1}: ${film}
                    <div class="delete"></div>
                </li>
            `;
    });

    if (cb.checked) {
        console.log('Добавляем любимый фильм');
    }

    inp.value = '';
    cb.checked = false;
});

const dels = document.querySelectorAll('.delete');
dels.forEach((del, i) => {
    del.addEventListener('click', () => {
        dels[i].parentNode.remove();
        movieDB.movies.splice(i, 1);
    });
});
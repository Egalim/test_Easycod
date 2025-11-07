const movies = [
    {
        id: 1,
        title: "Крестный отец",
        image: "img/father.jpg",
        description: "Эпическая история сицилийской мафиозной семьи Корлеоне.",
        year: "1972",
        director: "Фрэнсис Форд Коппола",
        actors: "Марлон Брандо, Аль Пачино, Джеймс Каан",
        rating: "9.2"
    },
    {
        id: 2,
        title: "Побег из Шоушенка",
        image: "img/run.jpg",
        description: "Драма о надежде и дружбе в тюремных стенах.",
        year: "1994",
        director: "Фрэнк Дарабонт",
        actors: "Тим Роббинс, Морган Фриман",
        rating: "9.3"
    },
    {
        id: 3,
        title: "Темный рыцарь",
        image: "img/batman.jpg",
        description: "Бэтмен сталкивается с главным испытанием - Джокером.",
        year: "2008",
        director: "Кристофер Нолан",
        actors: "Кристиан Бейл, Хит Леджер, Аарон Экхарт",
        rating: "9.0"
    },
    {
        id: 4,
        title: "Форрест Гамп",
        image: "img/forest_gump.jpg",
        description: "История простого человека, который стал свидетелем ключевых событий американской истории.",
        year: "1994",
        director: "Роберт Земекис",
        actors: "Том Хэнкс, Робин Райт, Гэри Синиз",
        rating: "8.8"
    },
    {
        id: 5,
        title: "Начало",
        image: "img/start.jpg",
        description: "Воришка идей пытается очистить свое имя, выполнив невозможное задание.",
        year: "2010",
        director: "Кристофер Нолан",
        actors: "Леонардо ДиКаприо, Марион Котийяр, Эллен Пейдж",
        rating: "8.8"
    },
    {
        id: 6,
        title: "Матрица",
        image: "img/matrica.jpg",
        description: "Хакер узнает шокирующую правду о реальности и своей роли в войне против ее контролеров.",
        year: "1999",
        director: "Лана и Лилли Вачовски",
        actors: "Киану Ривз, Лоренс Фишберн, Кэрри-Энн Мосс",
        rating: "8.7"
    }
]

function createCards() {
    const container = document.getElementById('cardsContainer')
    movies.forEach(movie => {
        const card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = `
                    <img src="${movie.image}" alt="${movie.title}" class="card-img">
                    <div class="card-content">
                        <h3 class="card-title">${movie.title}</h3>
                        <p class="card-description">${movie.description}</p>
                        <button class="card-button" data-id="${movie.id}">Подробнее</button>
                    </div>
                `
        container.appendChild(card)
    })

    document.querySelectorAll('.card-button').forEach(button => {
        button.addEventListener('click', function () {
            const movieId = parseInt(this.getAttribute('data-id'))
            openModal(movieId)
        })
    })
}

function closeModal() {
    document.getElementById('modal').style.display = 'none'
}

function openModal(movieId) {
    const movie = movies.find(m => m.id === movieId)
    if (!movie) return

    document.querySelector('.modal-content').innerHTML = `
        <span class="close-button">&times;</span>
        <img src="${movie.image}" alt="${movie.title}" class="modal-img">
        <h2 class="modal-title">${movie.title}</h2>
        <p class="modal-description">${movie.description}</p>
        <div class="modal-details">
            <div class="detail-item">
                <span class="detail-label">Год выпуска:</span>
                <span class="detail-value">${movie.year}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Режиссер:</span>
                <span class="detail-value">${movie.director}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Актеры:</span>
                <span class="detail-value">${movie.actors}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Рейтинг:</span>
                <span class="detail-value"><span class="rating">${movie.rating}/10</span></span>
            </div>
        </div>
    `
    document.querySelector('.close-button').addEventListener('click', closeModal)
    document.getElementById('modal').style.display = 'block'
}


document.addEventListener('DOMContentLoaded', function () {
    createCards()
    document.querySelector('.close-button').addEventListener('click', closeModal)
    window.addEventListener('click', function (event) {
        const modal = document.getElementById('modal')
        if (event.target === modal) {
            closeModal()
        }
    })
}) 
export default class Card {
    constructor(item, template, handleCardClick) {
        this._template = document.querySelector(template).content;
        this._name = item.name;
        this._link = item.link;
        this._handleCardClick = handleCardClick;
    }
    //функция удаления карточки
    _handleDelete = () => {
        this._newItem.remove();
        this._newItem = null;
    }

    //функция выделения лайка
    _toggleLikes = () => {
        this._likeButton.classList.toggle('element__heart_active');
    }

    //работа с карточками
    createCard() {
        this._newItem = this._template.querySelector(".element").cloneNode(true);
        this._image = this._newItem.querySelector('.element__image');
        this._likeButton = this._newItem.querySelector(".element__heart");
        this._deleteButton = this._newItem.querySelector(".element__delete");
        this._newItem.querySelector('.element__text').textContent = this._name;
        this._image.src = this._link;
        this._image.alt = this._name;
        this._setEventListeners();
        return this._newItem;
    }

    //функция срабатывания клика при удалении и лайке
    _setEventListeners() {
        this._deleteButton.addEventListener('click', this._handleDelete);
        this._likeButton.addEventListener('click', this._toggleLikes);
        this._image.addEventListener("click", () =>
            this._handleCardClick(this._name, this._link)
        );
    }
}

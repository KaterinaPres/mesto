export default class Card {
    constructor(item, template, cardClick) {
        this._template = document.querySelector(template).content;
        this._name = item.name;
        this._link = item.link;
        this._cardClick = cardClick;
    }
    //функция удаления карточки
    _handleDelete = (event) => {
        event.target.closest('.element').remove();
    }

    //функция выделения лайка
    _toggleLikes = (event) => {
        event.target.classList.toggle('element__heart_active');
    }

    //функция срабатывания клика при удалении и лайке
    _addListeners() {
        this._deleteButton.addEventListener('click', this._handleDelete);
        this._likeButton.addEventListener('click', this._toggleLikes);
        this._image.addEventListener("click", () =>
            this._cardClick(this._name, this._link)
        );
    }

    //работа с карточками
    createCard() {
        this._newItem = this._template.cloneNode(true);
        this._image = this._newItem.querySelector('.element__image');
        this._likeButton = this._newItem.querySelector(".element__heart");
        this._deleteButton = this._newItem.querySelector(".element__delete");
        this._newItem.querySelector('.element__text').textContent = this._name;
        this._image.setAttribute('src', this._link);
        this._image.setAttribute('alt', this._name);
        this._addListeners();
        return this._newItem;
    }
    // handleCardClick = (evt) =>{
    //     evt.preventDefault();
    //     this.card = { name: nameElement.value, link: linkImage.value };
    //     renderItem(card);
    //     closePopupAdd();
    //     evt.target.reset();
    // }
}

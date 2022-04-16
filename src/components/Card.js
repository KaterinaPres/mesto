export default class Card {
  constructor(item, template, handleCardClick, handleDeleteClick, handleLikeClick, userId) {
    this._template = document.querySelector(template).content;
    this._name = item.name;
    this._link = item.link;
    this._likes = item.likes;
    this._id = item._id;
    this._userId = userId;
    this._ownerId = item.owner._id;
    this._handleLikeClick = handleLikeClick;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
  }

  //функция удаления карточки
  handleDelete = () => {
    this._newItem.remove();
    this._newItem = null;
  }

  // функция выделения лайка
  _toggleLikes = () => {
    this._likeButton.classList.toggle('element__heart_active');
  }

  isLiked() {
    const userCardLike = this._likes.find((user) => user._id === this._userId);
    return userCardLike;
  }

  userIsOwner() {
    return this._ownerId === this._userId;
  }

  setLikes(newLikes) {
    this._likes = newLikes;
    this._likeNumberElement.textContent = this._likes.length;
    if (this.isLiked()) {
      this._addLikeElement();
    } else {
      this._removeLikeElement();
    }
  }

  _addLikeElement = () => {
    this._likeButton.classList.add("element__heart_active");
  };

  _removeLikeElement = () => {
    this._likeButton.classList.remove("element__heart_active");
  };

  //работа с карточками
  createCard() {
    this._newItem = this._template.querySelector(".element").cloneNode(true);
    this._image = this._newItem.querySelector('.element__image');
    this._likeButton = this._newItem.querySelector(".element__heart");
    this._likeNumberElement = this._newItem.querySelector(".element__like-number");
    this._newItem.querySelector('.element__text').textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;
    this.setLikes(this._likes);
    if (this.userIsOwner()) {
      this._deleteButton = this._newItem.querySelector(".element__delete");
    } else {
      this._deleteButton = '';
      this._newItem.querySelector(".element__delete").remove();
    }
    this._setEventListeners();
    return this._newItem;
  }

  //функция срабатывания клика при удалении и лайке
  _setEventListeners() {
    if (this._deleteButton) {
      this._deleteButton.addEventListener('click', () => this._handleDeleteClick(this._id));
    }
    this._likeButton.addEventListener('click', () => this._handleLikeClick(this._id));
    this._image.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link)
    );
  }
}

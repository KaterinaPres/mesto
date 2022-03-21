import { Card } from "./Card.js";
import { FormValidator } from './FormValidator.js';

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
const profileOpenPopupButton = document.querySelector('.profile__button');
const popupAdd = document.querySelector('.popup-add');
const popupEdit = document.querySelector('.popup-edit');
const popupImage = document.querySelector('.popup-image');
const profileCloseButton = document.querySelector('.popup-edit .popup__close');
const list = document.querySelector('.elements');
const addOpenPopupButton = document.querySelector('.profile__add-button');
const addCloseButton = document.querySelector('.popup-add .popup__close');
const imageCloseButton = document.querySelector('.popup-image .popup__close');
const formElementPopupEdit = document.querySelector('form[name="popup-edit"]');
const formElementPopupAdd = document.querySelector('form[name="popup-add"]');
const userName = document.getElementById('userName');
const job = document.getElementById('job');
const profileNewName = document.querySelector('.profile__title');
const profileNewProf = document.querySelector('.profile__subtitle');
const nameElement = document.getElementById('nameElement');
const linkImage = document.getElementById('linkImage');
const picture = popupImage.querySelector('.popup__pictire');
const text = popupImage.querySelector('.popup__text');
const addButton = popupAdd.querySelector(".popup__save");
const editButton = popupEdit.querySelector(".popup__save");

profileOpenPopupButton.addEventListener('click', openPopupProfile);
addOpenPopupButton.addEventListener('click', openPopupAdd);

//функция выбора карточек из массива
function render() {
    initialCards.forEach(renderItem);
}

function renderItem(element) {
    const newItem = createCard(element)
    list.prepend(newItem);
}

//работа с карточками
function createCard(item) {
    const card = new Card(item, "#template", openPopupImage);
    const cardElement = card.createCard();
    return cardElement;
}

//функция срабатывания кнопки "Создать" в popup добавления карточки
function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const card = { name: nameElement.value, link: linkImage.value };
    renderItem(card);
    closePopupAdd();
    evt.target.reset();
}

//открытие popup
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener("keydown", closePopupEsc);
    popup.addEventListener("mousedown", closePopupOverley);
}

//открытие редактирования профиля
function openPopupProfile() {
    userName.value = profileNewName.textContent;
    job.value = profileNewProf.textContent;
    formValidators['popup-edit'].setSubmitButtonState(editButton);
    formValidators['popup-edit'].resetValidation();
    openPopup(popupEdit);
}

//открытие popup добавления карточки
function openPopupAdd() {
    formValidators['popup-add'].setSubmitButtonState(addButton);
    formValidators['popup-add'].resetValidation();
    openPopup(popupAdd);
}

//открытие popup картинки
const openPopupImage = (name, link) => {
    picture.src = link;
    picture.alt = name;
    text.textContent = name;
    openPopup(popupImage);
}

//закрытие любого popup
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener("keydown", closePopupEsc);
    popup.removeEventListener("mousedown", closePopupOverley);
}

function closePopupAdd() {
    closePopup(popupAdd);
}

function closePopupEdit() {
    closePopup(popupEdit);
}

function closePopupImage() {
    closePopup(popupImage);
}

//закрытие при клике на задний фон
function closePopupOverley(event) {
    if (event.target === event.currentTarget) {
        closePopup(event.target);
    }
}

//закрытие при нажатие на Esc
function closePopupEsc(event) {
    if (event.key == "Escape") {
        closePopup(document.querySelector(".popup_opened"));
    }
}

//сохранение popup редактирования профиля
function savePopupEdit(evt) {
    evt.preventDefault();
    profileNewName.textContent = userName.value;
    profileNewProf.textContent = job.value;
    closePopupEdit();
}

imageCloseButton.addEventListener('click', closePopupImage);
formElementPopupEdit.addEventListener('submit', savePopupEdit);
formElementPopupAdd.addEventListener('submit', handleCardFormSubmit);
document.addEventListener("DOMContentLoaded", render);
profileCloseButton.addEventListener('click', closePopupEdit);
addCloseButton.addEventListener('click', closePopupAdd);

const validationParameters = {
    formSelector: '.popup__container',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_notactive',
    inputErrorClass: 'popup__message_active',
    errorClass: 'popup__item_error'
};

const formValidators = {};

//добавление обработчиков всем формам
const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
        const validator = new FormValidator(config, formElement);
        const formName = formElement.getAttribute("name");
        formValidators[formName] = validator;
        validator.enableValidation();
    });
}

// включение валидации вызовом enableValidation
// все настройки передаются при вызове
enableValidation(validationParameters);
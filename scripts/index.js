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
let profileOpenPopupButton = document.querySelector('.profile__button');
let popupAdd = document.querySelector('.popup-add');
let popupEdit = document.querySelector('.popup-edit');
let popupImage = document.querySelector('.popup-image');
let profileCloseButton = document.querySelector('.popup-edit .popup__close');
let template;
let list = document.querySelector('.elements');
let AddOpenPopupButton = document.querySelector('.profile__add-button');
let AddCloseButton = document.querySelector('.popup-add .popup__close');
let ImageOpenPopupButton;
let ImageCloseButton;
let formElement = document.querySelector('form[name="popup-edit"]');
let formElement1 = document.querySelector('form[name="popup-add"]');
let namePersonag = document.getElementById('namePersonag');
let professia = document.getElementById('professia');
let profileNewName = document.querySelector('.profile__title');
let profileNewProf = document.querySelector('.profile__subtitle');
let AddNewName = document.querySelector('.element__text');
let AddNewImage = document.querySelector('.element__image');
let nameElement = document.getElementById('nameElement');
let linkImage = document.getElementById('linkImage');

profileOpenPopupButton.addEventListener('click', openPopupProfile);
AddOpenPopupButton.addEventListener('click', openPopupAdd);

//функция выбора карточек из массива
function render() {
    initialCards.forEach(renderItem);
}

//функция инициализации
function init() {
    template = document.querySelector('#template').content;
    render();
    ImageCloseButton = document.querySelector('.popup-image .popup__close');
    ImageCloseButton.addEventListener('click', closePopup);
}

//работа с карточками
function renderItem(element) {
    const NewItem = template.cloneNode(true);
    NewItem.querySelector('.element__text').innerText = element.name;
    NewItem.querySelector('.element__image').setAttribute('src', element.link);
    NewItem.querySelector('.element__image').addEventListener('click', openPopupImage);
    addListeners(NewItem);
    list.prepend(NewItem);
    return NewItem;
}

//функция срабатывания клика при удалении и лайке
function addListeners(el) {
    el.querySelector('.element__delete').addEventListener('click', handleDelete);
    el.querySelector('.element__heart').addEventListener('click', handleActive);
}

//функция выделения лайка
function handleActive(event) {
    event.target.classList.toggle('element__heart_active');
}

//функция удаления карточки
function handleDelete(event) {
    event.target.closest('.element').remove();
}

//функция срабатывания кнопки "Создать" в popup добавления карточки
function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const card = { name: nameElement.value, link: linkImage.value };
    renderItem(card);
    closePopup();
    nameElement.value = "";
    linkImage.value = "";
}

//открытие редактирования профиля
function openPopupProfile() {
    namePersonag.value = profileNewName.innerHTML;
    professia.value = profileNewProf.innerHTML;
    popupEdit.classList.add('popup_opened');
}

//открытие popup добавления карточки
function openPopupAdd() {
    popupAdd.classList.add('popup_opened');
}

//открытие popup картинки
function openPopupImage(evt) {
    let item = evt.target;
    let image = popupImage.querySelector('.popup__images img');
    image.setAttribute('src', item.getAttribute('src'));
    image.setAttribute('alt', item.getAttribute('alt'));
    let text = popupImage.querySelector('.popup__text');
    text.innerText = item.parentNode.querySelector('.element__text').innerText;
    popupImage.classList.add('popup_opened');
}

//закрытие любого popup
function closePopup() {
    popupEdit.classList.remove('popup_opened');
    popupAdd.classList.remove('popup_opened');
    popupImage.classList.remove('popup_opened');
}

//сохранение popup редактирования профиля
function savePopupEdit(evt) {
    evt.preventDefault();
    profileNewName.innerHTML = namePersonag.value;
    profileNewProf.innerHTML = professia.value;
    closePopup();
}

formElement.addEventListener('submit', savePopupEdit);
formElement1.addEventListener('submit', handleCardFormSubmit);
document.addEventListener("DOMContentLoaded", init);
profileCloseButton.addEventListener('click', closePopup);
AddCloseButton.addEventListener('click', closePopup);

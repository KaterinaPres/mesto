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
let popupAdd = document.querySelector('.popup__add');
let popupEdit = document.querySelector('.popup__edit');
let profileCloseButton = document.querySelector('.popup__edit .popup__close');
let template;
let list = document.querySelector('.elements');
let AddOpenPopupButton = document.querySelector('.profile__add-button');
let AddCloseButton = document.querySelector('.popup__add .popup__close');

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
profileCloseButton.addEventListener('click', closePopup);
AddOpenPopupButton.addEventListener('click', openPopupAdd);
AddCloseButton.addEventListener('click', closePopup);


function render() {
    initialCards.forEach(renderItem);
}
function init() {
    template = document.querySelector('#template').content;
    render();
}

function renderItem(element) {
    const NewItem = template.cloneNode(true);
    NewItem.querySelector('.element__text').innerText = element.name;
    NewItem.querySelector('.element__image').setAttribute('src', element.link);
    list.appendChild(NewItem);
    addEventListener(NewItem);
}

function addEventListener(el) {
    el.querySelector('.element__delete').addEventListener('click', handleDelete);
}

function handleDelete() {

}

function openPopupProfile() {
    namePersonag.value = profileNewName.innerHTML;
    professia.value = profileNewProf.innerHTML;
    popupEdit.classList.add('popup_opened');
}

function openPopupAdd() {
    popupAdd.classList.add('popup_opened');
}

function closePopup() {
    popupEdit.classList.remove('popup_opened');
    popupAdd.classList.remove('popup_opened');
}

function savePopupEdit(evt) {
    evt.preventDefault();
    profileNewName.innerHTML = namePersonag.value;
    profileNewProf.innerHTML = professia.value;
    closePopup();
}

function savePopupAdd(evt) {
    evt.preventDefault();
    AddNewName.innerHTML = nameElement.value;
    AddNewImage.innerHTML = linkImage.value;
    closePopup();
}
formElement.addEventListener('submit', savePopupEdit);
formElement1.addEventListener('submit', savePopupAdd);

document.addEventListener("DOMContentLoaded", init);

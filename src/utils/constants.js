export const initialCards = [
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
export const profileOpenPopupButton = document.querySelector('.profile__button');
// export const popupAdd = document.querySelector('.popup-add');
// export const popupEdit = document.querySelector('.popup-edit');
// const popupImage = document.querySelector('.popup-image');
export const profileCloseButton = document.querySelector('.popup-edit .popup__close');
export const list = document.querySelector('.elements');
export const addOpenPopupButton = document.querySelector('.profile__add-button');
export const addCloseButton = document.querySelector('.popup-add .popup__close');
export const imageCloseButton = document.querySelector('.popup-image .popup__close');
// const formElementPopupEdit = document.querySelector('form[name="popup-edit"]');
// const formElementPopupAdd = document.querySelector('form[name="popup-add"]');
export const userName = document.getElementById('userName');
export const job = document.getElementById('job');
export const profileNewName = document.querySelector('.profile__title');
export const profileNewProf = document.querySelector('.profile__subtitle');
export const nameElement = document.getElementById('nameElement');
export const linkImage = document.getElementById('linkImage');
export const picture = popupImage.querySelector('.popup__pictire');
// const te+xt = popupImage.querySelector('.popup__text');
export const addButton = popupAdd.querySelector(".popup__save");
export const editButton = popupEdit.querySelector(".popup__save");

export const validationParameters = {
    formSelector: '.popup__container',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_notactive',
    inputErrorClass: 'popup__message_active',
    errorClass: 'popup__item_error'
};

export const formValidators = {};

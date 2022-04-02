
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
export const popupAddSelector = '.popup-add';
export const popupEditSelector = '.popup-edit';
export const popupImageSelector = '.popup-image';
export const listSelector = '.elements';
export const addOpenPopupButton = document.querySelector('.profile__add-button');
export const formElementPopupEdit = document.querySelector('form[name="popup-edit"]');
export const userName = document.querySelector('#userName');
export const jobInput = document.querySelector('#job');
export const profileNewName = document.querySelector('.profile__title');
export const profileNewProf = document.querySelector('.profile__subtitle');
export const nameElement = document.getElementById('nameElement');
export const linkImage = document.getElementById('linkImage');
export const addButton = document.querySelector(popupAddSelector + " .popup__save");
export const editButton = document.querySelector(popupEditSelector + " .popup__save");

export const validationParameters = {
    formSelector: '.popup__container',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_notactive',
    inputErrorClass: 'popup__message_active',
    errorClass: 'popup__item_error'
};

export const formValidators = {};

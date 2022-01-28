let profileOpenPopupButton = document.querySelector('.profile__button');
let popup = document.querySelector('.popup');
let profileCloseButton = document.querySelector('.popup__close');


profileOpenPopupButton.addEventListener('click', openPopup)
profileCloseButton.addEventListener('click', closePopup)

let formElement = document.querySelector('.popup__container')
let namePersonag = document.getElementById('namePersonag')
let professia = document.getElementById('professia')
let profileNewName = document.querySelector('.profile__title')
let profileNewProf = document.querySelector('.profile__subtitle')
let saveButton = document.querySelector('.popup__save')

function openPopup() {
    namePersonag.value = profileNewName.innerHTML
    professia.value = profileNewProf.innerHTML
    popup.classList.add('popup_opened')
}

function closePopup() {
    popup.classList.remove('popup_opened')
}

function savePopup() {
    profileNewName.innerHTML = namePersonag.value
    profileNewProf.innerHTML = professia.value
    closePopup()
}
saveButton.addEventListener('click', savePopup)

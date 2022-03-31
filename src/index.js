import "../src/pages/index.css"; // добавьте импорт главного файла стилей
import {
    initialCards,
    profileOpenPopupButton,
    addButton,
    userName,
    job,
    editButton,
    validationParameters,
    formValidators,
} from "./utils/constants.js";
import FormValidator from "./components/FormValidator.js";
import Card from "./components/Card.js";
import Section from "./components/Section.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";


profileOpenPopupButton.addEventListener('click', openPopupProfile);
addOpenPopupButton.addEventListener('click', openPopupAdd);

// Добавление карточки
const section = new Section(
    { items: initialCards, renderer: render },
    ".elements"
);
const userInfo = new UserInfo({
    nameSelector: ".profile__title",
    jobSelector: ".profile__subtitle",
});

const popupAdd = new PopupWithForm(
    ".popup-add",
    handleCardFormSubmit
);

const popupEdit = new PopupWithForm(
    ".popup-edit",
    handleCardFormSubmit
);

const popupImage = new PopupWithImage(".popup-image");
//функция выбора карточек из массива
function render() {
    initialCards.forEach(renderItem);
}

function renderItem(element) {
    const newItem = createCard(element)
    section.addItem(newItem);
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

// //открытие popup
// function openPopup(popup) {
//     // popup.classList.add('popup_opened');
//     // document.addEventListener("keydown", closePopupEsc);
//     // popup.addEventListener("mousedown", closePopupOverley);
// }

//открытие редактирования профиля
function openPopupProfile() {
    const { name, jobInput } = userInfo.getUserInfo();
    userName.value = name;
    jobInput.value = job;
    // formValidators["myFormProfileEdite"].resetValidation();

    formValidators['popup-edit'].setSubmitButtonState(editButton);
    formValidators['popup-edit'].resetValidation();
    // openPopup(popupEdit);
    popupEdit.open();
}
section.render();
//открытие popup добавления карточки
function openPopupAdd() {
    formValidators['popup-add'].setSubmitButtonState(addButton);
    formValidators['popup-add'].resetValidation();
    // formValidators["myFormAddPhoto"].resetValidation();
    popupAdd.open();
}

//открытие popup картинки
const openPopupImage = (name, link) => {
    popupWithImage.open(name, link);
}

//закрытие любого popup
function closePopup(popup) {
    // popup.classList.remove('popup_opened');
    // document.removeEventListener("keydown", closePopupEsc);
    // popup.removeEventListener("mousedown", closePopupOverley);
}

function closePopupAdd() {
    popupAdd.close();
}

function closePopupEdit() {
    popupEdit.close();
}

function closePopupImage() {
    popupImage.close();
}

//закрытие при клике на задний фон
function closePopupOverley(event) {
    if (event.target === event.currentTarget) {
        closePopup(event.target);
    }
}

//закрытие при нажатие на Esc
// function closePopupEsc(event) {
//     if (event.key == "Escape") {
//         closePopup(document.querySelector(".popup_opened"));
//     }
// }

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
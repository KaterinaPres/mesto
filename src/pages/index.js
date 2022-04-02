import "./index.css"; // добавьте импорт главного файла стилей
import {
    buttonAdd,
    popupOpenAddButton,
    formValidators,
    initialCards,
    jobInput,
    profileOpenPopupButton,
    userName,
    validationParameters,
} from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

// Добавление карточки
const section = new Section(
    { items: initialCards, renderer: renderItem },
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
    savePopupEdit
);

const popupImage = new PopupWithImage('.popup-image');

popupAdd.setEventListeners();
popupEdit.setEventListeners();
popupImage.setEventListeners();

profileOpenPopupButton.addEventListener('click', openPopupProfile);
popupOpenAddButton.addEventListener('click', openPopupAdd);

function renderItem(element) {
    const newItem = createCard(element);
    section.addItem(newItem);

}

//работа с карточками
function createCard(item) {
    const card = new Card(item, '.elements__template', openPopupImage);
    const cardElement = card.createCard();
    return cardElement;
}

//функция срабатывания кнопки "Создать" в popup добавления карточки
function handleCardFormSubmit(inputValues) {
    const card = { name: inputValues.nameElement, link: inputValues.linkImage };
    renderItem(card);
    popupAdd.close();
}

//открытие редактирования профиля
function openPopupProfile() {
    const data = userInfo.getUserInfo();
    userName.value = data.userName;
    jobInput.value = data.job;
    formValidators['popup-edit'].resetValidation();
    popupEdit.open();
}

//открытие popup добавления карточки
function openPopupAdd() {
    formValidators['popup-add'].setSubmitButtonState(buttonAdd);
    formValidators['popup-add'].resetValidation();
    popupAdd.open();
}

//открытие popup картинки
const openPopupImage = (name, link) => {
    popupImage.open(name, link);
}

//сохранение popup редактирования профиля
function savePopupEdit(data) {
    userInfo.setUserInfo(data.name, data.job);
    popupEdit.close();
}

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

section.render();
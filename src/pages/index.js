import "./index.css"; // добавьте импорт главного файла стилей
import {
    buttonAdd,
    popupOpenAddButton,
    avatarButton,
    formValidators,
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
import { api } from "../components/Api.js";
let userId;

Promise.all([api.getProfile(), api.getInitialCards()])
    .then(([userData, cards]) => {
        userInfo.setUserInfo(userData.name, userData.about);
        userInfo.addUserAvatar(userData.avatar);
        userId = userData._id;
        section.render(cards);
    })
    .catch((err) => {
        console.log(err);
    });

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

enableValidation(validationParameters);

// Добавление карточки
const section = new Section({ renderer: renderItem }, ".elements");

const userInfo = new UserInfo({
    nameSelector: ".profile__title",
    jobSelector: ".profile__subtitle",
    avatarSelector: ".profile__avatar",
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
const popupDeleteImage = new PopupWithForm(".popup-delete");

function renderItem(element) {
    const newItem = createCard(element);
    section.addItem(newItem);
}

//открытие редактирования профиля
function openPopupProfile() {
    const { name, about } = userInfo.getUserInfo();
    userName.value = name;
    jobInput.value = about;
    formValidators['popup-edit'].resetValidation();
    popupEdit.open();
}

//открытие popup добавления карточки
function openPopupAdd() {
    formValidators['popup-add'].resetValidation();
    popupAdd.open();
}

//открытие popup картинки
const openPopupImage = (name, link) => {
    popupImage.open(name, link);
}

//работа с карточками
function createCard(item) {
    const card = new Card(item, '.elements__template', openPopupImage, (id) => {
        popupDeleteImage.open();
        popupDeleteImage.changeSubmitForm(() => {
            api.deleteCard(id)
                .then((res) => {
                    card.handleDelete();
                    popupDeleteImage.close();
                })
                .catch((res) => {
                    console.log(res);
                });
        });
    },
        (id) => {
            if (card.isLiked()) {
                api.deleteLike(id)
                    .then((res) => {
                        card.setLikes(res.likes);
                    })
                    .catch((res) => {
                        console.log(res);
                    });
            } else {
                api.addLike(id)
                    .then((res) => {
                        card.setLikes(res.likes);
                    })
                    .catch((res) => {
                        console.log(res);
                    });
            }
        },
        userId
    );
    const cardElement = card.createCard();
    return cardElement;
}

//функция срабатывания кнопки "Создать" в popup добавления карточки
function handleCardFormSubmit(data) {
    popupAdd.renderLoading(true);
    api.addNewCard(data.nameElement, data.linkImage)
        .then((res) => {
            renderItem({ ...res, userId });
            popupAdd.close();
        })
        .catch((err) => {
            console.log("Error: ", err);
        })
        .finally(() => {
            popupAdd.renderLoading(false);
        });
}

//сохранение popup редактирования профиля
function savePopupEdit(data) {
    const { name, about } = data;
    popupEdit.renderLoading(true);
    api.editProfile(name, about)
        .then((res) => {
            userInfo.setUserInfo(data.name, data.about);
            popupEdit.close();
        })
        .catch((err) => {
            console.log("Errorr: ", err);
        })
        .finally(() => {
            popupEdit.renderLoading(false);
        });
}

function handleAvatarFormSubmit(data) {
    const link = data.linkAvatar;
    addAvatarPopup.renderLoading(true);
    api.editAvatarProfile(link)
        .then((res) => {
            userInfo.addUserAvatar(res.avatar);
            addAvatarPopup.close();
        })
        .catch((err) => {
            console.log("Error: ", err);
        })
        .finally(() => {
            addAvatarPopup.renderLoading(false);
        });
}

function openPopupAvatar() {
    formValidators["popup-avatar"].resetValidation();
    addAvatarPopup.open();
}
// Popup редактирования аватара
const addAvatarPopup = new PopupWithForm(
    ".popup-avatar",
    handleAvatarFormSubmit
);

popupAdd.setEventListeners();
popupEdit.setEventListeners();
popupImage.setEventListeners();
popupDeleteImage.setEventListeners();
addAvatarPopup.setEventListeners();

avatarButton.addEventListener("click", openPopupAvatar);
profileOpenPopupButton.addEventListener('click', openPopupProfile);
popupOpenAddButton.addEventListener('click', openPopupAdd);
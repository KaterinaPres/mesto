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
const template = document.querySelector('#template').content;;
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
const addNewName = document.querySelector('.element__text');
const addNewImage = document.querySelector('.element__image');
const nameElement = document.getElementById('nameElement');
const linkImage = document.getElementById('linkImage');
const picture = popupImage.querySelector('.popup__pictire');
const text = popupImage.querySelector('.popup__text');



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
function createCard(element) {
    const newItem = template.cloneNode(true);
    newItem.querySelector('.element__text').innerText = element.name;
    const image = newItem.querySelector('.element__image');
    image.setAttribute('src', element.link);
    image.setAttribute('alt', element.name);
    addListeners(newItem);
    return newItem;
}

//функция срабатывания клика при удалении и лайке
function addListeners(el) {
    el.querySelector('.element__delete').addEventListener('click', handleDelete);
    el.querySelector('.element__heart').addEventListener('click', toggleLikes);
    el.querySelector('.element__image').addEventListener('click', openPopupImage);
}

//функция выделения лайка
function toggleLikes(event) {
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
    closePopupAdd();
    evt.target.reset();
    const button = popupTypeAddPhoto.querySelector(".popup__save");
    button.setAttribute("disabled", "");
    button.classList.add("popup__save_notactive");
}

//открытие popup
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener("keydown", closePopupEsc);
    popup.addEventListener("mousedown", closePopupOverleyer);
}

//открытие редактирования профиля
function openPopupProfile() {
    userName.value = profileNewName.textContent;
    job.value = profileNewProf.textContent;
    openPopup(popupEdit);
}

//открытие popup добавления карточки
function openPopupAdd() {
    openPopup(popupAdd);
}

//открытие popup картинки
function openPopupImage(evt) {
    const item = evt.target;
    picture.setAttribute('src', item.getAttribute('src'));
    picture.setAttribute('alt', item.getAttribute('alt'));
    text.innerText = item.alt
    openPopup(popupImage);
}



//закрытие любого popup
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener("keydown", closePopupEsc);
    popup.removeEventListener("mousedown", closePopupOverleyer);
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
function closePopupOverleyer(event) {
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

// function keyHandler(evt) {
//     if (evt.key === 'Esc') {
//       addSong(artistInput.value, titleInput.value);
//     }
//     if (evt.key.toLowerCase() === 'ё') {
//      evt.preventDefault();
//     }
//   }
// const popupBg = document.querySelector('.popup__opened'); // Фон попап окна
// const popup = document.querySelector('.popup'); 
// document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
//     if(e.target === popupBg) { // Если цель клика - фот, то:
//         popupBg.classList.remove('active'); // Убираем активный класс с фона
//         popup.classList.remove('active'); // И с окна
//     }
// });

imageCloseButton.addEventListener('click', closePopupImage);
formElementPopupEdit.addEventListener('submit', savePopupEdit);
formElementPopupAdd.addEventListener('submit', handleCardFormSubmit);
document.addEventListener("DOMContentLoaded", render);
profileCloseButton.addEventListener('click', closePopupEdit);
addCloseButton.addEventListener('click', closePopupAdd);

// const popupAdd = document.querySelector('.popup-add');
const addButton =  document.querySelector(".popup__save");
// button.setAttribute("disabled", "");
// button.classList.add("popup__save_notactive");

//добавление класса с ошибкой
function showInputError(
  { errorClass, inputErrorClass },
  form,
  input,
  errorMessage
) {
  const errorElement = form.querySelector(`.${input.id}-error`);
  input.classList.add(errorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(inputErrorClass);
}

//удаление класса с ошибкой
function hideInputError({ errorClass, inputErrorClass }, form, input) {
  const errorElement = form.querySelector(`.${input.id}-error`);
  input.classList.remove(errorClass);
  errorElement.classList.remove(inputErrorClass);
  errorElement.textContent = "";
}
// Функция, которая проверяет валидность поля
function checkInputValidity(rest, form, input) {
  if (!input.validity.valid) {
    showInputError(rest, form, input, input.validationMessage);
  } else {
    hideInputError(rest, form, input);
  }
}

//добавление обработчиков всем полям формы
function setEventListeners(
  { inputSelector, submitButtonSelector, ...rest },
  form
) {
  const inputList = Array.from(form.querySelectorAll(inputSelector));
  const button = form.querySelector(submitButtonSelector);
  toggleButtonState(rest, inputList, button);
  inputList.forEach((input) => {
    input.addEventListener("input", function () {
      checkInputValidity(rest, form, input);
      toggleButtonState(rest, inputList, button);
    });
  });
}

//добавление обработчиков всем формам
function enableValidation({ formSelector, ...rest }) {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((form) => {
    form.addEventListener("submit", function (evt) {
      evt.preventDefault();
      setSubmitButtonState(isValid);
    });
    setEventListeners(rest, form);
  });
}

// Функция принимает массив полей
function hasInvalidInput(inputList) {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
}

// Функция принимает массив полей ввода и элемент кнопки, состояние которой нужно менять
function toggleButtonState({ inactiveButtonClass }, inputList, button) {
  if (hasInvalidInput(inputList)) {
    button.setAttribute("disabled", "");
    button.classList.add(inactiveButtonClass);
  } else {
    button.removeAttribute("disabled");
    button.classList.remove(inactiveButtonClass);
  }
}

function setSubmitButtonState(isFormValid) {
  if (isFormValid) {
    addButton.removeAttribute('disabled');
addButton.classList.remove('popup__save_notactive'); 
  } else{
    addButton.setAttribute('disabled', true);
addButton.classList.add('popup__save_notactive');
  }
}

// form.addEventListener('input', function (evt) {
//   const isValid = artist.value.length > 0 && title.value.length > 0;
 
// });

// включение валидации вызовом enableValidation
// все настройки передаются при вызове
enableValidation({
  formSelector: '.popup__container',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_notactive',
  inputErrorClass: 'popup__message_active',
  errorClass: 'popup__item_error'
});

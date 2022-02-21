// //добавление класса с ошибкой
// function showInputError({ errorClass, inputErrorClass }, form, input, errorMessage) {
//   const errorElement = form.querySelector(`.${input.id}-error`);
//   input.classList.add(errorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(inputErrorClass);
// }

//   //удаление класса с ошибкой
//   function hideInputError({ errorClass, inputErrorClass }, form, input) {
//     const errorElement = form.querySelector(`.${input.id}-error`);
//     input.classList.remove(errorClass);
//     errorElement.classList.remove(inputErrorClass);
//     errorElement.textContent = ""; 
//   };

//   //функция, которая проверяет валидность
//   function checkInputValidity(rest, form, input) {
//     if (!input.validity.valid) {
//       showInputError(rest, form, input, input.validationMessage);
//     } else {
//       hideInputError(rest, form, input);
//     }
//   }

//   //добавление обработчиков всем полям формы
//   function setEventListeners(
//     { inputSelector, submitButtonSelector, ...rest },
//     form
//   ) {
//     const inputList = Array.from(form.querySelectorAll(inputSelector));
//     const button = form.querySelector(submitButtonSelector);

//     // чтобы проверить состояние кнопки в самом начале
//     toggleButtonState(rest, inputList, button);

//     inputList.forEach((input) => {
//       input.addEventListener("input", function () {
//         checkInputValidity(rest, form, input);

//         // чтобы проверять его при изменении любого из полей
//         toggleButtonState(rest, inputList, button);
//       });
//     });
//   }

//   //добавление обработчиков всем формам
//   const enableValidation = ({ formSelector, ...rest }) => {
//     const formList = Array.from(document.querySelectorAll(formSelector));
//     formList.forEach((formElement) => {
//       formElement.addEventListener('submit', function (evt) {
//         evt.preventDefault();
//       });
//      setEventListeners(rest, formElement);

//   });
//   };

//   // Функция принимает массив полей
//   function hasInvalidInput(inputList) {
//     return inputList.some(inputElement => {
//       return !inputElement.validity.valid
//     })
//   }

// // Функция принимает массив полей ввода и элемент кнопки, состояние которой нужно менять
//   function toggleButtonState({ inactiveButtonClass }, inputList, buttonElement) {
//     if (hasInvalidInput(inputList)) {

//       buttonElement.setAttribute("disabled", "");
//       buttonElement.classList.add(inactiveButtonClass)
//     } else {
//         buttonElement.removeAttribute("disabled", "");
//       buttonElement.classList.remove(inactiveButtonClass)
//     }
//   }

//   // включение валидации вызовом enableValidation
// // все настройки передаются при вызове

// enableValidation({
//     formSelector: '.popup__container',
//     inputSelector: '.popup__item',
//     submitButtonSelector: '.popup__save',
//     inactiveButtonClass: 'popup__save_notactive',
//     inputErrorClass: 'popup__message_active',
//     errorClass: 'form__input_type_error'
//   });

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

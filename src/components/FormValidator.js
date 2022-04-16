export default class FormValidator {
  constructor(settings, form) {
    this._form = form;
    this._settings = settings;
    this._inputList = Array.from(
      this._form.querySelectorAll(this._settings.inputSelector)
    );
    this._button = this._form.querySelector(
      this._settings.submitButtonSelector
    );
  }

  //добавление класса с ошибкой
  _showInputError(input, errorMessage) {
    const { errorClass, inputErrorClass } = this._settings;
    const errorElement = this._form.querySelector(`.${input.id}-error`);
    input.classList.add(errorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(inputErrorClass);
  }

  //удаление класса с ошибкой
  _hideInputError(input) {
    const { errorClass, inputErrorClass } = this._settings;
    const errorElement = this._form.querySelector(`.${input.id}-error`);
    input.classList.remove(errorClass);
    errorElement.classList.remove(inputErrorClass);
    errorElement.textContent = "";
  }

  // Функция, которая проверяет валидность поля
  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
    }
  }

  //добавление обработчиков всем полям формы
  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  }

  // Функция принимает массив полей
  _hasInvalidInput() {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    });
  }

  // Функция принимает массив полей ввода и элемент кнопки, состояние которой нужно менять
  _toggleButtonState() {
    const { inactiveButtonClass } = this._settings;
    if (this._hasInvalidInput()) {
      this._button.setAttribute("disabled", "");
      this._button.classList.add(inactiveButtonClass);
    } else {
      this._button.removeAttribute("disabled");
      this._button.classList.remove(inactiveButtonClass);
    }
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }

  resetValidation() {
    this._inputList.forEach((input) => {
      this._hideInputError(input);
    });

    this._toggleButtonState();
  }
}

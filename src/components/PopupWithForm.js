import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callbackSubmit) {
    super(popupSelector);
    this._callbackSubmit = callbackSubmit;
    this._form = this._popup.querySelector('form');
    this._formInputs = [...this._form.querySelectorAll(".popup__item")];
    this._button = this._popup.querySelector('.popup__save');
    this._textButton = this._button.textContent;
  }

  _getInputValues() {
    const _formValues = {};
    this._formInputs.forEach((input) =>
      _formValues[input.name] = input.value
    );
    return _formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", () => {
      this._callbackSubmit(this._getInputValues());
    });
  }

  changeSubmitForm(newFormSubmit) {
    this._callbackSubmit = newFormSubmit;
  }

  close() {
    super.close();
    this._form.reset();
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._button.textContent = "Сохранение...";
    } else {
      this._button.textContent = this._textButton;
    }
  }
}

import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callbackSubmit) {
    super(popupSelector);
    this._callbackSubmit = callbackSubmit;
    this._formElementPopupEdit = document.querySelector('form[name="popup-edit"]');
    this._formElementPopupAdd = document.querySelector('form[name="popup-add"]');
    this._formInputs = [...this._form.querySelectorAll(".popup__item")];
    this._formValues = {};
  }

  _getInputValues() {
    this._formInputs.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }
  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", () => {
      this._callbackSubmit(this._getInputValues());
    });
  }
  close() {
    super.close();
    this._formElementPopupEdit.reset();
    this._formElementPopupAdd.reset();
  }
}

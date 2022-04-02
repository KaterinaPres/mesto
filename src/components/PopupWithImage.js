import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__pictire');
    this._text = this._popup.querySelector('.popup__text');
  }
  open = (name, link) => {
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._text.textContent = name;
    super.open();
  }
}

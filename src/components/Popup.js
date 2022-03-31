export default class Section {
    constructor(popupSelector) {

        this._popup = document.querySelector(popupSelector);
    }
    open() {
        this.popup.classList.add('popup_opened');
        this.document.addEventListener("keydown", closePopupEsc);
        this.popup.addEventListener("mousedown", closePopupOverley);
    }
    close() {
        this.popup.classList.remove('popup_opened');
        this.document.removeEventListener("keydown", closePopupEsc);
        this.popup.removeEventListener("mousedown", closePopupOverley);
    }
    _handleEscClose = (event) => {
        if (event.key == "Escape") {
            this.close;
        }
    }
    setEventListeners() {
        this._popup.addEventListener("mousedown", (evt) => {
            if (evt.target.classList.contains("popup_opened")) {
                this.close();
            }
            if (evt.target.classList.contains("popup__close")) {
                this.close();
            }
        });
    }
}



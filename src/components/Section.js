export default class Section {
    constructor({ item, renderer }, containerSelector) {
        this.initialCards = item;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }
    AddItem(element) {
        this._container.prepend(element);
    }
    renderItems() {

        this._renderedItems.forEach((item) => {
            this._renderer(item);
        });
    }
}

export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._initialCards = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }
    addItem(element) {
        this._container.prepend(element);
    }

    render() {
        this._initialCards.forEach((item) => {
            this._renderer(item);
        });
    }
}
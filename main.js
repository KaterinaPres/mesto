(()=>{"use strict";var e=document.querySelector(".profile__button"),t=document.querySelector(".profile__add-button"),n=(document.querySelector('form[name="popup-edit"]'),document.querySelector("#userName")),r=document.querySelector("#job"),o=(document.querySelector(".profile__title"),document.querySelector(".profile__subtitle"),document.getElementById("nameElement"),document.getElementById("linkImage"),document.querySelector(".popup-add .popup__save")),i={};function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._settings=t,this._inputList=Array.from(this._form.querySelectorAll(this._settings.inputSelector)),this._button=this._form.querySelector(this._settings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._settings,r=n.errorClass,o=n.inputErrorClass,i=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(r),i.textContent=t,i.classList.add(o)}},{key:"_hideInputError",value:function(e){var t=this._settings,n=t.errorClass,r=t.inputErrorClass,o=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(n),o.classList.remove(r),o.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;e._toggleButtonState(),e._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){var e=this._settings.inactiveButtonClass;this._hasInvalidInput()?(this._button.setAttribute("disabled",""),this._button.classList.add(e)):(this._button.removeAttribute("disabled"),this._button.classList.remove(e))}},{key:"setSubmitButtonState",value:function(e){e.setAttribute("disabled",!0),e.classList.add(this._settings.inactiveButtonClass)}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(){function e(t,n,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"_handleDelete",(function(){o._newItem.remove(),o._newItem=null})),c(this,"_toggleLikes",(function(){o._likeButton.classList.toggle("element__heart_active")})),this._template=document.querySelector(n).content,this._name=t.name,this._link=t.link,this._handleCardClick=r}var t,n;return t=e,(n=[{key:"createCard",value:function(){return this._newItem=this._template.querySelector(".element").cloneNode(!0),this._image=this._newItem.querySelector(".element__image"),this._likeButton=this._newItem.querySelector(".element__heart"),this._deleteButton=this._newItem.querySelector(".element__delete"),this._newItem.querySelector(".element__text").textContent=this._name,this._image.src=this._link,this._image.alt=this._name,this._setEventListeners(),this._newItem}},{key:"_setEventListeners",value:function(){var e=this;this._deleteButton.addEventListener("click",this._handleDelete),this._likeButton.addEventListener("click",this._toggleLikes),this._image.addEventListener("click",(function(){return e._handleCardClick(e._name,e._link)}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialCards=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"render",value:function(){var e=this;this._initialCards.forEach((function(t){e._renderer(t)}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"==e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close"))&&e.close()}))}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function _(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(n);if(r){var o=k(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return _(this,e)});function i(e){var t,n,r,a,s;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),s=function(e,r){n._popupImage.src=r,n._popupImage.alt=e,n._text.textContent=e,b((t=v(n),k(i.prototype)),"open",t).call(t)},(a="open")in(r=v(n=o.call(this,e)))?Object.defineProperty(r,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):r.open=s,n._popupImage=n._popup.querySelector(".popup__pictire"),n._text=n._popup.querySelector(".popup__text"),n}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(d);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},O.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function I(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function a(e,t){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._callbackSubmit=t,n._form=n._popup.querySelector("form"),n._formInputs=function(e){if(Array.isArray(e))return E(e)}(r=n._form.querySelectorAll(".popup__item"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._formInputs.forEach((function(t){return e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;O(L(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){e._callbackSubmit(e._getInputValues())}))}},{key:"close",value:function(){O(L(a.prototype),"close",this).call(this),this._form.reset()}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(d);function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=function(){function e(t){var n=t.nameSelector,r=t.jobSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileNewName=document.querySelector(n),this._profileNewProf=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._profileNewName.textContent,job:this._profileNewProf.textContent}}},{key:"setUserInfo",value:function(e,t){this._profileNewName.textContent=e,this._profileNewProf.textContent=t}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._settings=t}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch(this._settings.baseUrl+"/cards",{headers:this._settings.headers}).then(this._checkRes)}},{key:"getProfile",value:function(){return fetch(this._settings.baseUrl+"/users/me",{headers:this._settings.headers}).then(this._checkRes)}},{key:"editProfile",value:function(e,t){return fetch(this._settings.baseUrl+"/users/me",{method:"PATCH",headers:this._settings.headers,body:JSON.stringify({name:e,job:t})}).then(this._checkRes)}},{key:"addNewCard",value:function(e,t){return fetch(this._settings.baseUrl+"/cards",{method:"POST",headers:this._settings.headers,body:JSON.stringify({name:e,link:t})}).then(this._checkRes)}},{key:"deleteCard",value:function(e){return fetch(this._settings.baseUrl+"/cards/"+e,{method:"DELETE",headers:this._settings.headers}).then(this._checkRes)}},{key:"deleteLike",value:function(e){return fetch(this._settings.baseUrl+"/cards/"+e+"/likes",{method:"DELETE",headers:this._settings.headers}).then(this._checkRes)}},{key:"addLike",value:function(e){return fetch(this._settings.baseUrl+"/cards/"+e+"/likes",{method:"PUT",headers:this._settings.headers}).then(this._checkRes)}},{key:"editAvatarProfile",value:function(e){return fetch(this._settings.baseUrl+"/users/me/avatar",{method:"PATCH",headers:this._settings.headers,body:JSON.stringify({avatar:e})}).then(this._checkRes)}},{key:"_checkRes",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-39",headers:{authorization:"c5280015-5a91-4237-aeb0-a976f8290be4","Content-Type":"application/json"}});function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Promise.all([B.getProfile(),B.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];U.setUserInfo(o.name,o.about),o._id,N.render(i)})).catch((function(e){console.log(e)}));var N=new p({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:M},".elements"),U=new A({nameSelector:".profile__title",jobSelector:".profile__subtitle"}),D=new q(".popup-add",(function(e){M({name:e.nameElement,link:e.linkImage}),D.close()})),V=new q(".popup-edit",(function(e){var t=e.name,n=e.job;B.editProfile(t,n).then((function(t){U.setUserInfo(e.name,e.job),V.close()})).catch((function(e){console.log("Errorr: ",e)})).finally((function(){}))})),J=new w(".popup-image");function M(e){var t=new l(e,".elements__template",H).createCard();N.addItem(t)}D.setEventListeners(),V.setEventListeners(),J.setEventListeners(),e.addEventListener("click",(function(){var e=U.getUserInfo();n.value=e.userName,r.value=e.job,i["popup-edit"].resetValidation(),V.open()})),t.addEventListener("click",(function(){i["popup-add"].setSubmitButtonState(o),i["popup-add"].resetValidation(),D.open()}));var z,H=function(e,t){J.open(e,t)};z={formSelector:".popup__container",inputSelector:".popup__item",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_notactive",inputErrorClass:"popup__message_active",errorClass:"popup__item_error"},Array.from(document.querySelectorAll(z.formSelector)).forEach((function(e){var t=new s(z,e),n=e.getAttribute("name");i[n]=t,t.enableValidation()}))})();
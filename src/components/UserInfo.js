export default class UserInfo {
    constructor({ nameSelector, jobSelector, avatarSelector}) {
        this._profileNewName = document.querySelector(nameSelector);
        this._profileNewProf = document.querySelector(jobSelector);
        this._avatarElement = document.querySelector(avatarSelector);
    }
    getUserInfo() {
        return {
            name: this._profileNewName.textContent,
            about: this._profileNewProf.textContent,
        };
    }
    setUserInfo(name, about) {
        this._profileNewName.textContent = name;
        this._profileNewProf.textContent = about;
    }
    addUserAvatar(link) {
        this._avatarElement.src = link;
      }
}
export default class UserInfo {
    constructor({ nameSelector, jobSelector }) {
        this._profileNewName = document.querySelector(nameSelector);
        this._profileNewProf = document.querySelector(jobSelector);
    }
    getUserInfo() {
        return {
            userName: this._profileNewName.textContent,
            job: this._profileNewProf.textContent,
        };
    }
    setUserInfo(name, job) {
        this._profileNewName.textContent = name;
        this._profileNewProf.textContent = job;
    }
}
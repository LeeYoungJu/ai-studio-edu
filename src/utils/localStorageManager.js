import { LoginInfoType } from 'types/commonTypes';

const LOGIN_INFO = 'localstorage/LOGIN_INFO';

Storage.prototype.setObject = function (key, value) {
	this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function (key) {
	const value = this.getItem(key);
	return value && JSON.parse(value);
};

const LocalStorageManager = {
	setLoginInfo: (loginInfo: LoginInfoType) => {
		localStorage.setObject(LOGIN_INFO, loginInfo);
	},

	getLoginInfo: (): LoginInfoType => {
		return localStorage.getObject(LOGIN_INFO);
	},

	isAuthenticated: () => {
		const loginInfo = localStorage.getObject(LOGIN_INFO);
		return loginInfo && loginInfo.token && loginInfo.token.length > 0;
	},

	logout: () => {
		localStorage.setObject(LOGIN_INFO, null);
	},
};

export default LocalStorageManager;

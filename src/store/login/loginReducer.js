import { createAction, handleActions } from 'redux-actions';
import { UserInfoType } from 'types/commonTypes';
import LocalStorageManager from 'utils/localStorageManager';

export const LOGIN_REQUEST = 'login/LOGIN';
export const LOGIN_SUCCESS = `${LOGIN_REQUEST}_SUCCESS`;
export const LOGIN_FAILURE = `${LOGIN_REQUEST}_FAILURE`;

export const SET_LOGIN_INFO = 'login/SET_LOGIN_INFO';

export const LOGOUT = 'login/LOGOUT';

export const loginRequest = createAction(LOGIN_REQUEST, (data: UserInfoType) => data);
export const setLoginInfo = createAction(SET_LOGIN_INFO, (data: LoginInfoType) => data);
export const logout = createAction(LOGOUT);

const initialState = {
	token: '',
	loginInfo: null,
};

const loginReducer = handleActions(
	{
		[LOGIN_SUCCESS]: (state, action) => {
			LocalStorageManager.setLoginInfo(action.payload);
			return {
				...state,
				token: action.payload.token,
				loginInfo: action.payload.loginInfo,
			};
		},
		[LOGIN_FAILURE]: (state, action) => {
			console.log(action.payload);
			return {
				...state,
			};
		},
		[SET_LOGIN_INFO]: (state, action) => {
			return {
				...state,
				token: action.payload.token,
				loginInfo: action.payload.loginInfo,
			};
		},
		[LOGOUT]: (state, action) => {
			LocalStorageManager.logout();
			return {
				...state,
				token: '',
				loginInfo: null,
			};
		},
	},
	initialState,
);

export default loginReducer;

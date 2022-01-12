import { createAction, handleActions } from 'redux-actions';

const LOGIN_REQUEST = 'login/LOGIN_REQUEST';

export const loginRequest = createAction(LOGIN_REQUEST, (data) => data);

const initialState = {
	token: 'aaa',
};

const loginReducer = handleActions(
	{
		[LOGIN_REQUEST]: (state, action) => {
			console.log('login request');
		},
	},
	initialState,
);

export default loginReducer;

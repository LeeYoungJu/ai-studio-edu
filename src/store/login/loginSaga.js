import { call, fork, put, takeLatest } from 'redux-saga/effects';
import { LOGIN_REQUEST } from './loginReducer';
import ApiCaller from 'utils/apiCallService';
import createRequestSaga from 'utils/createRequestSaga';

const tempFunc = (loginInfo) => {
	let data;
	let status;
	if (loginInfo.userId === 'test' && loginInfo.userPwd === '123') {
		data = {
			token: 'temp_token',
			loginInfo,
		};
		status = 200;
	} else {
		data = '로그인 정보가 잘못되었습니다.';
		status = 400;
	}

	return {
		data,
		status,
	};
};
const loginRequest = createRequestSaga(LOGIN_REQUEST, tempFunc);

// const loginRequest = createRequestSaga(LOGIN_REQUEST, ApiCaller.login);

function* watchLoginRequestSaga() {
	yield takeLatest(LOGIN_REQUEST, loginRequest);
}

const loginSaga = [fork(watchLoginRequestSaga)];

export default loginSaga;

import { all, fork } from 'redux-saga/effects';
import loginSaga from './login/loginSaga';

export default function* rootSaga() {
	yield all([...loginSaga]);
}

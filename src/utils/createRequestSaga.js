import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading, SET_DIALOG_TXT } from 'store/common/commonReducer';

export default function createRequestSaga(type, request, callback) {
	const SUCCESS = `${type}_SUCCESS`;
	const FAILURE = `${type}_FAILURE`;

	return function* (action) {
		yield put(startLoading(type));
		try {
			console.log('call start...');
			const response = yield call(request, action.payload);
			if (response.status === 200) {
				yield put({ type: SUCCESS, payload: response.data });
			} else {
				yield put({ type: FAILURE, payload: response.data });
				yield put({ type: SET_DIALOG_TXT, payload: response.data });
			}
		} catch (e) {
			yield put({ type: FAILURE, payload: e });
			yield put({ type: SET_DIALOG_TXT, payload: 'server error!' });
		}
		yield put(finishLoading(type));
	};
}

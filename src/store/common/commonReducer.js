import { createAction, handleActions } from 'redux-actions';

export const LOADING_START = 'loading/LOADING_START';
export const LOADING_FINISH = 'loading/LOADING_FINISH';
export const SET_DIALOG_TXT = 'common/SET_DIALOG_TXT';
export const INIT_DIALOG_TXT = 'common/INIT_DIALOG_TXT';

export const startLoading = createAction(LOADING_START, (type: string) => type);
export const finishLoading = createAction(LOADING_FINISH, (type: string) => type);
export const setDialogTxt = createAction(SET_DIALOG_TXT, (data: string) => data);
export const initDialogTxt = createAction(INIT_DIALOG_TXT);

const initialState = {
	isLoading: false,
	loadingType: '',
	dialogTxt: '',
};

const commonReducer = handleActions(
	{
		[LOADING_START]: (state, action) => ({
			...state,
			isLoading: true,
			loadingType: action.payload,
		}),
		[LOADING_FINISH]: (state, action) => ({
			...state,
			isLoading: false,
			loadingType: '',
		}),
		[SET_DIALOG_TXT]: (state, action) => ({
			...state,
			dialogTxt: action.payload,
		}),
		[INIT_DIALOG_TXT]: (state, action) => ({
			...state,
			dialogTxt: '',
		}),
	},
	initialState,
);

export default commonReducer;

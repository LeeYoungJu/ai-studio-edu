import { combineReducers } from 'redux';
import commonReducer from './common/commonReducer';
import loginReducer from './login/loginReducer';

const rootReducer = combineReducers({
	commonReducer,
	loginReducer,
});

export default rootReducer;

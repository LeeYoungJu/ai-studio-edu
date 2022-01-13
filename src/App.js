import './App.scss';

import { BrowserRouter } from 'react-router-dom';
import RouterIndex from 'router';
import LocalStorageManager from 'utils/localStorageManager';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginInfo } from 'store/login/loginReducer';
import { initDialogTxt } from 'store/common/commonReducer';
import { useEffect } from 'react';
import LoadingBar from 'components/LoadingBar';

function App() {
	const dispatch = useDispatch();
	const { dialogTxt, isLoading } = useSelector((state) => state.commonReducer);

	const isLoggedIn = LocalStorageManager.isAuthenticated();
	if (isLoggedIn) {
		dispatch(setLoginInfo(LocalStorageManager.getLoginInfo()));
	}

	useEffect(() => {
		if (dialogTxt && dialogTxt.length > 0) {
			alert(dialogTxt);
			dispatch(initDialogTxt());
		}
	}, [dialogTxt]);

	return (
		<>
			<BrowserRouter>
				<RouterIndex />
			</BrowserRouter>

			{isLoading && <LoadingBar />}
		</>
	);
}

export default App;

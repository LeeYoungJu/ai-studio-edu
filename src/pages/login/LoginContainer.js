// @flow
import { connect } from 'react-redux';
import LoginPage from '.';
import { loginRequest } from 'store/login/loginReducer';
import { useNavigate } from 'react-router-dom';
import ROUTES from 'constants/router';

import { UserInfoType } from 'types/commonTypes';
import { useEffect } from 'react';

type Props = {
	token: string,
	loginRequest: (data: UserInfoType) => void,
};

const LoginContainer = ({ token, loginRequest }: Props) => {
	const navigate = useNavigate();

	const handleLogin = (userId, userPwd) => {
		const params = {
			userId,
			userPwd,
		};

		loginRequest(params);
	};

	useEffect(() => {
		if (token && token.length > 0) {
			navigate(ROUTES.HOME);
		}
	}, [token]);

	return <LoginPage handleLogin={handleLogin} />;
};

export default connect(({ loginReducer }) => ({ token: loginReducer.token }), {
	loginRequest,
})(LoginContainer);

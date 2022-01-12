// @flow
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import ROUTES from 'constants/router';

type Props = {
	token: string,
};

const PrivateRouter = ({ token }: Props) => {
	const isAuthenticated = token !== '';

	return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />;
};

export default connect(
	({ loginReducer }) => ({
		token: loginReducer.token,
	}),
	{},
)(PrivateRouter);

// @flow
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRouter from './PrivateRouter';
import ROUTES from 'constants/router';

const LoginContainer = lazy(() => import('pages/login/LoginContainer'));
const HomePage = lazy(() => import('pages/home'));

const RouterIndex = ({}) => {
	return (
		<Suspense fallback={<div>Loading.....</div>}>
			<Routes>
				<Route path={ROUTES.LOGIN} element={<LoginContainer />} />
				<Route path={ROUTES.HOME} element={<PrivateRouter />}>
					<Route path={ROUTES.HOME} element={<HomePage />} />
				</Route>
			</Routes>
		</Suspense>
	);
};

export default RouterIndex;

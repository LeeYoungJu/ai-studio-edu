// @flow

import { useState } from 'react';

type Props = {
	handleLogin: (id: string, pwd: string) => void,
};

const LoginPage = ({ handleLogin }: Props) => {
	const [userId, setUserId] = useState('');
	const [userPwd, setUserPwd] = useState('');

	return (
		<>
			<div
				style={{
					display: 'flex',
				}}
			>
				<div
					style={{
						margin: 'auto',
					}}
				>
					<div>Surromind</div>
					<div>Welcome Back, Please login to your account</div>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							handleLogin(userId, userPwd);
						}}
					>
						<div>
							<input
								type="text"
								value={userId}
								onChange={(e) => setUserId(e.target.value)}
								placeholder="아이디를 입력하세요."
							/>
						</div>
						<div>
							<input
								type="password"
								value={userPwd}
								onChange={(e) => setUserPwd(e.target.value)}
								placeholder="비밀번호를 입력하세요."
							/>
						</div>
						<div>
							<button type="submit">Login</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default LoginPage;

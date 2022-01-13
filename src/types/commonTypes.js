export type UserInfoType = {
	userId: string,
	userPwd: string,
};

export type LoginInfoType = {
	token: string,
	loginInfo: UserInfoType,
};

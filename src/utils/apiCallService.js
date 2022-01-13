import apiService from './apis';

const ApiCaller = {
	login: (params) => {
		return apiService.post('login', params);
	},
};

export default ApiCaller;

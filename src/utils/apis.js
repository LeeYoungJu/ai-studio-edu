import axios from 'axios';

class Api {
	http = null;

	constructor(axios, baseURL) {
		console.log('aaaaa');
		console.log(baseURL);
		this.http = axios.create({
			baseURL,
		});
	}

	getAxios() {
		return this.http;
	}

	get(path, config = {}) {
		return this.http.get(path, config);
	}

	post(path, params = {}, config = {}) {
		return this.http.post(path, params, config);
	}
}

const apiService = new Api(axios, `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_PREFIX}/`);
export default apiService;

import AxiosManager from './Axios';

const Account = {
	/**
   * login api
   *
   * @param {string} username userName
   * @param {string} password password
   * @returns {accountInfo}
   */

	register: (params) => {
		return AxiosManager({
			url: '/api/accounts',
			method: 'post',
			data: params
		});
	},

	login: (params) => {
		console.log(params);
		return AxiosManager({
			url: '/oauth/token',
			method: 'post',
			data: params,
			auth: {
				username: 'ant-league',
				password: 'ehdgkrroalflrm!@'
			}
		});
	}
};

export default Account;

// 1. Account.js import
// 2. Account.register(params) : return Promise객체
// 3. const result = Account.register(params);
// 4. console.log(result.status); === 200 OK

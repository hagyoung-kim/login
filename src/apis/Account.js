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
		return AxiosManager.post('api/accounts', params);
	}
};

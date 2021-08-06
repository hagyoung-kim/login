import AxiosManager from './Axios';

export const setToken = (accessToken) => {
	const instance = AxiosManager;
	instance.defaults.headers.common.authorization = `Bearer ${accessToken}`;
};

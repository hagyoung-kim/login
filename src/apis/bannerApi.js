import AxiosManager from './Axios';

const BannerApi = {
	BannerApi: () => {
		const instance = AxiosManager;
		return instance.get('/api/banner');
	}
};

export default BannerApi;

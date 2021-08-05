import AxiosManager from './Axios';

const BannerApi = {
	BannerApi: () => {
		const instance = AxiosManager;
		const access_token =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MjgyMTQxMDMsInVzZXJfbmFtZSI6InRlc3QiLCJhdXRob3JpdGllcyI6WyJST0xFX0FDQ09VTlQiLCJST0xFX0FETUlOIl0sImp0aSI6IjY4ODU1MmViLWE1NTktNDUxNC1hNGUzLTQ2OWI0ZTk0MWM1MiIsImNsaWVudF9pZCI6ImFudC1sZWFndWUiLCJzY29wZSI6WyJhbnkiXX0.vvrRXK3wUrIp8-45-Exs9ONLG-uQ0GAtCT60Eu6Du1Q';
		instance.defaults.headers.common.authorization = `Bearer ${access_token}`;
		return instance.get('/api/banner');
	}
};

export default BannerApi;

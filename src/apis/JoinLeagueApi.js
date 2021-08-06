import AxiosManager from './Axios';

const JoinLeagueApi = {
	JoinLeagueList: () => {
		const instance = AxiosManager;
		return instance.get('https://9001.in.actbase.io/api/league/leagueParticipation');
	},
	JoinLeagueInfo: (joinLeagueId) => {
		const instance = AxiosManager;
		return instance.get(`https://9001.in.actbase.io/api/league/leagueParticipation?id=${joinLeagueId}`);
	},
	JoinLeagueInterest: () => {
		const instance = AxiosManager;
		return instance.get('https://9001.in.actbase.io/api/stock/searchGroupWithStockInfo');
	},
	JoinLeaguePossession: () => {
		const instance = AxiosManager;
		return instance.get('https://9001.in.actbase.io/api/trade/searchLeagueStock');
	}
};

export default JoinLeagueApi;

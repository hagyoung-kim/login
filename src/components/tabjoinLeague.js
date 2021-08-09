import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import TabjoinLeagueList from './tabjoinLeagueList';
import TabViewBtn from './tabViewBtn';
import TabDropDownJoin from './tabDropDownJoin';
import Colors from '../common/colors';
import JoinLeagueApi from '../apis/JoinLeagueApi';

const joinLeagueData = [
	{
		id: 1,
		title: '현재수익률',
		titleData: '50.00',
		unit: '%'
	},
	{
		id: 2,
		title: '리그 랭킹',
		titleData: '132',
		unit: '위'
	},
	{
		id: 3,
		title: '보유종목',
		titleData: '15',
		unit: '개'
	},
	{
		id: 4,
		title: '자본금',
		titleData: '10,000,000',
		unit: '원'
	}
];

const TabjoinLeague = () => {
	const [ dropDownJoinLeagueData, setDropDownJoinLeagueData ] = useState([]);
	const [ dropDownJoinLeagueInfo, setDropDownJoinLeagueInfo ] = useState([]);

	useEffect(() => {
		JoinLeagueApi.JoinLeagueList().then((response) => {
			setDropDownJoinLeagueData(response.data);
			console.log('JoinLeagueList!!!!', response);
		});
		// .catch((error) => {
		// 	console.log(error.response, '');
		// });
	}, []);

	const getJoinLeagueInfo = (joinLeagueId) => {
		// const { response } = props;
		JoinLeagueApi.JoinLeagueInfo(joinLeagueId)
			.then((response) => {
				setDropDownJoinLeagueInfo(response);
				console.log('joinInfo res', response);
			})
			.catch((error) => {
				console.log('joinInfo error', error.response);
			});
	};
	console.log('id', dropDownJoinLeagueData);

	const JoinLeagueList = dropDownJoinLeagueData.map((data) => {
		return {
			label: data.title,
			value: data,
			key: data.id
		};
	});

	return (
		<View>
			<TabDropDownJoin dropDownJoinLeagueData={JoinLeagueList} getJoinLeagueInfo={getJoinLeagueInfo} />

			{joinLeagueData.map((data) => {
				return (
					<View style={{ backgroundColor: Colors.white }}>
						<TabjoinLeagueList
							title={data.title}
							titleData={JoinLeagueList.data !== [] ? '-' : data.titleData}
							unit={data.unit}
							key={`${data.id}`}
						/>
					</View>
				);
			})}
			<TabViewBtn title="리그 바로가기" />
		</View>
	);
};

export default TabjoinLeague;

import React from 'react';
import { View, Text } from 'react-native';
import TabjoinLeagueList from './tabjoinLeagueList';
import TabViewBtn from './tabViewBtn';
import TabDropDown from './tabDropDown';
import Colors from '../common/colors';

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
	return (
		<View>
			<TabDropDown title="2021년 10주차 리그" />

			{joinLeagueData.map((data) => {
				return (
					<View style={{ backgroundColor: Colors.white }}>
						<TabjoinLeagueList
							title={data.title}
							titleData={data.titleData}
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

{
	/* <TouchableOpacity>
					<Image
						source={require('../img/ellipseQuestion.png')}
						style={{ position: 'absolute', bottom: 22, left: 70 }}
					/>
				</TouchableOpacity> */
}

export default TabjoinLeague;

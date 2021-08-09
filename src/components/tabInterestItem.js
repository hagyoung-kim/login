import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../common/colors';
import TabDropDownInterest from './tabDropDownInterest';
import TabViewBtn from './tabViewBtn';
import TabInterestList from './tabInterestList';
import NoItem from '../components/noItem';

const TabInterestItem = () => {
	const [ dropDownInterestItem, setDropDownInterestItem ] = useState([]);

	const getJoinLeagueInterest = () => {
		// const { response } = props;
		JoinLeagueApi.JoinLeagueInterest()
			.then((response) => {
				setDropDownInterestItem(response);
				// console.log('joinInfo res', response);
			})
			.catch((error) => {
				// console.log('joinInfo error', error.response);
			});
	};

	const JoinLeagueInterestList = dropDownInterestItem.map((data) => {
		return {
			label: data.title,
			value: data,
			key: data.id
		};
	});

	return (
		<View style={{ backgroundColor: Colors.white }}>
			<TabDropDownInterest
				dropDownInterestItem={JoinLeagueInterestList}
				getJoinLeagueInterest={getJoinLeagueInterest}
			/>
			{/* <TabInterestList />
			<TabInterestList />
			<TabInterestList />
			<TabInterestList /> */}

			<NoItem />

			<TabViewBtn title="관심종목 전체보기" />
		</View>
	);
};

export default TabInterestItem;

import React, { useState } from 'react';
import { View } from 'react-native';
import Colors from '../common/colors';
import TabDropDownPossession from './tabDropDownPossession';
import TabViewBtn from './tabViewBtn';
import TabItemCard from './tabItemCard';
import NoItem from '../components/noItem';
import TabNoItemBtn from '../components/tabNoItemBtn';

const TabPossessionItem = () => {
	const [ dropDownPossessionItem, setDropDownPossessionItem ] = useState([]);

	const getPossessionItem = () => {
		JoinLeagueApi.JoinLeaguePossession()
			.then((response) => {
				setDropDownPossessionItem(response);
				// console.log('PossessionItem', response);
			})
			.catch((error) => {
				// console.log('PossessionItem', error.response);
			});
	};

	const PossessionItem = dropDownPossessionItem.map((item) => {
		return {
			label: item.title,
			value: item,
			key: item.id
		};
	});

	return (
		<View style={{ backgroundColor: Colors.white }}>
			<TabDropDownPossession dropDownPossessionItem={PossessionItem} getPossessionItem={getPossessionItem} />

			{/* <ScrollView horizontal>
				<TabItemCard title="삼성전자" subtitle="(21.01.19~보유중)" />
				<TabItemCard title="삼성전자" subtitle="(21.01.19~보유중)" />
				<TabItemCard title="삼성전자" subtitle="(21.01.19~보유중)" />
			</ScrollView> */}
			<NoItem />

			<TabNoItemBtn />
			{/* <TabViewBtn title="보유종목 전체보기" /> */}
		</View>
	);
};

export default TabPossessionItem;

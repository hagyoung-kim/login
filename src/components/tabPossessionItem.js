import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import Colors from '../common/colors';
import TabDropDown from './tabDropDown';
import TabViewBtn from './tabViewBtn';
import TabItemCard from './tabItemCard';

const TabPossessionItem = () => {
	return (
		<View style={{ backgroundColor: Colors.white }}>
			<TabDropDown title="2021년 10주차 리그" />

			<ScrollView horizontal>
				<TabItemCard title="삼성전자" subtitle="(21.01.19~보유중)" />
				<TabItemCard title="삼성전자" subtitle="(21.01.19~보유중)" />
				<TabItemCard title="삼성전자" subtitle="(21.01.19~보유중)" />
			</ScrollView>

			<TabViewBtn title="보유종목 전체보기" />
		</View>
	);
};

export default TabPossessionItem;

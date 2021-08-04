import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../common/colors';
import TabDropDown from './tabDropDown';
import TabViewBtn from './tabViewBtn';
import TabInterestList from './tabInterestList';

const TabInterestItem = () => {
	return (
		<View>
			<TabDropDown title="우량주그룹" />
			<TabInterestList />
			<TabInterestList />
			<TabInterestList />
			<TabInterestList />
			<TabViewBtn title="관심종목 전체보기" />
		</View>
	);
};

export default TabInterestItem;

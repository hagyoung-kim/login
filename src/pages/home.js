import React from 'react';
import { ScrollView, Image, Text, View, useWindowDimensions } from 'react-native';

import TabViewEx from '../components/tabView';
import Banner from '../components/banner';
import MainSearch from '../components/mainSearch';
// import { useNavigation } from '@react-navigation/native';
// import { NavigationContainer } from '@react-navigation/native';
// import * as React from 'react';

const Home = () => {
	// const navigation = useNavigation();

	// const moveLogin = () => {
	// 	navigation.navigate('login');
	// };
	return (
		<ScrollView style={{ flex: 1 }}>
			<Banner />
			<MainSearch />
			<TabViewEx />
		</ScrollView>
	);
};

export default Home;

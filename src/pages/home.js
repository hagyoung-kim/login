import React from 'react';
import { ScrollView } from 'react-native';

import TabViewWrap from '../components/tabViewWrap';
import Banner from '../components/banner';
import MainSearch from '../components/mainSearch';
import Ranker from '../pages/mainPage/ranker';

const Home = () => {
	return (
		<ScrollView style={{ flex: 1 }}>
			<Banner />
			<MainSearch />
			<TabViewWrap />
			<Ranker />
		</ScrollView>
	);
};

export default Home;

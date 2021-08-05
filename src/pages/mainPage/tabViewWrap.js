import React from 'react';
import { View } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Colors from '../../common/colors';
import TabjoinLeague from '../../components/tabjoinLeague';
import TabPossessionItem from '../../components/tabPossessionItem';
import TabInterestItem from '../../components/tabInterestItem';

const FirstRoute = () => <TabjoinLeague />;

const SecondRoute = () => <TabPossessionItem />;

const ThirdRoute = () => <TabInterestItem />;

const renderScene = SceneMap({
	first: FirstRoute,
	second: SecondRoute,
	third: ThirdRoute
});

const renderTabBar = (props) => (
	<TabBar
		{...props}
		activeColor={Colors.warmPink}
		inactiveColor={Colors.brownGrey}
		style={{ backgroundColor: Colors.background }}
	/>
);

const TabViewWrap = () => {
	// const layout = useWindowDimensions();
	const [ index, setIndex ] = React.useState(0);
	const [ routes ] = React.useState([
		{ key: 'first', title: '참여리그' },
		{ key: 'second', title: '보유종목' },
		{ key: 'third', title: '관심종목' }
	]);

	return (
		<View style={{ height: 450 }}>
			<TabView
				navigationState={{ index, routes }}
				onIndexChange={setIndex}
				renderScene={renderScene}
				// initialLayout={{ width: layout.width, height: layout.height }}
				renderTabBar={renderTabBar}
			/>
		</View>
	);
};

export default TabViewWrap;

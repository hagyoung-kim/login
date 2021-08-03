import * as React from 'react';
import { View, useWindowDimensions, Text, StyleSheet, ScrollView } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Colors from '../common/colors';
import TabViewData from '../components/tabViewData';

const FirstRoute = () => <TabViewData />;

const SecondRoute = () => <View style={{ backgroundColor: '#673ab7' }} />;

const ThirdRoute = () => <Text>Tab Three</Text>;

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

const TabViewEx = () => {
	const layout = useWindowDimensions();
	const [ index, setIndex ] = React.useState(0);
	const [ routes ] = React.useState([
		{ key: 'first', title: '참여리그' },
		{ key: 'second', title: '보유종목' },
		{ key: 'third', title: '관심종목' }
	]);

	return (
		<View>
			<TabView
				style={{ height: 500, backgroundColor: 'red' }}
				navigationState={{ index, routes }}
				onIndexChange={setIndex}
				renderScene={renderScene}
				initialLayout={{ width: layout.width, height: layout.height }}
				renderTabBar={renderTabBar}
			/>
		</View>
	);
};

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1
// 	}
// });
export default TabViewEx;

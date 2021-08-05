import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/mainPage/home';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
	return (
		<Tab.Navigator initialRouteName="Home">
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarLabel: '홈',
					headerShown: false
				}}
			/>
			<Tab.Screen
				name="leagueJoin"
				component={Home}
				options={{
					tabBarLabel: '리그참여'
				}}
			/>
			<Tab.Screen
				name="leagueNow"
				component={Home}
				options={{
					tabBarLabel: '리그나우'
				}}
			/>
			<Tab.Screen
				name="ranking"
				component={Home}
				options={{
					tabBarLabel: '리그랭킹'
				}}
			/>
			<Tab.Screen
				name="info"
				component={Home}
				options={{
					tabBarLabel: '투자정보'
				}}
			/>
			<Tab.Screen
				name="more"
				component={Home}
				options={{
					tabBarLabel: '더보기'
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomNav;

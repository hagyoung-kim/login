import React from 'react';
import { Image } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/mainPage/home';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
	const bottomIcon = [
		{
			name: '홈',
			component: Home,
			inactiveICon: require('../img/tabHomeOff.png'),
			activeIcon: require('../img/tabHomeOn.png')
		},
		{
			name: '리그참여',
			component: Home,
			inactiveICon: require('../img/tabLeagueOffCopy.png'),
			activeIcon: require('../img/tabHomeOn.png')
		},
		{
			name: '리그나우',
			component: Home,
			inactiveICon: require('../img/nowOffCopy.png'),
			activeIcon: require('../img/tabHomeOn.png')
		},
		{
			name: '리그랭킹',
			component: Home,
			inactiveICon: require('../img/rankOffCopy.png'),
			activeIcon: require('../img/tabHomeOn.png')
		},
		{
			name: '투자정보',
			component: Home,
			inactiveICon: require('../img/tabInvestOffCopy3.png'),
			activeIcon: require('../img/tabHomeOn.png')
		},
		{
			name: '더보기',
			component: Home,
			inactiveICon: require('../img/tabMoreOffCopy2.png'),
			activeIcon: require('../img/tabHomeOn.png')
		}
	];

	return (
		<Tab.Navigator initialRouteName="Home">
			{bottomIcon.map((route) => {
				return (
					<Tab.Screen
						name={route.name}
						component={route.component}
						options={{
							headerShown: false,
							tabBarIcon: ({ focused }) => {
								return <Image source={focused ? route.activeIcon : route.inactiveICon} />;
							}
						}}
					/>
				);
			})}
		</Tab.Navigator>
	);
};

export default BottomNav;

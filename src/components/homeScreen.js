import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/components/homeScreen';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
	return (
		<div>
			<View>
				<Text>main!!</Text>
			</View>
		</div>
	);
};

export default HomeScreen;

import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
// import Footer from '../components/footer';
import Colors from '../common/colors';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
	const navigation = useNavigation();

	const moveLogin = () => {
		navigation.navigate('login');
	};

	return (
		<TouchableOpacity
			style={{
				flex: 1,
				backgroundColor: Colors.warmPink,
				// height: 80,
				alignItems: 'center',
				justifyContent: 'center'
			}}
			onPress={moveLogin}
		>
			<Text style={{ color: Colors.white, fontSize: 20 }}> Welcome!! Main Page입니다!</Text>
		</TouchableOpacity>
	);
};

export default Home;

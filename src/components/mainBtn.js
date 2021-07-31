import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Colors from '../common/colors';

const MainBtn = ({ goLogin }) => {
	return (
		<TouchableOpacity
			style={{
				height: 50,
				backgroundColor: Colors.warmPink,
				alignItems: 'center',
				justifyContent: 'center',
				marginTop: 30,
				borderRadius: 10
			}}
			onPress={() => {
				// setBtn((prev) => !prev);
				goLogin();
			}}
		>
			<Text style={{ fontSize: 16, letterSpacing: -0.9, color: Colors.white }}>로그인</Text>
		</TouchableOpacity>
	);
};

export default MainBtn;

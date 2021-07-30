import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Colors from '../common/colors';

const MainBtn = ({ clickBtn, value, children, isText, goLogin, form }) => {
	const [ btn, setBtn ] = useState(value);

	return (
		<TouchableOpacity
			style={{
				height: 50,
				backgroundColor: isText ? Colors.warmPink : Colors.veryLightPink,
				alignItems: 'center',
				justifyContent: 'center',
				marginTop: 30,
				borderRadius: 10
			}}
			onPress={() => {
				// setBtn((prev) => !prev);
				// clickBtn();

				goLogin();
			}}
		>
			<Text style={{ fontSize: 16, letterSpacing: -0.9, color: Colors.white }}>{children}</Text>
		</TouchableOpacity>
	);
};

export default MainBtn;

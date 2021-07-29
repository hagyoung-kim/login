import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Colors from '../common/colors';
import Term from '../pages/term';

const Footer = ({ onPress, children, isCheck, clickBtn }) => {
	console.log('isCheck', isCheck);

	return (
		<TouchableOpacity
			onPress={() => {
				// setBtn((prev) => !prev);
				clickBtn;
				onPress && onPress();
			}}
			style={{
				// flex: 1,
				height: 80,
				backgroundColor: isCheck ? Colors.warmPink : Colors.veryLightPink,
				alignItems: 'center',
				paddingTop: 22,
				marginTop: 200
			}}
		>
			<Text style={{ fontSize: 16, letterSpacing: -0.9 }}>{children}</Text>
		</TouchableOpacity>
	);
};

export default Footer;

import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Colors from '../common/colors';

const Footer = ({ onPress, children, isCheck }) => {
	console.log('isCheck', isCheck);

	return (
		<View>
			<TouchableOpacity
				onPress={() => {
					// onPress && onPress();
					onPress();
				}}
				style={{
					// flex: 1,
					backgroundColor: isCheck ? Colors.warmPink : Colors.veryLightPink,
					alignItems: 'center',
					paddingTop: 30,
					paddingBottom: 45
				}}
			>
				<Text style={{ fontSize: 16, letterSpacing: -0.9 }}>{children}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Footer;

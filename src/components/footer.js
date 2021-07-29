import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Colors from '../common/colors';

const Footer = ({ clickBtn, value, children }) => {
	const [ btn, setBtn ] = useState(value);

	return (
		<TouchableOpacity
			style={{
				// flex: 1,
				height: 80,
				backgroundColor: btn ? Colors.warmPink : Colors.veryLightPink,
				alignItems: 'center',
				paddingTop: 22,
				marginTop: 200
				//높이 변경
			}}
			onPress={() => {
				setBtn((prev) => !prev);
				clickBtn();
			}}
		>
			<Text style={{ fontSize: 16, letterSpacing: -0.9 }}>{children}</Text>
		</TouchableOpacity>
	);
};

export default Footer;

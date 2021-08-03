import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import Colors from '../common/colors';

const LeaveBtn = ({ onPress }) => {
	return (
		<TouchableOpacity
			style={{
				position: 'absolute',
				top: 20,
				left: 28
			}}
			onPress={() => {
				onPress();
			}}
		>
			<Image source={require('../img/goback-arrow.png')} />
		</TouchableOpacity>
	);
};

export default LeaveBtn;

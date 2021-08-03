import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Colors from '../common/colors';

const TabDropDown = () => {
	return (
		<View
			style={{
				borderWidth: 1,
				borderRadius: 10,
				margin: 20,
				flexDirection: 'row',
				borderColor: Colors.veryLightPink,
				justifyContent: 'space-between',
				alignItems: 'center',
				backgroundColor: Colors.white
			}}
		>
			<Text style={{ color: Colors.greyish, fontSize: 14, marginVertical: 18, marginLeft: 16 }}>
				2021년 10주차 리그
			</Text>
			<TouchableOpacity
				style={{
					width: 50,
					height: 50,
					// backgroundColor: 'red',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: Colors.white
				}}
			>
				<Image style={{ width: 12, height: 7 }} source={require('../img/arrowDown.png')} />
			</TouchableOpacity>
		</View>
	);
};

export default TabDropDown;

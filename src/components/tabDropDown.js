import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Colors from '../common/colors';

const TabDropDown = ({ title }) => {
	return (
		<View style={{ backgroundColor: Colors.white }}>
			<View
				style={{
					borderWidth: 1,
					borderRadius: 10,
					margin: 20,
					flexDirection: 'row',
					borderColor: Colors.veryLightPink,
					justifyContent: 'space-between',
					alignItems: 'center'
				}}
			>
				<Text style={{ color: Colors.greyish, fontSize: 14, marginVertical: 18, marginLeft: 16 }}>{title}</Text>
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
		</View>
	);
};

export default TabDropDown;

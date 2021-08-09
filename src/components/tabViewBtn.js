import React from 'react';
import Colors from '../common/colors';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const TabViewBtn = ({ title }) => {
	return (
		<TouchableOpacity
			style={{
				backgroundColor: Colors.white,
				position: 'relative',
				borderWidth: 1,
				borderColor: Colors.background
			}}
		>
			<Text style={{ fontSize: 14, textAlign: 'center', paddingVertical: 18 }}>{title}</Text>
			<View
				style={{
					width: 25,
					height: 25,
					backgroundColor: Colors.warmPink,
					position: 'absolute',
					right: 20,
					top: 15,
					borderRadius: 50,
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<Image
					style={{
						width: 6,
						height: 11
					}}
					source={require('../img/arrowRightWhite.png')}
				/>
			</View>
		</TouchableOpacity>
	);
};

export default TabViewBtn;

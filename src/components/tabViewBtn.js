import React from 'react';
import Colors from '../common/colors';
import { View, Text, TouchableOpacity } from 'react-native';

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
					borderRadius: 50
				}}
			>
				<View
					style={{
						width: 11,
						height: 11,
						backgroundColor: Colors.background,
						position: 'absolute',
						right: 7,
						top: 7
					}}
				/>
			</View>
		</TouchableOpacity>
	);
};

export default TabViewBtn;

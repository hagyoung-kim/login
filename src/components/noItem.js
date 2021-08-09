import React from 'react';
import { View, Image, Text, placeholder, Dimensions } from 'react-native';
import Colors from '../common/colors';

const NoItem = () => {
	return (
		<View style={{ height: 250, alignItems: 'center', justifyContent: 'center' }}>
			<View
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					width: 50,
					height: 50,
					backgroundColor: Colors.veryLightPinkThree,
					borderRadius: 50
				}}
			>
				<Image style={{ width: 4, height: 20, zIndex: 1 }} source={require('../img/pngwing.png')} />
			</View>
			<Text style={{ fontSize: 14, color: Colors.brownGrey, marginTop: 15 }}>현재 보유하고 있는 종목이 없습니다.</Text>
		</View>
	);
};

export default NoItem;

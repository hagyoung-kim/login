import React from 'react';
import { Image, Text, View } from 'react-native';
import Colors from '../common/colors';

const MainSearch = () => {
	return (
		<View style={{ backgroundColor: Colors.background }}>
			<View
				style={{
					borderWidth: 1,
					borderRadius: 10,
					margin: 20,
					flexDirection: 'row',
					backgroundColor: Colors.white
				}}
			>
				<Image style={{ width: 20, height: 20, margin: 16 }} source={require('../img/iconSearchColor.png')} />
				<Text style={{ color: Colors.greyish, fontSize: 14, marginVertical: 16 }}>종목명 · 초성 · 코드 검색</Text>
			</View>
		</View>
	);
};

export default MainSearch;

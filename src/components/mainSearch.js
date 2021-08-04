import React from 'react';
import { Image, View, TextInput, TouchableOpacity } from 'react-native';
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
				<TouchableOpacity>
					<Image
						style={{ width: 20, height: 20, margin: 16 }}
						source={require('../img/iconSearchColor.png')}
					/>
				</TouchableOpacity>
				<TextInput style={{ color: Colors.greyish, fontSize: 14 }} placeholder="종목명 · 초성 · 코드 검색" />
			</View>
		</View>
	);
};

export default MainSearch;

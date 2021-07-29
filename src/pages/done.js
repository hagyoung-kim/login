import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import Footer from '../components/footer';
import Colors from '../common/colors';

const Done = () => {
	const [ btn, setBtn ] = useState(false);

	const clickBtn = () => {
		setBtn((prev) => !prev);
	};

	return (
		<ScrollView>
			<View style={{ alignItems: 'center', marginTop: 247 }}>
				<View
					style={{
						width: 165,
						height: 165,
						backgroundColor: Colors.veryLightPinkThree,
						borderRadius: 100
					}}
				>
					<Image
						style={{ position: 'absolute', top: 55, left: 45 }}
						source={require('../img/pinkBigCheck.png')}
					/>
				</View>
				<Text style={{ fontSize: 21, color: Colors.darkGrey, marginTop: 30 }}>회원가입이 완료되었습니다.</Text>
				<Text style={{ fontSize: 14, color: Colors.warmGrey, marginTop: 14.5 }}>로그인하고 바로 리그에 참여해 보세요.</Text>
			</View>
			<Footer clickBtn={clickBtn}>
				<Text style={{ color: Colors.white }}>로그인</Text>
			</Footer>
		</ScrollView>
	);
};

export default Done;

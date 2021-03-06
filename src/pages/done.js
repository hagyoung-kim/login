import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import Footer from '../components/footer';
import Colors from '../common/colors';
import { useNavigation } from '@react-navigation/native';

const Done = () => {
	const [ btn, setBtn ] = useState(false);

	const clickBtn = () => {
		setBtn((prev) => !prev);
	};

	const navigation = useNavigation();

	const moveLogin = () => {
		// if (!essentialCheck()) return;
		navigation.navigate('login');
		// essentialCheck() ? navigation.navigate('register') : {};
	};

	return (
		<ScrollView>
			<View style={{ alignItems: 'center', marginTop: 230 }}>
				<View
					style={{
						width: 165,
						height: 165,
						backgroundColor: Colors.veryLightPink,
						borderRadius: 100
					}}
				>
					<Image
						style={{ position: 'absolute', top: 55, left: 45 }}
						source={require('../img/pinkBigCheck.png')}
					/>
				</View>
				<Text style={{ fontSize: 21, color: Colors.darkGrey, marginTop: 30 }}>회원가입이 완료되었습니다.</Text>
				<Text style={{ fontSize: 14, color: Colors.warmGrey, marginTop: 14.5, marginBottom: 150 }}>
					로그인하고 바로 리그에 참여해 보세요.
				</Text>
			</View>

			<TouchableOpacity
				style={{
					backgroundColor: Colors.warmPink,
					// height: 80,
					alignItems: 'center',
					paddingTop: 30,
					paddingBottom: 45
				}}
				onPress={moveLogin}
			>
				<Text style={{ color: Colors.white, fontSize: 18 }}> 로그인</Text>
			</TouchableOpacity>
		</ScrollView>
	);
};

export default Done;

import React from 'react';
import Colors from '../common/colors';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TabNoItemBtn = () => {
	return (
		<View style={{ flexDirection: 'row', alignItems: 'center' }}>
			<TouchableOpacity style={styles.touchableOpacity}>
				<Text
					style={{
						fontSize: 14,
						textAlign: 'center',
						color: Colors.warmPink,
						paddingVertical: 18
					}}
				>
					추천종목 바로가기
				</Text>
			</TouchableOpacity>

			<View style={{ width: 1, height: 16, backgroundColor: Colors.veryLightPinkThree }} />

			<TouchableOpacity style={styles.touchableOpacity}>
				<Text
					style={{
						fontSize: 14,
						textAlign: 'center',
						color: Colors.black,
						paddingVertical: 18
					}}
				>
					매수하기
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	touchableOpacity: {
		width: '50%',
		backgroundColor: Colors.white,
		position: 'relative',
		borderWidth: 1,
		borderColor: Colors.background,
		justifyContent: 'center'
	}
});

export default TabNoItemBtn;

import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Colors from '../common/colors';

const MainTitle = () => {
	return (
		<View style={{ backgroundColor: Colors.white }}>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					borderWidth: 1,
					borderBottomColor: Colors.warmPink,
					borderColor: Colors.white,
					marginLeft: 20,
					paddingTop: 29.5,
					paddingBottom: 9.5
				}}
			>
				<View
					style={{
						flexDirection: 'row'
					}}
				>
					<Text style={{ fontSize: 17, color: Colors.warmPink }}>#TOP 5_</Text>
					<Text style={{ fontSize: 17 }}>모의투자랭커</Text>
				</View>
				<TouchableOpacity style={{ marginRight: 20 }}>
					<Text>전체보기</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({});

export default MainTitle;

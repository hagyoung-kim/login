import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Colors from '../common/colors';

const TabItemCard = ({ title, subtitle }) => {
	return (
		<View style={{ marginBottom: 20 }}>
			<View style={styles.secondData}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.subtitle}>{subtitle}</Text>
				<Image style={{ position: 'absolute', right: 16, bottom: 0 }} source={require('../img/upImg.png')} />
			</View>
			<View style={styles.secondBox}>
				<View style={{ marginRight: 20 }}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
						<Text style={styles.datatitle}>현재가</Text>
						<Text style={styles.dataSubtitle}>1.090.000</Text>
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
						<Text style={styles.datatitle}>매수가</Text>
						<Text style={styles.dataSubtitle}>80,000</Text>
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<Text style={styles.datatitle}>보유량</Text>
						<Text style={styles.dataSubtitle}>26.00</Text>
					</View>
				</View>
				<View>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
						<Text style={styles.datatitle}>투자금</Text>
						<Text style={styles.dataSubtitle}>100,090,000</Text>
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
						<Text style={styles.datatitle}>수익률</Text>
						<Text style={(styles.dataSubtitle, { color: Colors.warmPink })}>24.6 %</Text>
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<Text style={styles.datatitle}>수익</Text>
						<Text style={(styles.dataSubtitle, { color: Colors.warmPink })}>20,502,000</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	secondData: {
		width: 320,
		borderWidth: 1,
		marginLeft: 20,
		borderColor: Colors.veryLightPink,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		borderBottomColor: Colors.white,
		padding: 17
	},
	secondBox: {
		width: 320,
		borderWidth: 1,
		marginLeft: 20,
		borderColor: Colors.veryLightPink,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		backgroundColor: Colors.background,
		marginBottom: 20,
		alignItems: 'center',
		flexDirection: 'row',
		lineHeight: 30,
		paddingHorizontal: 16,
		paddingVertical: 21
	},
	title: {
		fontSize: 14,
		color: Colors.darkGrey,
		letterSpacing: -1.05,
		lineHeight: 19
	},
	subtitle: {
		fontSize: 12,
		color: Colors.warmGrey
	},
	datatitle: {
		fontSize: 12,
		color: Colors.warmGrey,
		marginRight: 28
	},
	dataSubtitle: {
		fontSize: 14,
		color: Colors.darkGrey,
		fontWeight: 'bold'
		// justifyContent: 'flex-end'
	}
});

export default TabItemCard;

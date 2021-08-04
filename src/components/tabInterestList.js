import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../common/colors';

const TabInterestList = () => {
	return (
		<View style={{ backgroundColor: Colors.background }}>
			<View style={styles.container}>
				<View style={styles.list}>
					<Text style={{ fontSize: 14, marginRight: 10 }}>삼성전자</Text>
					<Text style={{ fontSize: 12, color: Colors.warmGrey }}>하드웨어</Text>
				</View>

				<View style={styles.list}>
					<Text style={{ color: Colors.reddish }}>68,000</Text>
					<View style={styles.subList}>
						<Text style={styles.subListText}>+5.55%</Text>
					</View>
					<View style={styles.listIcon}>
						<View style={{ width: 5, height: 8, backgroundColor: Colors.reddish }} />
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 20,
		marginVertical: 18
	},
	list: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	subList: {
		backgroundColor: Colors.pastelRed,
		borderRadius: 10,
		marginLeft: 10,
		paddingHorizontal: 10
	},
	subListText: {
		color: Colors.reddish,
		textAlign: 'center',
		lineHeight: 18,
		letterSpacing: -0.86,
		fontSize: 12
	},
	listIcon: {
		width: 7,
		height: 25,
		backgroundColor: Colors.white,
		marginLeft: 10,
		paddingTop: 4,
		borderWidth: 1,
		borderColor: Colors.veryLightPink
	}
});

export default TabInterestList;

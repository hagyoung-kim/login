import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import JoinLeagueApi from '../apis/JoinLeagueApi';
import Colors from '../common/colors';

const TabjoinLeagueList = ({ title, titleData, unit, joinLeagueId }) => {
	return (
		<View style={styles.container}>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Text style={styles.text}>{title}</Text>
			</View>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Text style={{ fontSize: 19, color: Colors.warmPink }}>{titleData}</Text>
				<Text style={{ fontSize: 12, marginLeft: 10, color: Colors.brownGrey }}>{unit}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 25,
		marginVertical: 17.5,
		flexDirection: 'row',
		borderColor: Colors.veryLightPink,
		justifyContent: 'space-between'
	},
	text: {
		color: Colors.greyish,
		fontSize: 14,
		marginVertical: 4
	}
});

export default TabjoinLeagueList;

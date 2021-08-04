import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import MainTitle from '../../components/mainTitle';
import RankerList from '../../components/rankerList';

const Ranker = () => {
	return (
		<View>
			<MainTitle />
			<RankerList />
			<RankerList />
		</View>
	);
};

export default Ranker;

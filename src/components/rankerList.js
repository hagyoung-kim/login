import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import Colors from '../common/colors';

const RankerList = () => {
	return (
		<View style={{ backgroundColor: Colors.white }}>
			<View style={{ marginLeft: 25, marginRight: 20, flexDirection: 'row', alignItems: 'center' }}>
				<View style={{ alignItems: 'center' }}>
					<Text style={{ fontSize: 16, fontWeight: 'bold' }}>1</Text>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Image source={require('../img/triUp.png')} />
						<Text>5</Text>
					</View>
				</View>

				<Image
					style={{ width: 45, height: 45, marginVertical: 15 }}
					source={require('../img/ellipse861.png')}
				/>
				<Text>주식왕김개미</Text>
				<View
					style={{
						backgroundColor: Colors.veryLightPinkThree,
						paddingHorizontal: 10,
						paddingVertical: 5,
						borderRadius: 20
					}}
				>
					<Text>+ 300.15%</Text>
				</View>
			</View>
		</View>
	);
};

export default RankerList;

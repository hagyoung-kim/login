import React from 'react';
import { View, Text, Image } from 'react-native';
import { useState } from 'react/cjs/react.production.min';
import Colors from '../common/colors';

// const [rankerUpDown, setRankerUpDown] = useState('');

const RankerList = ({ ranking, updownNum, image, name, percent }) => {
	return (
		<View style={{ backgroundColor: Colors.white }}>
			<View
				style={{
					marginLeft: 25,
					marginRight: 20,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between'
				}}
			>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<View style={{ alignItems: 'center' }}>
						<Text style={{ fontSize: 16, fontWeight: 'bold' }}>{ranking}</Text>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Image source={require('../img/triUp.png')} />
							<Text style={{ fontSize: 12 }}>{updownNum}</Text>
						</View>
					</View>

					<Image style={{ width: 45, height: 45, marginVertical: 15, marginHorizontal: 15 }} source={image} />
					<Text>{name}</Text>
				</View>

				<View
					style={{
						backgroundColor: Colors.veryLightPinkThree,
						paddingHorizontal: 10,
						paddingVertical: 5,
						borderRadius: 20
					}}
				>
					<Text style={{ color: Colors.warmPink }}>{percent}</Text>
				</View>
			</View>
		</View>
	);
};

export default RankerList;

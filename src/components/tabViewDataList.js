import React, { Children } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Colors from '../common/colors';

const TabViewDataList = ({ title, titleData, unit, Children }) => {
	return (
		<View
			style={{
				marginHorizontal: 25,
				marginVertical: 17,
				flexDirection: 'row',
				borderColor: Colors.veryLightPink,
				justifyContent: 'space-between'
			}}
		>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Text
					style={{
						color: Colors.greyish,
						fontSize: 14,
						marginRight: 10
					}}
				>
					{title}
				</Text>
				{/* {Children} */}
			</View>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Text style={{ fontSize: 19, color: Colors.warmPink }}>{titleData}</Text>
				<Text style={{ fontSize: 12, marginLeft: 10 }}>{unit}</Text>
			</View>
		</View>
	);
};

export default TabViewDataList;

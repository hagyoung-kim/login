import React, { Children, useState } from 'react';
import { Text, View } from 'react-native';
import Colors from '../common/colors';

const Title = ({ style, children }) => {
	return (
		<View>
			<Text style={style}> {children} </Text>
			<Text style={{ marginHorizontal: 28, fontSize: 14, color: Colors.brownishGrey, marginBottom: 34 }}>
				정보를 등록하고 리그에 참여하세요
				{/* <View style={{ width: '100%', height: 1, backgroundColor: Colors.warmPink }} /> */}
			</Text>
		</View>
	);
};

export default Title;

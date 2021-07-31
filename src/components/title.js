import React, { Children, useState } from 'react';
import { Text, View } from 'react-native';
import Colors from '../common/colors';

const Title = ({ style, title, subtitle }) => {
	return (
		<View style={{ flex: 1 }}>
			<Text style={style}> {title} </Text>
			<Text style={{ marginHorizontal: 28, fontSize: 14, color: Colors.brownishGrey, marginBottom: 34 }}>
				{subtitle}
			</Text>
		</View>
	);
};

export default Title;

import React from 'react';
import { ScrollView, Image, Text, View, useWindowDimensions } from 'react-native';

const Banner = () => {
	return (
		<View>
			<Image style={{ width: '100%' }} source={require('../img/visualImg.png')} />
		</View>
	);
};

export default Banner;

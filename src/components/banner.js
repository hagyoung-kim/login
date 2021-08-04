import React from 'react';
import { Image, View } from 'react-native';

const Banner = () => {
	return (
		<View style={{ flex: 1 }}>
			<Image style={{ width: '100%' }} source={require('../img/visualImg.png')} />
		</View>
	);
};

export default Banner;

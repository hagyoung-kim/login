import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
// import Colors from '../common/colors';

const CheckBox2 = ({ setTermList, active, children, id }) => {
	return (
		<View style={{ flexDirection: 'row', marginLeft: 10 }}>
			<TouchableOpacity
				style={{ marginLeft: 40 }}
				onPress={() => {
					setTermList((prev) => {
						return prev.map((data) => {
							return data.id === id ? { ...data, active: !data.active } : data;
						});
					});
				}}
			>
				<View>
					<Image
						style={{ position: 'absolute', top: 18, left: -25, flexDirection: 'row' }}
						source={active ? require('../img/pinkCheck.png') : require('../img/grayCheck.png')}
					/>
				</View>
				{children}
			</TouchableOpacity>

			<TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Text
					style={{
						fontSize: 11,
						textDecorationLine: 'underline',
						fontWeight: 'bold',
						textAlign: 'center'
					}}
				>
					약관보기
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default CheckBox2;

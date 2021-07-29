import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Colors from '../common/colors';

const CheckBox = ({ clickCheck, children, value, style }) => {
	const [ check, setCheck ] = useState(value);

	return (
		<TouchableOpacity
			style={[ { position: 'relative', marginTop: 22, flexDirection: 'row' }, style ]}
			onPress={() => {
				setCheck((prev) => !prev);
				clickCheck();
			}}
		>
			<View
				style={{
					marginRight: 10,
					backgroundColor: check ? Colors.warmPink : Colors.veryLightPink,
					width: 20,
					height: 20,
					borderRadius: 10,
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Image
					style={{ position: 'absolute', top: 5, left: 5, flexDirection: 'row' }}
					source={require('../img/vectorSmartObjectCopy4.png')}
				/>
			</View>

			<View
				style={{
					flexDirection: 'row',
					fontSize: 12,
					color: Colors.brownGrey
				}}
			/>

			{children}
		</TouchableOpacity>
	);
};

export default CheckBox;

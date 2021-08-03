import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import Colors from '../common/colors';

const CheckBox = ({ children, style, setTermList }) => {
	const [ allCheck, setAllCheck ] = useState(false);
	// useEffect(
	// 	() => {
	// 		console.log(termList);
	// 	},
	// 	[ termList ]
	// );

	return (
		<TouchableOpacity
			style={[ { position: 'relative', marginTop: 15, flexDirection: 'row' }, style ]}
			onPress={() => {
				if (allCheck) {
					// 눌렀을 때 termList의 모든 요소의 active를 false로
					setTermList((prev) => {
						const next = prev.map((term) => ({
							...term,
							active: false
						}));
						return next;
					});
				} else {
					// 모든 요소의 active를 true로
					setTermList((prev) => {
						const next = prev.map((term) => ({
							...term,
							active: true
						}));
						return next;
					});
				}
				setAllCheck(!allCheck);
				// console.log(termList);
			}}
		>
			<View
				style={{
					marginRight: 10,
					backgroundColor: allCheck ? Colors.warmPink : Colors.veryLightPink,
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

import React, { useState } from 'react';
import { View, Image, Text, placeholder } from 'react-native';
import Colors from '../common/colors';
import RNPickerSelect from 'react-native-picker-select';

const TabDropDownPossession = ({ title, dropDownPossessionItem, getPossessionItem }) => {
	const [ text, setText ] = useState(null);

	const onChangeText = (value) => {
		setText(value);
	};

	return (
		<View style={{ backgroundColor: Colors.white, padding: 20 }}>
			<RNPickerSelect
				style={{
					inputAndroid: {
						color: 'black',
						borderWidth: 1,
						borderRadius: 10,
						height: 50,
						paddingLeft: 20,
						borderColor: Colors.veryLightPinkTwo
					}
				}}
				Icon={() => (
					<Image
						style={{ position: 'absolute', right: 0, top: 22, width: 12, height: 7, marginRight: 20 }}
						source={require('../img/arrowDown.png')}
					/>
				)}
				useNativeAndroidPickerStyle={false}
				value={text}
				fixAndroidTouchableBug={true}
				placeholder={{
					label: '123456789'
				}}
				onValueChange={(value) => {
					// console.log('getJoinLeagueInfooooo', getJoinLeagueInfo);
					if (!value) return;
					// console.log('onvalueChange', value);
					onChangeText(value);
					getPossessionItem(value.id);
				}}
				items={dropDownPossessionItem || []}
			/>
		</View>
	);
};

export default TabDropDownPossession;

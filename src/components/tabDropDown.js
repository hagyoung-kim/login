import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Colors from '../common/colors';
import RNPickerSelect from 'react-native-picker-select';

// const [text, setText] = useState("");
// const placeholder = '값을 입력해주세요.';

const TabDropDown = ({ title }) => {
	return (
		<View style={{ backgroundColor: Colors.white }}>
			<TouchableOpacity>
				<View
					style={{
						borderWidth: 1,
						borderRadius: 10,
						margin: 20,
						flexDirection: 'row',
						borderColor: Colors.veryLightPink,
						justifyContent: 'space-between',
						alignItems: 'center'
					}}
				>
					<RNPickerSelect
						style={{ inputAndroid: { color: 'black' } }}
						onValueChange={(value) => setText(value)}
						useNativeAndroidPickerStyle={false}
						items={[
							{ label: 'Football', value: 'football' },
							{ label: 'Baseball', value: 'baseball' },
							{ label: 'Hockey', value: 'hockey' }
						]}
					/>
					{/* <Text style={{ color: Colors.greyish, fontSize: 14, marginVertical: 18, marginLeft: 16 }}>
						{title}
					</Text> */}
					<Image style={{ width: 12, height: 7, marginRight: 20 }} source={require('../img/arrowDown.png')} />
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default TabDropDown;

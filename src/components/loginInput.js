import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import Colors from '../common/colors';

const LoginInput = ({ title, placeholder, style, setForm, propertyKey }) => {
	const [ isFocused, setIsFocused ] = useState(false);

	return (
		<View style={{ borderTopLeftRadius: 10 }}>
			<View
				style={[
					style,
					{
						borderWidth: 1,
						borderColor: isFocused ? Colors.black : Colors.veryLightPink
					}
				]}
			>
				<Text
					style={{
						color: Colors.black,
						fontSize: 10,
						paddingLeft: 15,
						paddingTop: 10
					}}
				>
					{title}
				</Text>
				<TextInput
					style={{
						fontSize: 14,
						color: Colors.black,
						paddingTop: 5,
						paddingLeft: 15
					}}
					placeholder={placeholder}
					onFocus={() => {
						setIsFocused(true);
					}}
					onBlur={() => {
						setIsFocused(false);
					}}
					onChangeText={(text) => {
						setForm((form) => {
							const next = {
								...form,
								[propertyKey]: text
							};
							return next;
						});
					}}
				/>
			</View>
		</View>
	);
};

export default LoginInput;

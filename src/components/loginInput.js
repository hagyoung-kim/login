import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import Colors from '../common/colors';

const LoginInput = ({ children, title, placeholder, style, form, setForm, propertyKey }) => {
	const [ isFocused, setIsFocused ] = useState(false);

	// const _renderErrorMessage = () => (
	// 	<Text
	// 		style={{
	// 			paddingLeft: 15,
	// 			paddingBottom: 10,
	// 			color: Colors.grapefruit,
	// 			fontSize: 10
	// 		}}
	// 	>
	// 		{errorMessage}
	// 	</Text>
	// );

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
						// inputText();
					}}
					onBlur={() => {
						setIsFocused(false);
					}}
					// onChangeText={(text) => {
					// 	setForm((prev) => {
					// 		const next = {
					// 			...prev,
					// 			[propertyKey]: text
					// 		};
					// 		return next;
					// 	});
					// }}
					onChangeText={(text) => {
						setForm((prev) => {
							const next = {
								...prev,
								[propertyKey]: text
							};
							return next;
						});
					}}
					// value={form[propertyKey]}
				/>

				{/* {typeof isValidated === 'boolean' &&
					!isValidated &&
					inputTitle === '비밀번호 확인' &&
					form[propertyKey] !== '' &&
					_renderErrorMessage()} */}
			</View>

			{children}
		</View>
	);
};

export default LoginInput;

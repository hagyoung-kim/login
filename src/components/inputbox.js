import React, { useState } from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import Colors from '../common/colors';

const Inputbox = ({
	children,
	title,
	placeholder,
	style,
	form,
	setForm,
	propertyKey,
	isValidated,
	errorMessage,
	inputTitle,
	dataCheck
}) => {
	const [ isFocused, setIsFocused ] = useState(false);

	const _renderErrorMessage = () => (
		<Text
			style={{
				paddingLeft: 15,
				paddingBottom: 10,
				color: Colors.grapefruit,
				fontSize: 10
			}}
		>
			{errorMessage}
		</Text>
	);

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
					// placeholderTextColor=Colors.brownGrey
					onFocus={() => {
						setIsFocused(true);
						// inputText();
					}}
					onBlur={() => {
						setIsFocused(false);
					}}
					onChangeText={(text) => {
						setForm((prev) => {
							const next = {
								...prev,
								[propertyKey]: text
							};
							return next;
						});
					}}
					value={form[propertyKey]}
				/>
				<Image
					dataCheck={dataCheck}
					style={{ position: 'absolute', top: 30, right: 20 }}
					source={require('../img/pinkCheck.png')}
				/>

				{typeof isValidated === 'boolean' &&
					!isValidated &&
					dataCheck === 'boolean' &&
					!dataCheck &&
					inputTitle === '비밀번호 확인' &&
					form[propertyKey] !== '' &&
					_renderErrorMessage()}
			</View>

			{children}
		</View>
	);
};

export default Inputbox;

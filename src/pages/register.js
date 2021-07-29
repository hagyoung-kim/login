import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import Colors from '../common/colors';
import Title from '../components/title';
import Footer from '../components/footer';
import Inputbox from '../components/inputbox';
// import pinkCheck from '../img/pinkCheck';

/**
 * 별명이 등록가능한지의 여부를 가져옴
 * @param {string} nickname 별명
 * @return {boolean}
 */
const getIsNicknameOkay = (nickname) => {
	return nickname.length <= 10;
};

// const getIsNicknameCheckOkay = (nicknameCheck) => {
// 	return nickname.length <= 10;
// };

const getIsUserIdOkay = (userId) => {
	return /^(?=[A-Z0-9]*[a-z])(?=[a-zA-Z]*[0-9])[a-zA-Z0-9]{4,10}$/.test(userId);
};
const getIsPhoneOkay = (phone) => {
	return /^[0-9]+$/.test(phone);
};
const getIsPasswordOkay = (password) => {
	return /^(?=[A-Z0-9]*[a-z])(?=[a-zA-Z]*[0-9])[a-zA-Z0-9]{4,10}$/.test(password);
};
const getIsPasswordCheckOkay = (passwordCheck) => {
	return /^(?=[A-Z0-9]*[a-z])(?=[a-zA-Z]*[0-9])[a-zA-Z0-9]{4,10}$/.test(passwordCheck);
};

// const getIsDataCheckOkay = (dataCheck) => {
// 	return
// };

const Register = () => {
	// const [ userId, setUserId ] = useState('');
	// const [ userPw, setUserPW ] = useState('');
	// const [ pwCheck, setPwCheck ] = useState('');
	// const [ nickname, setNickname ] = useState('');
	// const [phone, setPhone] = useState('');
	const [ form, setForm ] = useState({
		nickname: '',
		nicknameCheck: '',
		userId: '',
		password: '',
		passwordCheck: '',
		phone: ''
		// dataCheck: false
	});
	const [ dataCheck, setDataCheck ] = useState(false);

	const isNicknameOkay = getIsNicknameOkay(form.nickname);
	// const isNicknameCheckOkay = getIsNicknameCheckOkay(form.nicknameCheck);
	const isUserIdOkay = getIsUserIdOkay(form.userId);
	const isPhoneOkay = getIsPhoneOkay(form.phone);
	const isPasswordOkay = getIsPasswordOkay(form.password);
	const isPasswordCheckOkay = getIsPasswordCheckOkay(form.passwordCheck);
	// const isDataCheckOkay = getIsDataCheckOkay(dataCheck);

	const joinInputList = [
		{
			title: '별명',
			placeholder: '최대 10자 이내',
			propertyKey: 'nickname',
			isValidated: isNicknameOkay,
			errorMessage: `별명이 최대 10자 이내여야 합니다`,
			form,
			setForm

			// dataCheck: isDataCheckOkay,
			// setDataCheck
		},
		{
			title: '아이디',
			placeholder: '4~10자 영문 숫자 조합',
			propertyKey: 'userId',
			isValidated: isUserIdOkay,
			errorMessage: '아이디는 4~10자 이내 영문 숫자 조합으로 입력해주세요',
			form,
			setForm
		},
		{
			title: '휴대폰번호',
			placeholder: '숫자만 입력',
			isValidated: isPhoneOkay,
			errorMessage: '휴대폰 번호는 숫자만 입력해주세요.',
			propertyKey: 'phone',
			form,
			setForm
		},
		{
			title: '비밀번호',
			placeholder: '4~10자 영문 숫자 조합',
			isValidated: isPasswordOkay,
			errorMessage: '비밀번호는 4~10자 이내 영문 숫자 조합으로 입력해주세요.',
			propertyKey: 'password',
			form,
			setForm
		},
		{
			title: '비밀번호 확인',
			placeholder: '비밀번호를 다시 입력해주세요.',
			isValidated: isPasswordCheckOkay,
			errorMessage: '비밀번호가 일치하지 않습니다.',
			propertyKey: 'passwordCheck',
			form,
			setForm
		}
	];

	// const [ btn, setBtn ] = useState(false);
	const clickBtn = () => {
		// setBtn((prev) => !prev);
		if (form.nickname === '') {
			alert('별명을 입력하세요!!');
			return;
		}
		if (form.userId === '') {
			alert('아이디를 입력하세요!!');
			return;
		}
		if (form.phone === '') {
			alert('휴대폰번호를 입력하세요!!');
			return;
		}
		if (form.password === '') {
			alert('비밀번호를 입력하세요!!');
			return;
		}
		if (form.passwordCheck === '') {
			alert('비밀번호 확인을 입력하세요!!');
			return;
		}
		if (!getIsNicknameOkay(form.nickname)) {
			alert(joinInputList[0].errorMessage);
			return;
		}
		if (!getIsUserIdOkay(form.userId)) {
			alert(joinInputList[1].errorMessage);
			return;
		}
		if (!getIsPhoneOkay(form.phone)) {
			alert(joinInputList[2].errorMessage);
			return;
		}
		if (!getIsPasswordOkay(form.password)) {
			alert(joinInputList[3].errorMessage);
			return;
		}
		if (form.password !== form.passwordCheck) {
			alert(joinInputList[4].errorMessage);
			return;
		}
	};

	return (
		<ScrollView contentcontainerstyle={{ flex: 1 }}>
			<Title style={styles.title}>
				<Text>회원가입</Text>
			</Title>

			<View style={{ marginHorizontal: 28 }}>
				{joinInputList.map((inputData, index) => {
					const style = (() => {
						if (index === 0) {
							return styles.joinInputBorderNickname;
						}
						if (index === 2) {
							return styles.joinInputBorderPhone;
						}
						if (index === 3) {
							return styles.joinInputBorderPW;
						}
						if (index === 4) {
							return styles.joinInputBorderPwCheck;
						}
						return {};
					})(); // 즉시실행함수 IIFE

					return (
						<Inputbox
							inputTitle={inputData.title}
							style={style}
							{...inputData}
							key={`Inputbox_${inputData.propertyKey}`}
						/>
					);
				})}
			</View>

			<Footer clickBtn={clickBtn}>
				<Text style={{ color: Colors.white }}>회원가입 완료</Text>
			</Footer>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	title: {
		flex: 1,
		fontSize: 30,
		letterSpacing: -1.5,
		color: Colors.black,
		marginTop: 56,
		marginBottom: 15,
		borderBottomWidth: 1,
		borderBottomColor: Colors.warmPink,
		marginLeft: 28
	},
	joinInputBorderNickname: {
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10
	},
	joinInputBorderID: {
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10
	},
	joinInputBorderPhone: {
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		marginBottom: 50
	},
	joinInputBorderPW: {
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10
	},
	joinInputBorderPwCheck: {
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10
	}
});

export default Register;

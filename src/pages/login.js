import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import axios from 'axios';
import Colors from '../common/colors';
import CheckBox from '../components/checkbox';
import MainBtn from '../components/mainBtn';
import LoginInput from '../components/loginInput';
import { useNavigation } from '@react-navigation/native';
import Account from '../apis/Account';

const Login = () => {
	// const [ check, setCheck ] = useState(true);
	// const [ btn, setBtn ] = useState(false);
	const [ form, setForm ] = useState({
		userId: '',
		password: ''
	});

	const goLogin = async () => {
		try {
			const params = new FormData();
			console.log(form);
			params.append('username', form.userId);
			params.append('password', form.password);
			params.append('grant_type', 'password');
			// console.log(params);
			const result = Account.login(params).then((response) => {
				// console.log(response);
				moveMain();
			});
			// console.log(result);
		} catch (e) {
			throw e;
		}
	};

	// const clickCheck = () => {
	// 	setCheck((prev) => !prev);
	// };
	// const clickBtn = () => {
	// 	setBtn((prev) => !prev);
	// };

	const [ termList, setTermList ] = useState([
		{
			id: 1,
			active: false
		}
	]);

	const loginInputText = () => {
		// return setForm(text);
		//버튼 컬러
	};

	const navigation = useNavigation();

	//callback은 의무 아님
	const moveTerm = useCallback(() => {
		navigation.navigate('term');
	}, []);
	const moveMain = useCallback(() => {
		navigation.navigate('home');
	}, []);

	// const essentialCheck = () => {
	// 	return termList.active;
	// };
	// console.log('essentialCheck', essentialCheck());

	return (
		<ScrollView contentcontainerstyle={{ flex: 1 }}>
			<View style={{ paddingHorizontal: 25 }}>
				<View style={{ flex: 1 }}>
					<Image style={(styles.logo, { marginVertical: 50 })} source={require('../img/logo.png')} />
				</View>
				<View style={(styles.loginBox, { flex: 2 })}>
					<LoginInput setForm={setForm} title="로그인" placeholder="아이디를 입력해주세요" propertyKey="userId" />
					<LoginInput setForm={setForm} title="비밀번호" placeholder="비밀번호를 입력해주세요" propertyKey="password" />
					<CheckBox
						value={false}
						// clickCheck={clickCheck}
						termList={termList}
						setTermList={setTermList}
						style={styles.termStyle}
					>
						<Text>로그인 유지 </Text>
					</CheckBox>
					{/* clickBtn={clickBtn} */}
					<MainBtn
						onPress={moveMain}
						goLogin={goLogin}
						// isCheck={essentialCheck()}
						isText={loginInputText}
						form={form}
					>
						<Text>로그인</Text>
					</MainBtn>
					<View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
						<TouchableOpacity onPress={moveTerm} style={{ marginHorizontal: 15 }}>
							<Text>회원가입</Text>
						</TouchableOpacity>
						<TouchableOpacity style={{ marginHorizontal: 15 }}>
							<Text>아이디찾기</Text>
						</TouchableOpacity>
						<TouchableOpacity style={{ marginHorizontal: 15 }}>
							<Text>비밀번호찾기</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View style={{ flex: 1, paddingBottom: 40 }}>
					<Text style={styles.social}>
						혹은 <Text style={{ fontWeight: 'bold' }}>소셜아이디</Text>로 로그인
					</Text>
					<View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
						<TouchableOpacity style={{ marginHorizontal: 8, alignItems: 'center' }}>
							<Image source={require('../img/apple.png')} />
							<Text style={{ marginTop: 5 }}>애플</Text>
						</TouchableOpacity>
						<TouchableOpacity style={{ marginHorizontal: 8, alignItems: 'center' }}>
							<Image source={require('../img/facebook.png')} />
							<Text style={{ marginTop: 5 }}>페이스북</Text>
						</TouchableOpacity>
						<TouchableOpacity style={{ marginHorizontal: 8, alignItems: 'center' }}>
							<Image source={require('../img/kakao.png')} />
							<Text style={{ marginTop: 5 }}>카카오</Text>
						</TouchableOpacity>
						<TouchableOpacity style={{ marginHorizontal: 8, alignItems: 'center' }}>
							<Image source={require('../img/naver.png')} />
							<Text style={{ marginTop: 5 }}>네이버</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	social: {
		textAlign: 'center',
		fontSize: 12,
		letterSpacing: -0.9,
		lineHeight: 13,
		marginTop: 160
	},
	textInputBorderID: {
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10
	},
	textInputBorderPW: {
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10
	}
});

export default Login;

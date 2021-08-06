import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import CheckBox from '../components/checkbox';
import MainBtn from '../components/mainBtn';
import LoginInput from '../components/loginInput';
import { useNavigation } from '@react-navigation/native';
import Account from '../apis/Account';
import { setToken } from '../apis/token';

const Login = () => {
	const goLogin = async () => {
		try {
			const params = new FormData();
			console.log(form);
			params.append('username', form.userId);
			params.append('password', form.password);
			params.append('grant_type', 'password');
			// console.log(params);
			const result = Account.login(params).then((response) => {
				console.log(response);
				setToken(response.data.access_token);
				moveMain();
			});
			// console.log(result);
		} catch (e) {
			throw e;
		}
	};

	const [ form, setForm ] = useState({
		userId: '',
		password: ''
	});

	const [ termList, setTermList ] = useState({
		id: 1,
		active: false
	});

	const navigation = useNavigation();
	//callback은 의무 아님
	// const moveTerm = useCallback(() => {
	// 	navigation.navigate('term');
	// }, []);
	const moveTerm = () => {
		navigation.navigate('term');
	};

	const moveMain = useCallback(() => {
		navigation.navigate('bottomNav');
	}, []);

	return (
		<ScrollView contentcontainerstyle={{ flex: 1 }}>
			<View style={{ paddingHorizontal: 25 }}>
				<View style={{ flex: 1 }}>
					<Image style={(styles.logo, { marginVertical: 50 })} source={require('../img/logo.png')} />
				</View>
				<View style={(styles.loginBox, { flex: 2 })}>
					<LoginInput
						style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
						setForm={setForm}
						title="로그인"
						placeholder="아이디를 입력해주세요"
						propertyKey="userId"
					/>
					<LoginInput
						style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
						setForm={setForm}
						title="비밀번호"
						placeholder="비밀번호를 입력해주세요"
						propertyKey="password"
					/>
					<CheckBox setTermList={setTermList} style={styles.termStyle}>
						<Text>로그인 유지 </Text>
					</CheckBox>
					<MainBtn goLogin={goLogin} />
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

				<View style={{ flex: 1, paddingBottom: 10 }}>
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
		marginTop: 130
	}
});

export default Login;

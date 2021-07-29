import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import axios from 'axios';
import Colors from '../common/colors';
import CheckBox from '../components/checkbox';
import MainBtn from '../components/mainBtn';
import LoginInput from '../components/loginInput';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
	// const [ posts, setPosts ] = React.useState([]);

	const [ check, setCheck ] = useState(true);
	const [ btn, setBtn ] = useState(false);
	const [ input, setInput ] = useState(false);

	// React.useEffect(() => {
	// 	movePage();
	// }, []);

	// const movePage = async () => {
	// 	const res = await axios({
	// 		url: 'https://9001.in.actbase.io',
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': FormData
	// 		},
	// 		formData: {
	// 			username: '',
	// 			password: '',
	// 			grant_type: 'password'
	// 		}
	// 	});
	// 	setPosts(res.data);
	// };

	const clickCheck = () => {
		setCheck((prev) => !prev);
	};
	const clickBtn = () => {
		setBtn((prev) => !prev);
	};
	// const inputText = () => {
	// 	setInput((prev) => !prev);
	// };

	const loginInputList = [
		{
			title: '아이다',
			placeholder: '아이디를 입력해주세요'
		},
		{
			title: '비밀번호',
			placeholder: '비밀번호를 입력해주세요'
		}
	];

	const navigation = useNavigation();

	//callback은 의무 아님
	const moveTerm = useCallback(() => {
		// console.log(1);
		navigation.navigate('term');
	}, []);

	return (
		<ScrollView contentcontainerstyle={{ flex: 1 }}>
			<View style={{ paddingHorizontal: 25 }}>
				<View style={{ flex: 1 }}>
					<Image style={(styles.logo, { marginVertical: 50 })} source={require('../img/logo.png')} />
				</View>
				<View style={(styles.loginBox, { flex: 2 })}>
					{loginInputList.map((data, index) => {
						const style =
							index === 0
								? styles.textInputBorderID
								: index === loginInputList.length - 1 ? styles.textInputBorderPW : {};
						return (
							<LoginInput style={style} title={data.title} placeholder={data.placeholder} key={index} />
						);
					})}

					<CheckBox clickCheck={clickCheck} style={styles.termStyle}>
						<Text>로그인 유지</Text>
					</CheckBox>

					<MainBtn clickBtn={clickBtn}>
						<Text>로그인</Text>
					</MainBtn>

					<View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
						<TouchableOpacity onPress={moveTerm} style={{ marginHorizontal: 15 }}>
							{/* <Link href="/register"> */}
							<Text>회원가입</Text>
							{/* </Link> */}
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

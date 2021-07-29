import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import Colors from '../common/colors';
import Title from '../components/title';
import CheckBox from '../components/checkbox';
import Footer from '../components/footer';

const Term = () => {
	const [ check, setCheck ] = useState(false);
	const [ btn, setBtn ] = useState(false);
	// const [ checkBtn, setCheckBtn ] = useState(false);

	const clickCheck = () => {
		setCheck((prev) => !prev);
	};

	const clickBtn = () => {
		setBtn((prev) => !prev);
	};

	// const clickCheckBtn = () => {
	// 	setCheckBtn((prev) => !prev);
	// };

	const TermList = [
		'서비스 이용약관 (필수)',
		'개인정보 처리방침 (필수)',
		'개인정보 수집 및 이용 (필수)',
		'개인정보 제3자 제공 동의 (선택)',
		'마케팅 활용 동의 (선택)'
	];

	return (
		<ScrollView contentcontainerstyle={{ flex: 1 }}>
			<Title style={styles.title}>
				<Text>약관동의</Text>
			</Title>

			<View style={{ marginHorizontal: 28 }}>
				<View style={{ flex: 2 }}>
					<CheckBox clickCheck={clickCheck} style={styles.termStyle}>
						<Text>약관에 모두 동의합니다.</Text>
					</CheckBox>

					{TermList.map((data) => {
						return (
							<CheckBox style={{ marginLeft: 10 }} clickCheck={clickCheck}>
								<View style={{ flexDirection: 'row' }}>
									<Text> {data} </Text>
								</View>
								<TouchableOpacity style={{ justifyContent: 'center' }}>
									<Text
										style={{
											fontSize: 12,
											textDecorationLine: 'underline',
											fontWeight: 'bold',
											textAlign: 'center'
										}}
									>
										약관보기
									</Text>
								</TouchableOpacity>
							</CheckBox>
						);
					})}
				</View>
			</View>

			<Footer clickBtn={clickBtn}>
				<Text style={{ color: Colors.white }}>다음으로</Text>
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
	termStyle: {
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: Colors.veryLightPink,
		borderRadius: 10,
		paddingVertical: 19,
		paddingLeft: 9.5
	},
	termListStyle: {
		position: 'relative',
		marginTop: 22,
		flexDirection: 'row',
		paddingLeft: 9.5
	}
});

export default Term;

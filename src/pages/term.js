import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Colors from '../common/colors';
import Title from '../components/title';
import CheckBox from '../components/checkbox';
import CheckBox2 from '../components/checkbox2';
import Footer from '../components/footer';
import { useNavigation } from '@react-navigation/native';

const Term = () => {
	const [ termList, setTermList ] = useState([
		{
			id: 1,
			title: '서비스 이용약관 (필수)',
			active: false
		},
		{
			id: 2,
			title: '개인정보 처리방침 (필수)',
			active: false
		},
		{
			id: 3,
			title: '개인정보 수집 및 이용 (필수)',
			active: false
		},
		{
			id: 4,
			title: '개인정보 제3자 제공 동의 (선택)',
			active: false
		},
		{
			id: 5,
			title: '마케팅 활용 동의 (선택)',
			active: false
		}
	]);

	const essentialCheck = () => {
		return termList[0].active && termList[1].active && termList[2].active;
	};
	console.log('essentialCheck', essentialCheck());

	const navigation = useNavigation();

	const moveRegister = () => {
		if (!essentialCheck()) return;
		navigation.navigate('register', termList);
		// essentialCheck() ? navigation.navigate('register') : {};
	};

	return (
		<ScrollView style={{ flex: 1 }}>
			<View>
				<Title style={styles.title} title="약관동의" subtitle="리그에 참여하기 위한 서비스 약관을 확인하세요" />

				<View style={{ marginHorizontal: 28, marginBottom: 190 }}>
					<CheckBox setTermList={setTermList} style={styles.termStyle}>
						<Text>약관에 모두 동의합니다. </Text>
					</CheckBox>

					{termList.map((data) => {
						return (
							<View key={data.id}>
								<CheckBox2 setTermList={setTermList} active={data.active} id={data.id} key={data.id}>
									<View style={{ flexDirection: 'row', marginVertical: 13 }} key={data.id}>
										<Text style={{ fontSize: 12, color: Colors.brownishGrey }} key={data.id}>
											{data.title}
										</Text>
									</View>
								</CheckBox2>
							</View>
						);
					})}
				</View>

				<Footer onPress={moveRegister} isCheck={essentialCheck()}>
					<Text style={{ color: Colors.white }}>다음으로</Text>
				</Footer>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	title: {
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

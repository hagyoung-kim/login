import * as React from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import TabViewDataList from '../components/tabViewDataList';
import TabViewBtn from '../components/tabViewBtn';
import TabDropDown from '../components/tabDropDown';

const TabViewData = () => {
	return (
		<View style={{ flex: 1 }}>
			<TabDropDown />
			<View>
				<TabViewDataList title="현재수익률" titleData="50.00" unit="%" />
				<TabViewDataList title="리그 랭킹" titleData="132" unit="위" />
				<TabViewDataList title="보유종목" titleData="15" unit="개" />
				<TabViewDataList title="자본금" titleData="10,000,000" unit="원" />
				<TouchableOpacity>
					<Image
						source={require('../img/ellipseQuestion.png')}
						style={{ position: 'absolute', bottom: 22, left: 70 }}
					/>
				</TouchableOpacity>
			</View>
			<TabViewBtn title="리그 바로가기" />
		</View>
	);
};

export default TabViewData;

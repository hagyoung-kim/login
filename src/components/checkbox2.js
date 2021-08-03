import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
// import Colors from '../common/colors';

const CheckBox2 = ({ setTermList, active, children, id }) => {
	return (
		<View
			style={{
				marginLeft: 10,
				flexDirection: 'row',
				marginVertical: 10,
				justifyContent: 'space-between'
			}}
		>
			<TouchableOpacity
				style={{ marginLeft: 40 }}
				onPress={() => {
					setTermList((prev) => {
						return prev.map((data) => {
							return data.id === id ? { ...data, active: !data.active } : data;
						});
					});
				}}
			>
				{/* state에 들어있는 기존의 data.id값이 id라는 이름으로 props되었고, 
				내가 클릭했을 때 setTermList를 통해 값을 변경할 수 있는데 여기서 내가 
				클릭할 때마다 data라는 인자를 통해 객체가 하나씩 반복됨. 변경되는 값이 
				객체로 반복되어 들어오면서 변경된 data 값의 id가 기존의 data의 id와 일치하면 
				기존의 active를 ture로 바꿔라 */}

				<View>
					<Image
						style={{ position: 'absolute', top: 5, left: -35, flexDirection: 'row' }}
						source={active ? require('../img/pinkCheck.png') : require('../img/grayCheck.png')}
					/>
				</View>
				{children}
			</TouchableOpacity>

			<TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
				<Text
					style={{
						fontSize: 11,
						textDecorationLine: 'underline',
						fontWeight: 'bold',
						textAlign: 'center'
					}}
				>
					약관보기
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default CheckBox2;

import React from 'react';
import { View } from 'react-native';
import MainTitle from '../../components/mainTitle';
import RankerList from '../../components/rankerList';

const RankerListData = [
	{
		id: 1,
		ranking: 1,
		// updown: ,
		updownNum: 5,
		image: require('../../img/naver.png'),
		name: '주식왕왕개미',
		percent: '+300.15 %'
	},
	{
		id: 2,
		ranking: 2,
		// updown: ,
		updownNum: 5,
		image: require('../../img/apple.png'),
		name: '주갤죽돌이',
		percent: '+298.10 %'
	},
	{
		id: 3,
		ranking: 3,
		// updown: ,
		updownNum: 5,
		image: require('../../img/naver.png'),
		name: '주식왕왕개미',
		percent: '+162.85 %'
	},
	{
		id: 4,
		ranking: 4,
		// updown: ,
		updownNum: 1,
		image: require('../../img/apple.png'),
		name: '주갤죽돌이',
		percent: '+76.32 %'
	},
	{
		id: 5,
		ranking: 5,
		// updown: ,
		updownNum: 5,
		image: require('../../img/facebook.png'),
		name: '주식왕왕개미',
		percent: '+26.31 %'
	}
];

const Ranker = () => {
	return (
		<View>
			<MainTitle />
			{RankerListData.map((data) => {
				return (
					<View>
						<RankerList
							ranking={data.ranking}
							updownNum={data.updownNum}
							image={data.image}
							name={data.name}
							percent={data.percent}
							key={`${data.id}`}
						/>
					</View>
				);
			})}
		</View>
	);
};

export default Ranker;

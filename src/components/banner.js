import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Linking, TouchableOpacity, Image } from 'react-native';
import BannerApi from '../apis/bannerApi';
import FastImage from 'react-native-fast-image';
import Swiper from 'react-native-swiper';
// import Modal from 'react-native-modal';

// const [isModalVisible, setModalVisible] = useState(false);
// const toggleModal = () => {
// 	setModalVisible(!isModalVisible);
//   };

const Banner = () => {
	const [ images, setImages ] = React.useState([]);

	React.useEffect(() => {
		BannerApi.BannerApi()
			.then((Response) => {
				setImages(Response.data.content);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<Swiper style={styles.wrapper} showsButtons={false} showsPagination={true}>
			{images.map((photo) => {
				return (
					<TouchableOpacity
						onPress={() => {
							Linking.openURL(photo.link);
						}}
					>
						<FastImage
							style={{ width: Dimensions.get('window').width, height: 400 }}
							source={{ uri: `https://9001.in.actbase.io/api/files/${photo.imageId}` }}
							key={`${photo.id}`}
						/>
					</TouchableOpacity>
				);
			})}
		</Swiper>
	);
};

const styles = StyleSheet.create({
	wrapper: { height: 400 }
});
export default Banner;

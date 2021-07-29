import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Login from './src/pages/login';
import Term from './src/pages/term';
import Register from './src/pages/register';
import Inputbox from './src/components/inputbox';
import Done from './src/pages/done';

const App = () => {
	return (
		<View>
			{/* <Login /> */}
			{/* <Term /> */}
			<Register />
			{/* <Done /> */}
		</View>
	);
};

export default App;

import 'react-native-gesture-handler';
import React, { useState } from 'react';
import Login from './src/pages/login';
import Term from './src/pages/term';
import Register from './src/pages/register';
import Done from './src/pages/done';
// import { decode, encode } from 'base-64';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
	// if (!global.btoa) {
	// 	global.btoa = encode;
	// }
	// if (!global.atob) {
	// 	global.atob = decode;
	// }
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="login" component={Login} />
				<Stack.Screen name="term" component={Term} />
				<Stack.Screen name="register" component={Register} />
				<Stack.Screen name="registerDone" component={Done} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;

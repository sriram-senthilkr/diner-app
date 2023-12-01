import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import BottomTabNav from "./screens/BottomTabNav";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<BottomTabNav />
		</NavigationContainer>
	);
}

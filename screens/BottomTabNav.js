import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";
import AddNewScreen from "./AddNewScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabNav() {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Add New" component={AddNewScreen} />
			<Tab.Screen name="Settings" component={SettingsScreen} />
		</Tab.Navigator>
	);
}

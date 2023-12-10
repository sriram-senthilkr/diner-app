import { View, Text } from "react-native";

export default function SettingsScreen() {
	return (
		<View
			style={{
				height: "100%",
				width: "100%",
				minWidth: 330,
				backgroundColor: "white",
				alignItems: "center",
				justifyContent: "flex-start",
				paddingTop: 40,
				padding: 20,
			}}
		>
			<Text>Settings</Text>
		</View>
	);
}

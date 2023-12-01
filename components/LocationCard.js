import { View, Text } from "react-native";

export default function LocationCard({ location }) {
	return (
		<View style={{ borderWidth: 2, marginBottom: 10 }}>
			<Text> Mcdonald </Text>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<Text> Central </Text>
				<Text> $$$ </Text>
				<Text> V </Text>
			</View>
		</View>
	);
}

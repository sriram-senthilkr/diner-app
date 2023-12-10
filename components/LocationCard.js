import { View, Text } from "react-native";

export default function LocationCard({ location }) {
	return (
		<View style={{ padding: 10, paddingTop: 7 }}>
			<Text
				style={{
					fontSize: 27,
					color: "#F9C49D",
					marginBottom: 5,
					fontWeight: "500",
				}}
			>
				{" "}
				McDonald's{" "}
			</Text>
			<Text
				style={{
					fontSize: 17,
					fontWeight: "500",
					color: "white",
					marginBottom: 4,
				}}
			>
				{" "}
				Fast Food{" "}
			</Text>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<Text style={{ color: "white" }}> Central </Text>
				<Text style={{ color: "white" }}> $$$ </Text>
				<Text style={{ color: "white" }}> V </Text>
			</View>
			<View style={{ alignItems: "center", marginTop: 15 }}>
				<View
					style={{
						borderWidth: 1.5,
						borderColor: "#F9C49D",
						borderRadius: 20,
						width: 70,
					}}
				/>
			</View>
		</View>
	);
}

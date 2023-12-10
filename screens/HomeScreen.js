import { View, Text, Image } from "react-native";
import LocationCard from "../components/LocationCard";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
	const location = {
		name: "Mcdonald's",
		area: "Central",
		price: "$$",
		vegan: true,
	};
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View
				style={{
					flexDirection: "column",
					height: "100%",
					width: "100%",
				}}
			>
				<View style={{ flex: 1 }}>
					<View style={{ flex: 1 }}>
						<Text
							style={{
								fontWeight: "bold",
								marginLeft: "12%",
								marginTop: "5%",
								fontSize: 30,
							}}
						>
							What are you
						</Text>
						<Text
							style={{
								fontWeight: "bold",
								marginLeft: "12%",
								fontSize: 30,
							}}
						>
							feeling today?
						</Text>
					</View>
					<View style={{ flex: 2, justifyContent: "center" }}>
						<View style={{}}>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-around",
									marginBottom: "5%",
								}}
							>
								<Text
									style={{
										borderColor: "black",
										borderRadius: 1,
										borderWidth: 1,
									}}
								>
									Area
								</Text>
								<Text>Cuisine</Text>
							</View>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-around",
								}}
							>
								<Text>Price</Text>
								<Text>Rating</Text>
							</View>
						</View>
					</View>
				</View>
				<View style={{ flex: 2, backgroundColor: "powderblue" }}>
					<Text>Location Card</Text>
				</View>
			</View>
		</SafeAreaView>
	);
}

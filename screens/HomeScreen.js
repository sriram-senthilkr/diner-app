import { View, Text, Image } from "react-native";
import LocationCard from "../components/LocationCard";

export default function HomeScreen() {
	const location = {
		name: "Mcdonald's",
		area: "Central",
		price: "$$",
		vegan: true,
	};
	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 1 }}>
				<Text>Home Screen</Text>

				<LocationCard />
				<LocationCard />
				<LocationCard />
			</View>
		</View>
	);
}

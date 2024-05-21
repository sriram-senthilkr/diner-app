import { View, Text, Image, FlatList } from "react-native";
import LocationCard from "../components/LocationCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import React, { useState } from "react";

const DATA = [
	{
		id: "1",
		location: "Mcdonald's",
		type: "FastFood",
	},
	{
		id: "2",
		location: "KFC",
		type: "FastFood",
	},
	{
		id: "3",
		location: "Jack's Place",
		type: "Steakhouse",
	},
	{
		id: "4",
		location: "KFry",
		type: "Korean",
	},
	{
		id: "5",
		location: "Pepper Lunch",
		type: "Japanese",
	},
];

export default function HomeScreen() {
	const [selected, setSelected] = useState([]);

	const data2 = [
		{ key: "1", value: "Mobiles", disabled: true },
		{ key: "2", value: "Appliances" },
		{ key: "3", value: "Cameras" },
		{ key: "4", value: "Computers", disabled: true },
		{ key: "5", value: "Vegetables" },
		{ key: "6", value: "Diary Products" },
		{ key: "7", value: "Drinks" },
	];

	return (
		<SafeAreaView
			edges={["top", "right", "left"]}
			style={{
				flex: 1,
				backgroundColor: "white",
				flexDirection: "column",
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
							<MultipleSelectList
								setSelected={(val) => setSelected(val)}
								data={data2}
								save="value"
								label="Rating"
								placeholder="Rating"
							/>
						</View>
					</View>
				</View>
			</View>
			<View
				style={{
					flex: 2,
					backgroundColor: "powderBlue",
				}}
			>
				<View
					style={{
						flex: 1,
						backgroundColor: "#3C5A59",
						borderTopLeftRadius: 50,
						borderTopRightRadius: 50,
					}}
				>
					<View
						style={{
							flex: 1,
							marginHorizontal: "9%",
							marginTop: "5%",
						}}
					>
						<FlatList
							data={DATA}
							renderItem={({ item }) => (
								<LocationCard
									location={item.location}
									type={item.type}
								/>
							)}
							keyExtractor={(item) => item.id}
						/>
						{/* <LocationCard location="Mcdonald" type="FastFOod" />
						<LocationCard location="Mcdonald" type="FastFOod" />
						<LocationCard location="Mcdonald" type="FastFOod" />
						<LocationCard location="Mcdonalds" type="FastFOod" /> */}
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}

export default function LocationCard({ location }) {
	const { name, image, price, rating, categories } = location;
	const formattedCategories = categories.map((cat) => cat.title).join(" • ");

	const description = `${formattedCategories} ${
		price ? " • " + price : ""
	} • 🎫 • ${rating} ⭐ (${reviews.length})`;

	return (
		<View style={styles.container}>
			<RestaurantImage image={image} />
			<RestaurantInfo name={name} description={description} />
		</View>
	);
}

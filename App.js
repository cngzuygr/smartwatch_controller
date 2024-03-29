import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/pages/HomeScreen";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<HomeScreen />
			<StatusBar />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});

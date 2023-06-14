import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Button = ({ text, handlePress }) => {
	return (
		<TouchableOpacity style={styles.button} onPress={handlePress}>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
};

export default Button;

const styles = StyleSheet.create({
	button: {
		backgroundColor: "gray",
		width: "30%",
		paddingVertical: 20,
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 10,
		marginTop: 10,
	},
	text: {
		color: "white",
		fontSize: 20,
	},
});

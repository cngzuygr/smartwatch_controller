import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { auth, setChat, db } from "../firebase";
import {
	onSnapshot,
	collection,
	orderBy,
	query,
	collectionGroup,
	doc,
	setDoc,
} from "firebase/firestore";

const HomeScreen = () => {
	const [messages, setMessages] = useState();

	let itemRef = collection(db, "data");

	useEffect(
		() =>
			onSnapshot(itemRef, (docsSnap) => {
				docsSnap.forEach((doc) => {
					setMessages(doc.data());
				});
			}),

		[]
	);

	const handleStepPress = async (step) => {
		const docRef = doc(db, "data", "smartwatchData");

		await setDoc(docRef, {
			burpee: messages?.burpee,
			steps: messages?.steps + step,
			temp: messages?.temp,
		})
			.then((docRef) => {
				console.log("Entire Document has been updated successfully");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const handleBurpeePress = async (burpee) => {
		const docRef = doc(db, "data", "smartwatchData");

		await setDoc(docRef, {
			burpee: messages?.burpee + burpee,
			steps: messages?.steps,
			temp: messages?.temp,
		})
			.then((docRef) => {
				console.log("Entire Document has been updated successfully");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const handleTempPress = async (temp) => {
		const docRef = doc(db, "data", "smartwatchData");

		await setDoc(docRef, {
			burpee: messages?.burpee,
			steps: messages?.steps,
			temp: messages?.temp + temp,
		})
			.then((docRef) => {
				console.log("Entire Document has been updated successfully");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<ScrollView style={styles.container}>
			{console.log(messages)}
			<Text style={{ fontSize: 36, alignSelf: "center" }}>Adım Ekle</Text>
			<Text style={{ fontSize: 36, alignSelf: "center" }}>
				{messages?.steps}
			</Text>
			<View
				style={{
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "center",
					marginBottom: 30,
				}}
			>
				<Button text={"+1"} handlePress={() => handleStepPress(1)} />
				<Button text={"+2"} handlePress={() => handleStepPress(2)} />
				<Button text={"+5"} handlePress={() => handleStepPress(5)} />
				<Button text={"+10"} handlePress={() => handleStepPress(10)} />
				<Button text={"+20"} handlePress={() => handleStepPress(20)} />
			</View>
			<Text style={{ fontSize: 36, alignSelf: "center" }}>Burpee Ekle</Text>
			<Text style={{ fontSize: 36, alignSelf: "center" }}>
				{messages?.burpee}
			</Text>

			<View
				style={{
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "center",
					marginBottom: 30,
				}}
			>
				<Button text={"+1"} handlePress={() => handleBurpeePress(1)} />
				<Button text={"+2"} handlePress={() => handleBurpeePress(2)} />
				<Button text={"+3"} handlePress={() => handleBurpeePress(3)} />
				<Button text={"+4"} handlePress={() => handleBurpeePress(4)} />
				<Button text={"+5"} handlePress={() => handleBurpeePress(5)} />
			</View>
			<Text style={{ fontSize: 36, alignSelf: "center" }}>Sıcaklık</Text>
			<Text style={{ fontSize: 36, alignSelf: "center" }}>
				{messages?.temp.toFixed(1)}
			</Text>

			<View
				style={{
					flexWrap: "wrap",
					justifyContent: "center",
					marginBottom: 30,
				}}
			>
				<View style={{ flexDirection: "row", justifyContent: "center" }}>
					<Button text={"-0.1"} handlePress={() => handleTempPress(-0.1)} />
					<Button text={"+0.1"} handlePress={() => handleTempPress(+0.1)} />
				</View>
				<View style={{ flexDirection: "row", justifyContent: "center" }}>
					<Button text={"-1"} handlePress={() => handleTempPress(-1)} />
					<Button text={"+1"} handlePress={() => handleTempPress(+1)} />
				</View>
			</View>
		</ScrollView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 15,
		marginTop: 50,
	},
});

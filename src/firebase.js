import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithCredential,
	PhoneAuthProvider,
	signOut,
} from "firebase/auth";
import {
	collection,
	doc,
	getDocs,
	getFirestore,
	orderBy,
	query,
	serverTimestamp,
	setDoc,
} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCI08VQCshYMfWW3T-CVwdI9V7BoOXOYS8",
	authDomain: "smartwatch-f9392.firebaseapp.com",
	projectId: "smartwatch-f9392",
	storageBucket: "smartwatch-f9392.appspot.com",
	messagingSenderId: "924317514383",
	appId: "1:924317514383:web:b95d01b7f15a39d1a40efa",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();

// export async function setChat(writeData) {
// 	let itemRef = doc(collection(db, "chats"));

// 	await setDoc(itemRef, { ...writeData, createdAt: serverTimestamp() }).then(
// 		() => console.log("fire")
// 	);
// }

export async function setChat(writeData) {
	let itemRef = doc(collection(db, "data"));
	const docRef = doc(db, "data", "smartwatchData");

	await setDoc(docRef, writeData)
		.then((docRef) => {
			console.log("Entire Document has been updated successfully");
		})
		.catch((error) => {
			console.log(error);
		});
}

export async function getChats() {
	let itemRef = collection(db, "data");
	let data = [];

	var q = query(itemRef, orderBy("createdAt", "desc"));

	const querySnapshot = await getDocs(q);
	querySnapshot.forEach((doc) => {
		data.push({ id: doc.id, ...doc.data() });
	});

	return { data };
}

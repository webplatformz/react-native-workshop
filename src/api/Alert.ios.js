import {Alert} from "react-native";

export default function displayMessage(message, title) {
    Alert.alert(title, message);
}
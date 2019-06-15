import {ToastAndroid} from "react-native";

export default function displayMessage(message) {
    ToastAndroid.show(message, ToastAndroid.LONG);
}
import {Alert, Button, Dimensions, Image, Platform, StyleSheet, TextInput, ToastAndroid, View} from "react-native";
import React from "react";
import getAnswer from "../service/YesOrNoApi";
import {} from "react-native";

export default class Oracle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            question: '',
            answer: '',
            image: props.image,
        };
    }

    render() {
        return (
            <View style={[styles.container, this.getBackgroundColor()]}>
                <TextInput
                    style={styles.questionBox}
                    placeholder='Ask me...'
                    value={this.state.question}
                    onChangeText={(text) => this.setState({ question: text })}
                />
                <Button
                    title='I want to know 🔮'
                    onPress={this.giveAnswer}
                />
                <Image
                    style={styles.image}
                    source={{uri: this.state.image}}
                />
            </View>
        );
    }

    getBackgroundColor = () => {
        const BACKGROUND_MAPPINGS = {
            'yes': 'mediumaquamarine',
            'no': 'lightcoral',
            'maybe': 'khaki',
            '': 'lightblue',
        };

        return { backgroundColor: BACKGROUND_MAPPINGS[this.state.answer] };
    }

    giveAnswer = async () => {
        const answer = await getAnswer();
        this.setState({ answer: answer.answer, image: answer.image });
        this.displayAlert(answer.answer);
    }

    displayAlert = (answer) => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(answer, ToastAndroid.LONG);
        } else if (Platform.OS === 'ios') {
            Alert.alert(this.state.question, answer);
        } else {
            alert(answer);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    questionBox: {
        backgroundColor: 'white',
        marginTop: 50,
        width: Dimensions.get('window').width - 40,
        height: 50,

        padding: 10,
        fontSize: 18,

        marginBottom: 20,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 4,
        resizeMode: 'contain',
        marginTop: 50,
    }
});

import {Button, Dimensions, Image, StyleSheet, TextInput, View} from "react-native";
import React from "react";
import getAnswer from "../service/YesOrNoApi";

/*
    1. Convert Oracle functional component to class component
        Hints: https://reactjs.org/docs/state-and-lifecycle.html#converting-a-function-to-a-class
    2. Add state to change background and image based on answer
        Hints:
        * https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
        * Set state.image in constructor()
        * setState({ answer: ..., image: ... } in giveAnswer()
 */
export default function Oracle(props) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.questionBox}
                placeholder='Ask me...'
            />
            <Button
                title='I want to know 🔮'
                onPress={giveAnswer}
            />
            <Image
                style={styles.image}
                source={{uri: props.image}}
            />
        </View>
    );
}

const giveAnswer = async () => {
    const answer = await getAnswer();
    this.setState({answer: answer.answer, image: answer.image });
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
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

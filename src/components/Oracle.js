import {Button, Dimensions, Image, StyleSheet, TextInput, View} from "react-native";
import React from "react";
import getAnswer from "../service/YesOrNoApi";

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
    alert(answer.answer)
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

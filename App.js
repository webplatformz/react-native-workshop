import React from 'react';
import { Button, Dimensions, Image, StyleSheet, TextInput, View } from 'react-native';
import getAnswer from './src/service/YesOrNoApi'

export default function App() {
    /*
        1. Extract <View>...</View> to ./src/components/Oracle
            Hints:
            * export default function Oracle() { return ... }
            * Move giveAnswer and styles
            * return <Oracle /> from App
        2. Add props.image to Oracle component
            Hints:
            * Oracle(props) {...}
            * https://facebook.github.io/react-native/docs/props
                Caution: Our components are functions, not classes --> retrieve props as function parameter
     */
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
                source={{uri: 'http://www.prognostik.com/wp-content/uploads/2015/10/prognostik_orakel_delphi_w.jpg'}}
            />
        </View>
    );
}

let giveAnswer = async () => {
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

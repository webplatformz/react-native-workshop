import React from 'react';
import { Button, Dimensions, Image, StyleSheet, TextInput, View } from 'react-native';
import getAnswer from './src/service/YesOrNoService'

export default function App() {
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

/*
    3. Get answer using YesOrNoService
    4. alert answer (Hint: See https://yesno.wtf/api/ for JSON structure
    5. Make giveAnswer async to await service response
*/
const giveAnswer = () => {
    alert(`Uhmmm... well... maybe!`)
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

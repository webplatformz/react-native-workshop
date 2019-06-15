import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            {/*
                1. Add <TextInput /> (https://facebook.github.io/react-native/docs/textinput), don't forget to import
                2. Add style property
                ...
                4. Add placeholder property
            */}
            {/*
                5. Add <Button /> with title (https://facebook.github.io/react-native/docs/button)
                6. Hint: Button component doesn't support style property, you can add marginBottom to questionBox
                ...
                8. Add onPress property
            */}
            <Image
                style={styles.image}
                source={{uri: 'http://www.prognostik.com/wp-content/uploads/2015/10/prognostik_orakel_delphi_w.jpg'}}
            />
        </View>
    );
}

// 7. Define function const giveAnswer = () => {} (Hint: Use alert())

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        alignItems: 'center',
    },
    // 3. Add style for questionBox (Hints: backgroundColor, marginTop, width, height, padding, fontSize)
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: 'contain',
    }
});

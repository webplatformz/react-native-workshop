import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
          <Image
              style={styles.image}
              source={{uri: 'http://www.prognostik.com/wp-content/uploads/2015/10/prognostik_orakel_delphi_w.jpg'}}
          />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: 'contain',
    }
});

import React from 'react';
import {View} from 'react-native';
import Oracle from './src/components/Oracle';
import ProphecyHistory from "./src/components/ProphecyHistory";

export default function App() {
    return (
        <View style={styles.container} >
            <Oracle image='http://www.prognostik.com/wp-content/uploads/2015/10/prognostik_orakel_delphi_w.jpg' />
            <ProphecyHistory />
        </View>
    );
}

const styles = {
    container: { flex: 1 },
};

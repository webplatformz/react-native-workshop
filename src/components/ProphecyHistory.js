import React from 'react';
import {Button, Text, View} from 'react-native';
import {retrieveProphecy} from "../service/InternalStorage";
import getBackgroundColor from './utils/AnswerColorMapper';

export default class ProphecyHistory extends React.Component {
    constructor() {
        super()
        this.state = {
            prophecy: null,
        }
    }

    render() {
        let history;
        if (this.state.prophecy) {
            history = (
                <View style={[styles.prophecy, getBackgroundColor(this.state.prophecy.answer)]}>
                    <Text style={styles.question}>{this.state.prophecy.question}</Text>
                    <Text>{this.state.prophecy.answer}</Text>
                </View>
            )
        }

        return (
            <View>
                <Button
                    title='Refresh History'
                    onPress={this.refreshHistory}
                />
                {history}
            </View>
        );
    }

    refreshHistory = async () => {
        const prophecy =  await retrieveProphecy();
        this.setState({prophecy: prophecy});
    };
}

const styles = {
    prophecy: {
        padding: 15,
    },
    question: {
        fontWeight: 'bold',
    },
}
import {Button, Dimensions, Image, StyleSheet, TextInput, View} from "react-native";
import React from "react";
import getAnswer from "../service/YesOrNoApi";
import {persistProphecy} from "../service/InternalStorage";
import getBackgroundColor from './utils/AnswerColorMapper';

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
            <View style={[styles.container, getBackgroundColor(this.state.answer)]}>
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

    giveAnswer = async () => {
        const answer = await getAnswer();
        this.setState({ answer: answer.answer, image: answer.image });
        await persistProphecy(this.state.question, answer.answer);
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

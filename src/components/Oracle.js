import {Button, Dimensions, Image, StyleSheet, TextInput, View} from "react-native";
import React from "react";
import getAnswer from "../service/YesOrNoApi";

export default class Oracle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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
        this.setState({answer: answer.answer, image: answer.image });
    }
}

const styles = StyleSheet.create({
    container: {
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
        height: Dimensions.get('window').height,
        resizeMode: 'contain',
    }
});

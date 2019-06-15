import {AsyncStorage} from 'react-native';

const STORAGE_KEY = '@Oracle:prophecy';

export const persistProphecy = async (question, answer) => {
    try {
        let prophecyJson = JSON.stringify({"question": question, "answer": answer});
        await AsyncStorage.setItem(STORAGE_KEY, prophecyJson);
        console.info(`Persisted ${prophecyJson}`)
    } catch (error) {
        console.error(error);
    }
};

export const retrieveProphecy = async () => {
    try {
        const prophecyJson = await AsyncStorage.getItem(STORAGE_KEY);
        if (prophecyJson == null) {
            return null;
        }
        console.info(`Retrieved ${prophecyJson}`);
        const prophecy = JSON.parse(prophecyJson);
        return prophecy;
    } catch (error) {
        console.error(error);
    }
};

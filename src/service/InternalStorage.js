const STORAGE_KEY = '@Oracle:prophecy';

export const persistProphecy = async (question, answer) => {
    try {
        let prophecyJson = JSON.stringify({"question": question, "answer": answer});
        // 1. Persist prophecy using AsyncStorage (https://facebook.github.io/react-native/docs/asyncstorage)

        console.info(`Persisted ${prophecyJson}`)
    } catch (error) {
        console.error(error);
    }
};

export const retrieveProphecy = async () => {
    try {
        // 2. Retrieve persisted prophecy using AsyncStorage (https://facebook.github.io/react-native/docs/asyncstorage)
        const prophecyJson = null;
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

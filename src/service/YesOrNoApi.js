const YES_OR_NO_API_URL = 'https://yesno.wtf/api/';

export default async function getAnswer() {
    try {
        let response = await fetch(YES_OR_NO_API_URL);
        return response.json();
    } catch (error) {
        console.error(error);
    }
}
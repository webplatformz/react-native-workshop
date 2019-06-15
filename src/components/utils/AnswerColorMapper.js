export default function getBackgroundColor(answer) {
    const COLOR_MAPPINGS = {
        'yes': 'mediumaquamarine',
        'no': 'lightcoral',
        'maybe': 'khaki',
        '': 'lightblue',
    };

    return { backgroundColor: COLOR_MAPPINGS[answer] };
}
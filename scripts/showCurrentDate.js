const dateField = document.getElementById("current-date");
function updateDateField() {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const date = new Date();
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    const daySuffix = getDaySuffix(day);
    const formattedDay = daySuffix === '' ? day.toString() : `${day}${daySuffix}`;

    const dateFieldText = `Today is the ${formattedDay} of ${month}, ${year}`;
    return dateFieldText;
}

function getDaySuffix(day) {
    const lastDigit = day % 10;
    const lastTwoDigits = day % 100;

    switch (lastDigit) {
        case 1:
            return lastTwoDigits === 11 ? 'th' : 'st';
        case 2:
            return lastTwoDigits === 12 ? 'th' : 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
}

dateField.textContent = updateDateField();
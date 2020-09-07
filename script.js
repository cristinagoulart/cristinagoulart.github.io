

function updateMilliseconds(milliseconds) {
    if (milliseconds === "") {
        document.getElementById("outputConverted").value = "";
        return;
    }
    var checkbox = document.getElementById("shortText");

    if (checkbox.checked) {
        document.getElementById("outputConverted").value = convertMillsToShortDuration(milliseconds);
    } else {
        document.getElementById("outputConverted").value = convertMillsToDuration(milliseconds);
    }
}

function initialize() {
}

function convertMillsToDuration(milliseconds) {
    var sec_num = parseInt(milliseconds / 1000);
    var days = Math.floor(sec_num / 86400);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (days > 0) {
        hours = hours - (24 * days);
        return days + ' Days ' + hours + ' Hours ' + minutes + ' Minutes ' + seconds + ' Seconds';
    } else if (hours > 0) {
        return hours + ' Hours ' + minutes + ' Minutes ' + seconds + ' Seconds';
    } else if (minutes > 0) {
        return minutes + ' Minutes ' + seconds + ' Seconds';
    } else if (seconds > 0) {
        return seconds + ' Seconds';
    } else if (seconds === 0) {
        return milliseconds + ' Milliseconds (not enough for seconds!)';
    } else {
        return days + ' Days ' + hours + ' Hours ' + minutes + ' Minutes ' + seconds + ' Seconds';
    }
}

function convertMillsToShortDuration(milliseconds) {
    var sec_num = parseInt(milliseconds / 1000);
    var days = Math.floor(sec_num / 86400);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (days > 0) {
        hours = hours - (24 * days);
        return days + ' D ' + hours + ' H ' + minutes + ' Min ' + seconds + ' s';
    } else if (hours > 0) {
        return hours + ' H ' + minutes + ' Min ' + seconds + ' s';
    } else if (minutes > 0) {
        return minutes + ' Min ' + seconds + ' s';
    } else if (seconds > 0) {
        return seconds + ' s';
    } else if (seconds === 0) {
        return milliseconds + ' ms (not enough for seconds!)';
    } else {
        return days + ' D ' + hours + ' H ' + minutes + ' Min ' + seconds + ' s';
    }
}


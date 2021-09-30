// How to convert from DD format to DMS format:
// For degrees: Use number to left of decimal
// For minutes: Take number to right of decimal (including decimal) and multiply by 60. The whole number from result is minutes.
// For seconds: Take the number to the right of THAT decimal (including decimal), and multiply by 60. The whole number from result is seconds.
// Note: DD format, "-" sign means South or West, no sign means North or East
// Note: DMS format, no negative numbers, so use absolute values to make DD numbers positive

function convertCoords () {
    let finalConversion = document.getElementById('dmsCoords');
    // Message that will display if user leaves any fields empty
    const leftVal = document.getElementById("leftvalue");
    const rightVal = document.getElementById("rightvalue");
    if (leftVal.value === "" || rightVal.value === "") {
        finalConversion.innerHTML = "Please enter both coordinates.";
    } else {    
    // Get the left degrees
    let leftValue = document.getElementById('leftvalue').value;
    let leftDegreesString = leftValue.toString();
    let leftDegreesArray = leftDegreesString.split(".");
    let leftDegrees = Math.abs(leftDegreesArray[0]);
    let leftDegreesToString = leftDegrees.toString();
    // Get the left minutes
    let leftMinutesDecimal = ("." + leftDegreesArray[1]) * 60;
    let leftMinutesDecimalString = leftMinutesDecimal.toString();
    let leftMinutesDecimalArray = leftMinutesDecimalString.split(".")
    let leftMinutes = leftMinutesDecimalArray[0];
    // Get the left seconds
    let leftSecondsDecimal = ("." + leftMinutesDecimalArray[1]) * 60;
    let leftSecondsDecimalString = leftSecondsDecimal.toString();
    let leftSecondsDecimalArray = leftSecondsDecimalString.split(".")
    let leftSecondsDecimalMinutes = leftSecondsDecimalArray[0];
    let leftSeconds = Math.round(leftSecondsDecimalMinutes);
    // Get the right degrees
    let rightValue = document.getElementById('rightvalue').value;
    let rightDegreesString = rightValue.toString();
    let rightDegreesArray = rightDegreesString.split(".");
    let rightDegrees = Math.abs(rightDegreesArray[0]);
    let rightDegreesToString = rightDegrees.toString();
    // Get the right minutes
    let rightMinutesDecimal = ("." + rightDegreesArray[1]) * 60;
    let rightMinutesDecimalString = rightMinutesDecimal.toString();
    let rightMinutesDecimalArray = rightMinutesDecimalString.split(".")
    let rightMinutes = rightMinutesDecimalArray[0];
    // Get the right seconds
    let rightSecondsDecimal = ("." + rightMinutesDecimalArray[1]) * 60;
    let rightSecondsDecimalString = rightSecondsDecimal.toString();
    let rightSecondsDecimalArray = rightSecondsDecimalString.split(".")
    let rightSecondsDecimalMinutes = rightSecondsDecimalArray[0];
    let rightSeconds = Math.round(rightSecondsDecimalMinutes);
    // Left Positive Negative Check
    let leftPosNegCheck = leftDegreesToString.split("");
    let leftFirstCharacter = leftPosNegCheck[0];
    let rightPosNegCheck = rightDegreesToString.split("");
    let rightFirstCharacter = rightPosNegCheck[0];
    if (leftFirstCharacter !== "-" && rightFirstCharacter !== "-") {
        finalConversion.innerHTML = `${leftDegrees}&deg; ` + `${leftMinutes}' ` + `${leftSeconds}" N and ` + `${rightDegrees}&deg; ` + `${rightMinutes}' ` + `${rightSeconds}" E`
    } else if (leftFirstCharacter === "-" && rightFirstCharacter === "-") {
        finalConversion.innerHTML = `${leftDegrees}&deg; ` + `${leftMinutes}' ` + `${leftSeconds}" S and ` + `${rightDegrees}&deg; ` + `${rightMinutes}' ` + `${rightSeconds}" W`
    } else if (leftFirstCharacter !== "-" && rightFirstCharacter === "-") {
        finalConversion.innerHTML = `${leftDegrees}&deg; ` + `${leftMinutes}' ` + `${leftSeconds}" N and ` + `${rightDegrees}&deg; ` + `${rightMinutes}' ` + `${rightSeconds}" W`
    } else if (leftFirstCharacter === "-" && rightFirstCharacter !== "-") {
        finalConversion.innerHTML = `${leftDegrees}&deg; ` + `${leftMinutes}' ` + `${leftSeconds}" S and ` + `${rightDegrees}&deg; ` + `${rightMinutes}' ` + `${rightSeconds}" E`
    }
    else {
        finalConversion.innerHTML = "This is not a valid GPS coordinate format."
    }
}
}

// Reset Form

function resetform () {
    const leftVal = document.getElementById("leftvalue");
    const rightVal = document.getElementById("rightvalue");
    leftVal.value = "";
    rightVal.value = "";
}

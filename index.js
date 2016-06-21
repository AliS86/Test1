// finds todays date
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

//n becomes the current day
var n = weekday[d.getDay()];

//get the current time
var currentTime = new Date()
var hours = currentTime.getHours()
var minutes = currentTime.getMinutes()
var seconds = currentTime.getSeconds()

//display seconds
if (seconds < 10)
    seconds = "0" + seconds
    //display minutes
if (minutes < 10)
    minutes = "0" + minutes
    //chooses either am or pm
var suffix = "AM";
if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
}
//doesnt let the military time 0000 instead 1200
if (hours == 0) {
    hours = 12;
}
//print out the day and time
document.getElementById("ctime").innerHTML = ("Today is " + n + ". The current time is " + hours + " : " + minutes + " : " + seconds + " " + suffix + "</b>")
    //-------------------------------------------------------------------------------------------------------------
    //find the perimeter of three sides
var perimeter = (5 + 7 + 8) / 2
    //equation for to find the area
var Area = Math.sqrt(perimeter * (perimeter - 5) * (perimeter - 7) * (perimeter - 8))
    //prints the area in 2 decimal places
document.getElementById("carea").innerHTML = ("The area of a triangle with sides 5, 7, and 8 is " + Math.round(Area * 100) / 100)
    //----------------------------------------------------------------------------------------------------------------
    //the function animate_string is called
function animate_string(id) {
    //grabs the string
    var myElement = document.getElementById(id);
    //reads the string in a array format
    var textNode = myElement.childNodes[0];
    var text = textNode.data;
    //continious scroll of the text
    setInterval(function() {
        text = text[text.length - 1] + text.substring(0, text.length - 1)
        textNode.data = text;
    }, 100);
}
//-----------------------------------------------------------------------------------------------------------------------
//Finding the leap year
function leap() {
    var year = document.getElementById("cyear").value;
    //if these conditions are met then it is a leap year
    if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {

        document.getElementById("yn").innerHTML = ("It's a leap year");
    }
    //if the conditions are not met then its not a leap year
    else {
        document.getElementById("yn").innerHTML = ("It's NOT a leap year");
        console.log('down here');
    }
}
//------------------------------------------------------------------------------------------------
//Converting tempertures
function convert() {
    var temp = document.getElementById("ctemp").value;
    var choice = document.getElementById("cchoose").value;
    if (choice == 1) {
        var d = ((temp - 32) * (5 / 9))
        document.getElementById("tempResult").innerHTML = (parseInt(d) + " Celsius")
    } else {
        var d = (temp * (9 / 5)) + 32
        document.getElementById("tempResult").innerHTML = (parseInt(d) + " Fahrenheit")
    }
}

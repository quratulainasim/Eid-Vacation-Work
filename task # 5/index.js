// Q5: Write a program that greets the user based on the time of day. Display "Good Morning," "Good Afternoon," or "Good Evening" based on the time of day when you run the code.
var timeOfDay = "15:00";
var dayHours = parseInt(timeOfDay.split(":")[0]);
if (timeOfDay < "12") {
    console.log("Good Morning");
}
else if (timeOfDay < "17") {
    console.log("Good Afternoon");
}
else {
    console.log("Good Night");
}

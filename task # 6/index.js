// Q6: Write a program that calculates the Body Mass Index (BMI) and categorizes it.
function calculateBMI(weightInKg, heightInMeter) {
    return weightInKg / (heightInMeter * heightInMeter);
}
var weightInKg = 56;
var heightInMeter = 1.52;
var bmi = calculateBMI(weightInKg, heightInMeter);
console.log("BMI:", bmi.toFixed(2));
if (bmi < 18.5) {
    console.log("Underweight");
}
else if (bmi >= 18.5 && bmi < 25) {
    console.log("Normal weight");
}
else if (bmi >= 25 && bmi < 30) {
    console.log("Overweight");
}
else {
    console.log("Obese");
}

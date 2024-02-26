// Larger or Smaller?
var firstNumber = prompt("Enter the first integer:");
var secondNumber = prompt("Enter the second integer:");

if (parseInt(firstNumber) > parseInt(secondNumber)) {
    alert("The larger number is: " + firstNumber);
} else if (parseInt(firstNumber) < parseInt(secondNumber)) {
    alert("The larger number is: " + secondNumber);
} else {
    alert("Both numbers are equal.");
}
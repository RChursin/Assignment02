// The “Grade Assigner” Application
var score = prompt("Enter a score between 1 and 100:");

if (score < 1 || score > 100) {
    alert("Only numbers between 1 and 100 are accepted.");
} else if (score >= 90) {
    console.log("You received an A");
} else if (score >= 80) {
    console.log("You received a B");
} else if (score >= 70) {
    console.log("You received a C");
} else if (score >= 60) {
    console.log("You received a D");
} else {
    console.log("You received an F");
}

// The “Grade Assigner” Application (with a switch statement)
// var score = prompt("Enter a score between 1 and 100:");

// if (score < 1 || score > 100) {
//     alert("Only numbers between 1 and 100 are accepted.");
// }

// switch (true) {
//     case (score >= 90):
//         console.log("You received an A");
//         break;
//     case (score >= 80):
//         console.log("You received a B");
//         break;
//     case (score >= 70):
//         console.log("You received a C");
//         break;
//     case (score >= 60):
//         console.log("You received a D");
//         break;
//     default:
//         console.log("You received an F");
// }
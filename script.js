// Variables
let name = "Joshua";
let age = 20;
let isStudent = true;
output += `Name: ${name}, Age: ${age}, Student: ${isStudent}\n`;

// Loops
for (let i = 1; i <= 10; i++) {
    output += i + "\n";
}

// Functions
function addNumbers(a, b) {
    return a + b;
}
output += addNumbers(5, 10) + "\n";

// Conditionals
if (age >= 18) {
    output += "Adult\n";
} else {
    output += "Minor\n";
}

// Display the output in the HTML
document.getElementById('console-output').innerText = output;

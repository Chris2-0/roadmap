console.log("Welcome to Christian's website!");

let visitorName = prompt("Please enter your name:");
alert("Hello, " + visitorName + "!👋");

let score = 0;

let answer1= prompt("What does HTML stand for?");
if (answer1.toLowerCase() === "hypertext markup language") {
    alert("Correct!👍");
    score++;
} else {
    alert("Incorrect 👎. Its Hypertext Markup Language");
}

let answer2 = prompt("What language makes websites interactive?");
if (answer2.toLowerCase() === "javascript") {  
    alert("Correct!👍");
    score++;
}else {
    alert("Incorrect 👎. Its JavaScript");
}

alert("You scored "+ score + " out of 2! 🎉");
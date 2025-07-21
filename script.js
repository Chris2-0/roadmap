console.log("Welcome to Christian's website!");

/*let visitorName = prompt("Please enter your name:");
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

alert("You scored "+ score + " out of 2! 🎉");*/

const button = document.getElementById("changeTextBtn");
const text = document.getElementById("demoText");

button.addEventListener("click", function() {
    text.innerText = "You clicked the button! 🎉";
});

const toggleModeBtn = document.getElementById("toggleMode");
const body = document.body;

toggleModeBtn.addEventListener("click", function() {
    body.classList.toggle("dark-mode");
});
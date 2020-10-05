// Exercise 1.0
// ------------
console.log("exercise-1");

const body = document.querySelector("body");
document.querySelector("body").addEventListener("click", textDisplay);

function textDisplay() {
  body.innerText = "You win!";
}

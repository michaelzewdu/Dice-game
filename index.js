alert("Welcome to Dicee game! lets get you started");
var playerOneName = prompt("Player one enter your name");
var playerTwoName = prompt("Player two enter your name");


var randomNo1 = Math.random() * 6;
var randomNo2 = Math.random() * 6;

if (randomNo1 < 1) {
  randomNo1 = 1;
} else {
  randomNo1 = Math.floor(randomNo1);
}

if (randomNo2 < 1) {
  randomNo2 = 1;
} else {
  randomNo2 = Math.floor(randomNo2);
}

console.log(randomNo1);
console.log(randomNo2);

if (playerOneName != null) {
  document.querySelector("p.playerOne").innerHTML = playerOneName.toString();
}
if (playerTwoName != null) {
  document.querySelector("p.playerTwo").innerHTML = playerTwoName.toString();
}


document.getElementsByClassName("img1")[0].attributes.src.value = "images/dice" + randomNo1 + ".png";
document.getElementsByClassName("img2")[0].attributes.src.value = "images/dice" + randomNo2 + ".png";

if (randomNo1>randomNo2){
  document.querySelector('h3').innerHTML = playerOneName.toString() + " wins";
} else if (randomNo2 > randomNo1) {
  document.querySelector('h3').innerHTML = playerTwoName.toString() + " wins";
} else {
  document.querySelector('h3').innerHTML = " That was a tie. Want to go for another round?";

}

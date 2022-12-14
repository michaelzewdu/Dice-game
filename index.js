
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

document.getElementsByClassName("img1")[0].attributes.src.value = "images/dice"+randomNo1+".png";
document.getElementsByClassName("img2")[0].attributes.src.value = "images/dice"+randomNo2+".png";

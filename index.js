// Random number generation
const randomNumber1 = Math.floor(Math.random() * 6 + 1);
const randomNumber2 = Math.floor(Math.random() * 6 + 1);

const randomDiceImage1 = "dice" + randomNumber1 + ".png";
const randomDiceImage2 = "dice" + randomNumber2 + ".png";

const randomImageSource1 = "images/" + randomDiceImage1;
const randomImageSource2 = "images/" + randomDiceImage2;

const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");

image1.setAttribute("src", randomImageSource1);
image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "Player 2 wins!";
} else {
  document.querySelector("h1").textContent = "Draw!";
}

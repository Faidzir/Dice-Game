function randomImage1(){
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

  var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

  var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

  var image1 = document.querySelectorAll("img")[0];

  console.log(randomNumber1);

  image1.setAttribute("src", randomImageSource);
  return randomNumber1;
}



function randomImage2(){
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  return randomNumber2;

}

function checkWin(num1,num2){
  //If player 1 wins
  if (num1> num2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  }
  else if (num2 > num1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

document.querySelector("button").addEventListener("click",function(){
  console.log("click");

  var num1 =  randomImage1();
 
  var num2 = randomImage2();
  // console.log(num1 + " " + num2);
  checkWin(num1,num2);

});
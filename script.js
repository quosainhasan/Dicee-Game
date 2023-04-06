var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



function dicee(player1, player2){
    if(player1 === player2){
        document.querySelector("h5").textContent = "⚔ When the dust has settled and the cheers have faded, we're left with a hard-earned tie."
        console.log("You both got same number!");
    };
    if(player1 > player2){
        document.querySelector("h5").textContent = "All Hail the Champion Player 1 🎉🎉";
    }
    else{
        document.querySelector("h5").textContent = "All Hail the Champion Player 2 🎉🎉";
    }
};

dicee(randomNumber1, randomNumber2);
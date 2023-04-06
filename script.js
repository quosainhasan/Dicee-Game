var p1 = prompt("Player 1 name: ");
var p2 = prompt("Player 2 name: ");

document.querySelector(".p1").textContent = p1;
document.querySelector(".p2").textContent = p2;

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

console.log("Player 1: " + randomNumber1);
console.log("Player 2: " + randomNumber2);

function image1(number1){
    if(number1 === 1){
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    }

    if(number1 === 2){
        document.querySelector(".img1").setAttribute("src", "images/dice2.png");
    };

    if (number1 === 3){
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");
    };

    if(number1 === 4){
        document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    };

    if(number1 === 5){
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");
    };
};

function image2(number2){
    if(number2 === 1){
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    }

    if(number2 === 2){
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
    };

    if (number2 === 3){
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");
    };

    if(number2 === 4){
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    };

    if(number2 === 5){
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    };
};

function dicee(player1, player2){
    if(player1 === player2){
        document.querySelector("h5").textContent = "⚔ When the dust has settled and the cheers have faded, we're left with a hard-earned tie."
        console.log("You both got same number!");
    };
    if(player1 > player2){
        document.querySelector("h5").textContent = "All Hail the Champion " + p1 + " 🎉🎉";
    }
    else{
        document.querySelector("h5").textContent = "All Hail the Champion " + p2 + " 🎉🎉";
    }
};

dicee(randomNumber1, randomNumber2);

image1(randomNumber1);

image2(randomNumber2);

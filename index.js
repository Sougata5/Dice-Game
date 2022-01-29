// var randomNumber1 = Math.floor(Math.random()* 6)+1;
// // console.log(randomNumber1);
// document.getElementsByClassName("img1")[0].setAttribute("src","images/dice"+randomNumber1+".png");

// var randomNumber2 = Math.floor(Math.random()*6)+1;
// document.getElementsByClassName("img2")[0].setAttribute("src","images/dice"+randomNumber2+".png");

// if(randomNumber1 > randomNumber2){
//     document.querySelector("h2").innerHTML = "Player 1 Wins!";
// }
// else if ( randomNumber2 > randomNumber1){
//     document.querySelector("h2").innerHTML = "Player 2 Wins!";
// }
// else{
//     document.querySelector("h2").innerHTML = "DRAW!";
// }

document.querySelector(".start").addEventListener("click", function(){
    var dice1 = Math.floor(Math.random()* 6) + 1;
    var dice2 = Math.floor(Math.random()* 6) + 1;

    document.querySelector(".img1").setAttribute("src","images/dice"+dice1+".png");
    document.querySelector(".img2").setAttribute("src","images/dice"+dice2+".png");

    if(dice1 > dice2){
        document.querySelector("h2").innerHTML = "Player 1 Wins!🎉"
    }
    else if(dice2 > dice1){
        document.querySelector("h2").innerHTML = "🎉Player 2 Wins!"
    }
    else {
        document.querySelector("h2").innerHTML = "DRAW!😫"
    }

});
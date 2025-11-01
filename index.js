var imagesLinks = ["images/dice1.png", 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];

function randDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function compare(p1, p2) {
    if (p1 > p2)
        return "Player 1 Win!";
    else if (p2 > p1)
        return "Player 2 Win!";
    else
        return "Draw!";
}

// window.onload = function () {
// if (localStorage.getItem('visited')) {
var player1Dice = randDice();
var player2Dice = randDice();

document.getElementsByClassName("img1")[0].setAttribute("src", imagesLinks[player1Dice - 1]);
document.getElementsByClassName("img2")[0].setAttribute("src", imagesLinks[player2Dice - 1]);
var result = compare(player1Dice, player2Dice);
document.querySelector("h1").textContent = result;
// } else {
//     localStorage.setItem('visited', 'yes');
// }
// };
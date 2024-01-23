function rollDice() {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById('dice1').innerText = dice1;
    document.getElementById('dice2').innerText = dice2;

    var sum = dice1 + dice2;

    if (sum === 7 || sum === 11) {
        document.getElementById('result').innerText = `You win! Sum is ${sum}`;
    } else {
        document.getElementById('result').innerText = `You lose! Sum is ${sum}`;
    }
}


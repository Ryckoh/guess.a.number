let randomNumber;
let attempts;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('feedback').innerText = '';
    document.getElementById('attempts').innerText = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('restartGame').style.display = 'none';
}

function submitGuess() {
    const guess = Number(document.getElementById('guessInput').value);
    attempts++;

    if (guess < 1 || guess > 100) {
        document.getElementById('feedback').innerText = 'Please enter a number between 1 and 100.';
    } else if (guess < randomNumber) {
        document.getElementById('feedback').innerText = 'Too low! Try again.';
    } else if (guess > randomNumber) {
        document.getElementById('feedback').innerText = 'Too high! Try again.';
    } else {
        document.getElementById('feedback').innerText = `Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts.`;
        document.getElementById('restartGame').style.display = 'inline';
    }

    document.getElementById('attempts').innerText = `Attempts: ${attempts}`;
}

document.getElementById('submitGuess').addEventListener('click', submitGuess);
document.getElementById('restartGame').addEventListener('click', startGame);

window.onload = startGame;
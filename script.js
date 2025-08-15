let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
function checkGuess() {
    let guess = document.getElementById("guess").value;
    let message = document.getElementById("message");
    let attemptsDisplay = document.getElementById("attempts");

    if (!guess || guess < 1 || guess > 100) {
        message.textContent = "⚠️ Please enter a valid number between 1 and 100!";
        return;
    }

    attempts++;

    if (guess == randomNumber) {
        message.textContent = `🎉 Correct! The number was ${randomNumber}`;
        message.style.color = "green";
        document.getElementById("resetBtn").style.display = "inline-block";
    } else if (guess > randomNumber) {
        message.textContent = "📉 Too high! Try again.";
        message.style.color = "red";
    } else {
        message.textContent = "📈 Too low! Try again.";
        message.style.color = "red";
    }

    attemptsDisplay.textContent = `Attempts: ${attempts}`;
}
function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "";
    document.getElementById("guess").value = "";
    document.getElementById("resetBtn").style.display = "none";
}
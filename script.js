document.getElementById("checkBtn").addEventListener("click", function() {
    const guess = parseInt(document.getElementById("guessInput").value);
    const result = document.getElementById("result");

    if (isNaN(guess)) {
        result.textContent = "Please enter a valid number!";
        result.style.background = "#ffcccc";
        result.style.color = "#a10000";
        return;
    }

    if (guess === randomNumber) {
        result.textContent = "🎉 Correct! You guessed the number!";
        result.style.background = "#d4fcd4";
        result.style.color = "#006400";
    } else if (guess < randomNumber) {
        result.textContent = "📉 Too low! Try again.";
        result.style.background = "#fff0b3";
        result.style.color = "#b36b00";
    } else {
        result.textContent = "📈 Too high! Try again.";
        result.style.background = "#fff0b3";
        result.style.color = "#b36b00";
    }
});

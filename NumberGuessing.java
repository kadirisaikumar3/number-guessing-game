import java.util.Scanner;
import java.util.Random;

public class NumberGuessing {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        int numberToGuess = random.nextInt(100) + 1;
        int attempts = 0;
        int guess = 0;

        System.out.println("🎯 Welcome to the Number Guessing Game!");
        System.out.println("Guess a number between 1 and 100:");

        while (guess != numberToGuess) {
            guess = scanner.nextInt();
            attempts++;

            if (guess < 1 || guess > 100) {
                System.out.println("⚠️ Please enter a valid number between 1 and 100!");
            } else if (guess < numberToGuess) {
                System.out.println("📈 Too low! Try again:");
            } else if (guess > numberToGuess) {
                System.out.println("📉 Too high! Try again:");
            } else {
                System.out.println("🎉 Correct! The number was " + numberToGuess);
                System.out.println("You guessed it in " + attempts + " attempts.");
            }
        }

        scanner.close();
    }
}
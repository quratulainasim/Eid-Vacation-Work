// Q7: Write a simple number guessing game. Provide a selected number and a guess. Based on those numbers, give players clues if their guess is higher, lower, or correct.

import inquirer from "inquirer";

async function guessNumberGame() {
    const randomNumber = Math.floor(Math.random() * 5 + 1);

    const answers = await inquirer.prompt([
        {
            name: "userGuessedNumber",
            type: "number",
            message: "Please guess a number between 1-5:",
        },
    ]);

    const userGuessedNumber = answers.userGuessedNumber;

    if (randomNumber === userGuessedNumber) {
        console.log("Congratulations! Your guess is correct.");
    } else if (randomNumber > userGuessedNumber) {
        console.log("Your number is lower.");
    } else {
        console.log("Your number is higher.");
    }
}

guessNumberGame();



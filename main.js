#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Display a colourfull welcome message
console.log(chalk.bold.cyan("\n \t\t Welcome to 'Alishba Meraj' - word counter Application\n\t"));
console.log("-*".repeat(40));
// prompt the user to enter a sentence
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);
//  Trimming the sentence and spliting it into words based on "spaces"
let words = answer.sentence.trim().split(" ");
// analysis of user input sentence
console.log("-".repeat(70));
console.log(chalk.bold.italic("- sentence words:"));
console.log(words);
console.log(chalk.bold(`\n- word count: ${chalk.bold.magenta(words.length)}`));
console.log("-".repeat(70));
console.log(chalk.bold.cyan("\n\n\tThank you for using our Word counter Application . Have a great day!\n\n\t"));

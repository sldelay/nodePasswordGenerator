const inquirer = require("inquirer");
const Generator = require("./generator");
const clc = require("cli-color");

class Controller {

    userChoice() {
        inquirer.prompt([
            {
                type: "input",
                name: "length",
                message: "Please pick a password length between 8 and 128"
            },
            {
                type: "checkbox",
                name: "characters",
                message: "Which characters would you like included?",
                choices: [
                    {
                        name: 'Uppercase'
                    },
                    {
                        name: 'Lowercase'
                    },
                    {
                        name: 'Special'
                    },
                    {
                        name: 'Numbers'
                    }
                ]
            }
        ]).then(options => {

            const generator = new Generator(options)
            let password = generator.genereratePassword()

            console.log(`${clc.green("Here is your new password!")} ${password}`)
            


        })
    }

}

module.exports = Controller;
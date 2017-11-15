const chalk = require('chalk');

// console.log(chalk.yellow('Hello world!'));

const changeColor = str => {
    console.log(chalk.blue(str))
}

changeColor('Hello World')
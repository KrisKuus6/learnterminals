import chalk from 'chalk';
import boxen from 'boxen';
function write(text) {
    process.stdout.write(text);
}
console.log(chalk.bgGreen.green('Hello'), {padding: 2, margin: 15, borderStyle:'arrow', borderColor: 'redBright'});

console.log(boxen(chalk.cyan('kris'), {padding: 2, margin: 2, borderStyle:'arrow', borderColor: 'blue'}));

console.log(boxen(chalk.bgCyan.strikethrough('kirss'), {padding: 2, margin: 1, borderStyle:'bold', borderColor: 'blue' }));

console.log(boxen(chalk.bgRed.gray('fortnite'), {padding: 1, margin: 2, title: 'Kuusk', titleAlignment: 'center', borderColor: 'redBright'}));

console.log(boxen(chalk.bgGreen.inverse('Kuus'), {padding: 1, margin: 2, borderStyle:'arrow' , borderColor:'yellowBright'}));

console.log(boxen(chalk.cyan('glhf'), {padding: 1, margin: 2, borderStyle: 'classic'}));
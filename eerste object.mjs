import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let object = {
    naam: 'Jente',
    lievelingsFilm: 'Pirates of the Caribbean: The Curse of the Black Pearl',
    lievelingsGame: 'cities skylines II'
}; 

console.log(object);

process.exit();
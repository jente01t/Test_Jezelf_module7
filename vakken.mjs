import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let vakkenDitSemester = {
    ITEssentials: {
        naam: "IT Essentials",
        docent: "Geert Coulommier"
    },
    WebEssentials: {
        naam: "Web Essentials",
        docent: "Docent naam 2"
    },
    NetworkEssentials: {
        naam: "Network Essentials",
        docent: "Tom Aertssens"
    },
};



console.log(vakkenDitSemester.ITEssentials.naam);

process.exit();
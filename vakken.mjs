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
        docent: "Tom Aertssens"
    },
    NetworkEssentials: {
        naam: "Network Essentials",
        docent: "naamDocent"
    },
    BusinessCommunication: {
        naam: "Business Communication TI1",
        academiejaar: "naamDocent"
    },
    BusinessITEssentials: {
        naam: "Business IT Essentials TI1",
        academiejaar: "naamDocent"
    },
    DataEssentials: {
        naam: "Data Essentials TI1",
        academiejaar: "naamDocent"
    },
    DesktopOS: {
        naam: "Desktop OS TI1",
        academiejaar: "naamDocent"
    },
    iTalent1: {
        naam: "iTalent 1 TI1",
        academiejaar: "naamDocent"
    },
    ProgrammingEssentials1: {
        naam: "Programming Essentials 1 TI1",
        academiejaar: "naamDocent"
    },
    ProgrammingEssentials2: {
        naam: "Programming Essentials 2 TI1",
        academiejaar: "naamDocent"
    },
    ProgrammingProject: {
        naam: "Programming Project TI1",
        academiejaar: "naamDocent"
    },
    SoftwareDesignEssentials: {
        naam: "Software Design Essentials TI1",
        academiejaar: "naamDocent"
    },
    WebAdvancedTI1: {
        naam: "Web Advanced TI1",
        academiejaar: "naamDocent"
    },
};


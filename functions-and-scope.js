// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

// const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

// INPUT
// - De cijfers van de studenten
// OUTPUT
// - Aantal cijfers die cum laude zijn, oftewel hoger zijn dan 7
// STAPPENPLAN
// [-] maak variable die het aantal cijfers > 7 uit de array opslaat
// [-] maak een for loop die checkt of er cijfers in de array zijn > 7 en die dan als som opslaat in de aangemaakte variabele
// [-] log de uitkomst van de aangemaakte variabele in de terminal

const allGradesA = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
let sumOfCumLaudeGrades = 0;
for (let i = 0; i < allGradesA.length; i++) {
    sumOfCumLaudeGrades += allGradesA[i] > 7;
}
console.log(sumOfCumLaudeGrades);

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function cumLaude(grades) {
    let sumOfCumLaudeGrades = 0;
    for (let i = 0; i < grades.length; i++) {
        sumOfCumLaudeGrades += grades[i] > 7;
    }
    return sumOfCumLaudeGrades
}

console.log(cumLaude([[6, 4, 5]]));

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

// INPUT
// de cijfers van de studenten
// OUTPUT
// gemiddelde van de waarde (dus niet het aantal) van de cijfers dat is opgegeven
// STAPPENPLAN
// [-] Kopier de all grades variable van vorig antwoord en pas de naam van de variabele ter voorkoming van duplicaat error
// [-] Kopieer de sum variable van vorig antwoord en pas de naam van de variabele aan ter voorkoming van duplicaat error
// [-] Kopieer for loop van vorig antwoord, pas aan met nieuwe variabelen namen, haal check > 7 weg
// [-] Maak variabele aan die gemiddelde waarde opslaat van de opgegeven cijfers
// gemiddelde waarde berekenen is som van alle waardes gedeeld door het aantal waardes (length) in de array
// [-] log de variabele gemiddelde waarde in de console.log

const allGradesB = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
let sumOfAllGrades = 0;
for (let i = 0; i < allGradesB.length; i++) {
    sumOfAllGrades += allGradesB[i];
}

let averageGrade = sumOfAllGrades / allGradesB.length;
console.log(averageGrade);


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function averageGrades(grades) {
    let sumOfAllGrades = 0;
    for (let i = 0; i < grades.length; i++) {
        sumOfAllGrades += grades[i];
    }
    return sumOfAllGrades / grades.length;
}

console.log(averageGrades([8, 9, 4, 6, 10]));

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

function averageGradeTwoDecimals(grades) {
    let sumOfAllGrades = 0;
    for (let i = 0; i < grades.length; i++) {
        sumOfAllGrades += grades[i];
    }
    const averageGrade = sumOfAllGrades / grades.length;
    return Math.round((averageGrade + Number.EPSILON) * 100) / 100;
}

console.log(averageGradeTwoDecimals([9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6]));


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9

const allGradesC = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
let highestGrade = 0;

for (let i = 0; i < allGradesC.length; i++) {
    if (highestGrade < allGradesC[i]) {
        highestGrade = allGradesC[i];
    }
}

console.log(highestGrade);

/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function highestGradeD(grades) {
    let highestGrade = 0;

    for (let i = 0; i < grades.length; i++) {
        if (highestGrade < grades[i]) {
            highestGrade = grades[i];
        }
    }
    return highestGrade;
}

console.log(highestGradeD([8, 9, 4, 6, 10]));


// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistration = true;

let age = 50;

if (age > 18 && earlyRegistration === true) {
    console.log(raceNumber + 1000);
}

if (age > 18 && earlyRegistration === true) {
    console.log(`${raceNumber} will race at 9:30 am.`); 
} else if (age > 18 && earlyRegistration === false) {
    console.log(`${raceNumber} will race at 11 am.`);
} else if (age < 18) {
    console.log(`${raceNumber} will race at 12:30 pm.`); 
}

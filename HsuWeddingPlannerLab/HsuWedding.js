let guestInput = prompt ("How many guests do you have?");
let tableInput = prompt ("How many tables do you want?");

let numberOfGuests = parseInt(guestInput);
let numberOfTables = parseInt(tableInput);

function weddingDistribution(){
let guestPerFullTable = Math.ceil(numberOfGuests/numberOfTables);
let remainingGuestPerTable = Math.floor(numberOfGuests/numberOfTables);
let numberOfFullTable = numberOfGuests % numberOfTables
let remainingTables = numberOfTables - numberOfFullTable
    return {
                numberOfGuests: numberOfGuests,
                numberOfTables: numberOfTables,
                guestPerFullTable: guestPerFullTable,
                remainingGuestPerTable: remainingGuestPerTable,
                numberOfFullTable: numberOfFullTable,
                remainingTables: remainingTables
            };
}

if (isNaN(numberOfGuests) || isNaN(numberOfTables) || numberOfGuests < 1 || numberOfTables < 1) {
            alert("Invalid input. Please enter valid positive numbers.");
        } else {
            let result = weddingDistribution();
alert("Your " + result.numberOfGuests + " guests will be seated as follows: " + result.numberOfFullTable + " tables of " + result.guestPerFullTable + ", and " + result.remainingTables + " tables of " + result.remainingGuestPerTable + ".");}
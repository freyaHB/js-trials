// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map([
    ['home', '510-867-5309'],
    [ 'mobile', '415-555-1212'],
    [ 'business', '415-123-4567']
    ]);

// Add some phone numbers to our map

function showAccountHolder(accountHolder, accountNumber, businessName) {
    console.log("Account Holder Name:"+accountHolder);
    console.log("Account Holder Number:" +accountNumber);
    console.log("Busines Name:" +businessName);
    }

// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 

// Add function to print all addresses, including a header

function showAddress(addresses) {
    console.log("Addresses:");
    for (let address of addresses) {
        console.log(address);
    }
}


// Add function to print phone types and numbers

function showPhoneNums(phoneNumbers) {
    console.log("Phone Numbers:");
    for (let number of phoneNumbers) {
        console.log(number[0]+":"+ number[1]);
           }

}

// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions

const transactions = new Map();

// Add function to add transactions

function addTransactions(date, amount) {
    transactions.set(date, amount);
}

addTransactions("May-2", "-500");
addTransactions("May-13", "+1200");
addTransactions("May-15", "-100");
addTransactions("May-21","-359");
addTransactions("May-29", "+2200");

// Use the function to add transactions


// Add function to show balance status

function showBalanceStatus(balanceAmount) {

    if (balanceAmount < 0){
        console.log("YOU ARE OVERDRAWN"); 
    } else if (balanceAmount < 20){
        console.log("Warning: You are close to zero balance");
    } else {
        console.log("Thank you for your business.");
    }
}
// Add function to show transactions

function showTransactions(transactions, starting_balance) {
    let Balance=starting_balance;
    console.log(starting_balance);
    for (let transaction of transactions){
        if (transaction[1][0] ==="-") {
            console.log(transaction[0]+" "+"withdrawal "+ transaction[1] );
        } else {
            console.log(transaction[0]+" "+"deposit "+ transaction[1]);

        }
    console.log(Balance);
    Balance=Balance+transaction[1]
    }
    console.log("Balance is "+ Balance);
}

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours





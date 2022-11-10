//logical and (&&)

let highIncome = true;
let goodCreditScore = true;

let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);



//logical OR (||)
let HighIncome = true;
let GoodCreditScore = true;

let EligibleForLoan = HighIncome || GoodCreditScore;
console.log(EligibleForLoan);
let applicationRefused = !EligibleForLoan
console.log('Application Refused', applicationRefused)

//changing variables
let a = 'red';
let b = 'blue';

let c = a;// copy the initial value of a to c
a = b;// equate a to b to change the value of a
b = c;//let be take the value that had earlier on been copied to c.

console.log(a);
console.log(b);
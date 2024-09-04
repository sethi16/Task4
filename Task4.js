
function myMaths(n,r,L){
    //A = amount to pay each month
    //L = loan amount (or principal)
    //r = interest rate (per year as a decimal - or divide by 
    //to get the rate per month)
    //n = number of payments
    // All the transactions are happening in dollar currency
    //Tom’s house will cost $300,000.
    // He needs to pay a deposit of 10% and will pay the remaining 90% over 30 years at 8% per annum.
    return  A= L*r/(1-(1+r)**-n);
}
 
//So Tom needs to find just under $2000 per month to buy his house.
// Of course, he won’t be paying rent so the extra amount is not too bad, he figures.
function myLove(n,r,L,p){
    let Balance; 
    return  Balance = L * ((1 - (1 + r) ** (p - n)) / (1 - (1 + r) ** (-n)));
     //Six Months Later Tom has been paying off his pride and joy for 6 months.
    //He has paid a total of $1981.16×6=$11886.96.
}

let n=30*12;
let r=0.08/12;
let L=270000;
let p=6; //Number of payments
const Maths=  myMaths(n,r,L);
const Love =  myLove(n,r,L,p);
//He is shocked to find that he still owes $268,894.74. 
//With mortgages, the amount you are paying early in the loan is the interest, 
//and very little is coming off the principal.

console.log("Amount to be paid per month=" +"$"+ Maths.toFixed(3));
console.log("Amount left after paying six installments=" +"$"+  Love.toFixed(3));


 



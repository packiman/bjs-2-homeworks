"use strict"
function solveEquation(a, b, c) { 
    if(a == 0) {
        return false;
    }
    let res = [];
    let D = Math.pow(b, 2) - 4 * a * c;
    console.log('D = ' + D);
    if(D < 0) {
        console.log("Корней нет");
    }
    if(D == 0) {
        console.log("Один корень");
        res.push(-b / (2 * a));
    }
    if(D > 0) {
        console.log("Два корня");
        res.push((-b + Math.sqrt(D)) / (2 * a));
        res.push((-b - Math.sqrt(D)) / (2 * a));
    }
    return res;
}
console.log(solveEquation(1,1,-56));



function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }
 let interestRate = (percent / 100) / 12;
 let residualAmount = amount - contribution;
 let monthlyPayment = residualAmount * (interestRate + (interestRate / (((1 + interestRate)**countMonths) - 1)));
 let sum = +(monthlyPayment * countMonths).toFixed(2);
 return sum;
}
console.log("Сумма полной выплаты: " + calculateTotalMortgage(10,1000,50000,12));
"use strict"
function solveEquation(a, b, c) { 
    if(a == 0) {
        return false;
    }
    let res = [];
    let D = b * b - 4 * a * c;
    console.log('D = ' + D);
    if(D < 0) {
        return false;
    }
    res['Дискриминант'] = D;
    if(D == 0) {
        res["Квадратные корни"] = (-b + Math.sqrt(D)) / (2 * a);
    }
    if(D > 0) {
        res.push((-b + Math.sqrt(D)) / (2 * a));
        res.push((-b - Math.sqrt(D)) / (2 * a));
    }
    return res;
}



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
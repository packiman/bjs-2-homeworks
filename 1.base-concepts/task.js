// Задание 1

"use strict"
function solveEquation(a, b, c) { 
    if(a == 0)
        return false;
    let res = {};
    let D = b * b - 4 * a * c;
    console.log('D = ' + D);
    if(D < 0)
        return false;
    res['Дискриминант'] = D;
    if(D == 0)
        res["Квадратные корни"] = (-b + Math.sqrt(D)) / (2 * a);
    else if(D > 0){
        let tmp = [];
        tmp.push((-b + Math.sqrt(D)) / (2 * a));
        tmp.push((-b - Math.sqrt(D)) / (2 * a));
        res["Квадратные корни"] = tmp;
    }
    return res;
}
console.log(solveEquation(1,1,-56));


// Задание 2

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
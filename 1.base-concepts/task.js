"use strict";

function solveEquation(a, b, c) {
  const d = b ** 2 - 4 * a * c;
  
  if (d < 0) {
    return [];
  }
  
  if (d === 0) {
    return [-b / (2 * a)];
  }
  
  return [
    (-b + Math.sqrt(d)) / (2 * a),
    (-b - Math.sqrt(d)) / (2 * a)
  ];
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyRate = percent / 100 / 12;
  const loanBody = amount - contribution;
  
  if (loanBody <= 0) {
    return 0;
  }
  
  const monthlyPayment = loanBody * (
    monthlyRate + 
    (monthlyRate / ((1 + monthlyRate) ** countMonths - 1))
  );
  
  const totalAmount = monthlyPayment * countMonths;
  
  return Math.round(totalAmount * 100) / 100;
}

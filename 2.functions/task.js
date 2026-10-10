'use strict';

function getArrayParams(...arr) {
  if (arr.length === 0) {
    return { min: 0, max: 0, avg: 0 };
  }

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((acc, num) => acc + num, 0);
  const avg = Number((sum / arr.length).toFixed(2));

  return { min, max, avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr.reduce((sum, num) => sum + num, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  if (countEvenElement === 0) {
    return 0;
  }

  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const workerResult = func(...arrOfArr[i]);

    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    }
  }

  return maxWorkerResult;
}

// 1.	Найти минимальный элемент 
function findMinElement (arr) {
  let arrLength = arr.length;
  let minValue = Infinity;

  while (arrLength--) {
    if (arr[arrLength] < minValue) {
      minValue = arr[arrLength];
    }
  }
  return minValue;
}

// 2.	Найти максимальный элемент массива
function findMaxElement (arr) {
  let arrLength = arr.length;
  let maxValue = -Infinity;

  while (arrLength--) {
    if (arr[arrLength] > maxValue) {
      maxValue = arr[arrLength];
    }
  }
  return maxValue;
}

// 3.	Найти индекс минимального элемента массива
function findIndexMin (arr) {
  let indexMinElement = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[indexMinElement]) {
      indexMinElement = i;
    }
  }
  return indexMinElement;
}

// // 4.	Найти индекс максимального элемента массива
function getIndexMax (arr) {
  let indexMaxElement = 0;

  for (i = 1; i < arr.length; i++) {
    if (arr[i] > arr[indexMaxElement]) {
      indexMaxElement = i;
    }
  }
  return indexMaxElement;
}

// // 5.	Посчитать сумму элементов массива с нечетными индексами
function getSumOddIndex (arr) {
  let sumOddIndex = 0;

  for (i = 1; i < arr.length; i++) {
    if (i % 2 === 1) {
      sumOddIndex += arr[i];
    }
  }
  return sumOddIndex;
}

// // 6.	Сделать реверс массива (массив в обратном направлении)
function reverseArr (arr) {
  for (i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      let k = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = k;
    }
  }
  return arr;
}
 // 7.	Посчитать количество нечетных элементов массива
function countOddElements (arr) {
  let quantumOddIndex = 0;

  for (i = 1; i < arr.length; i++) {
    if (i % 2 === 1) {
      quantumOddIndex++;
    }
  }
  return quantumOddIndex;
}

// // 8.	Поменять местами первую и вторую половину массива, например, для массива
function changeHalf (arr) {
  let halfLength = Math.floor(arr.length / 2);
  let centerElement = halfLength + (arr.length % 2);

  for (i = 0; i < halfLength; i++) {
    let c = arr[i];
    arr[i] = arr[centerElement + i];
    arr[centerElement + i] = c;
  }
  return arr;
}

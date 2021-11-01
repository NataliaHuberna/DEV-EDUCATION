let arr = [2, 5, 3, 1, 4];

// 1.	Найти минимальный элемент массива
let arrLength = arr.length;
let minValue = Infinity;
while (arrLength--) {
  if (arr[arrLength] < minValue) {
    minValue = arr[arrLength];
  }
}
console.log('[minValue]', minValue);

// 2.	Найти максимальный элемент массива
arrLength = arr.length;
let maxValue = -Infinity;
while (arrLength--) {
  if (arr[arrLength] > maxValue) {
    maxValue = arr[arrLength];
  }
}
console.log('[maxValue]', maxValue);

// 3.	Найти индекс минимального элемента массива
let indexMinElement = 0;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[indexMinElement]) {
        indexMinElement = i;
    }
}
console.log('[indexMinElement]', indexMinElement);

// 4.	Найти индекс максимального элемента массива 
let indexMaxElement = 0;
for (i = 1; i < arr.length; i++) {
  if (arr[i] > arr[indexMaxElement]) {
    indexMaxElement = i;
  }
}
console.log('[indexMaxElenent]', indexMaxElement);

// 5.	Посчитать сумму элементов массива с нечетными индексами
let sumOddIndex = 0;
for (i = 1; i < arr.length; i++) {
    if (i % 2 === 1) {
        sumOddIndex += arr[i];
    }
}
console.log("[sumOddIndex]", sumOddIndex);

// 6.	Сделать реверс массива (массив в обратном направлении)
let j
for (i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
        let k = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = k;
    }    
}
console.log('[arr]', arr);

// 7.	Посчитать количество нечетных элементов массива
let quantumOddIndex = 0;
for (i = 1; i < arr.length; i++) {
  if (i % 2 === 1) {
    quantumOddIndex ++;
  }
}
console.log('[quantumOddIndex]', quantumOddIndex);

// 8.	Поменять местами первую и вторую половину массива, например, для массива 
arr = [1, 6, 5, 3, 4]
let halfLength = Math.floor(arr.length / 2);
let centerElement = halfLength + (arr.length % 2);
for (i = 0; i < halfLength; i++) {
    let c = arr[i];
    arr[i] = arr[centerElement + i];
    arr[centerElement + i] = c;
}
console.log('[arr]', arr);
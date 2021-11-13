// 1.	Найти сумму четных чисел и их количество в диапазоне от 1 до 99
function getSumAndCount () {
  let sum = 0;
  let count = 0;
  for (let i = 1; i < 100; i++) {
    if (i % 2 === 0) {
      sum += i;
      count++;
    }
  }
  return {
    'sum': sum,
    'count': count,
  }
}
 
// 2.	Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

function checkNumber (num) {
  let marker = "Prime number";
  for (let j = 2; j < num; j++) {
    if (num % j == 0) {
      marker = "Composite number";
    }
  }
  return marker;
}

// 3.	Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)
function getSqrt (num) {
  for (i = 1; i <= num; i++) {
    if (i * i === num) {
      return i;
    } 
  }
  return "Number has no whole square root";
}

// 4.	Вычислить факториал числа n. n! = 1*2*…*n-1*n;
function countFactorial (num) {
  let factorial = 1;
  for (i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

// 5.	Посчитать сумму цифр заданного числа
function countSumOfNums (myNumber) {
  sum = 0;
  let stringSum = String(myNumber);
  for (i = 0; i < stringSum.length; i++) {
    sum += Number(stringSum[i]);
  }
  return sum;
}

// 6.	Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.

function getMirrow (myNumber) {
  let result = 0;
  while (myNumber > 0) {
    let rank = myNumber % 10;
    result = result * 10 + rank;
    myNumber = parseInt(myNumber / 10);
  }
  return result;
}

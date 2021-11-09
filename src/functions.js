// 1.	Получить строковое название дня недели по номеру дня.
function getWeekDay() {
    let dayNumber = new Date();
       let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = dayNumber.getDay();
    return days[day];
}
console.log(getWeekDay());

// 2.	Найти расстояние между двумя точками в двухмерном декартовом пространстве.
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getDistance(point1, point2) {
    return Math.sqrt((point2.x - point1.x) ** 2 + (point2.y - point1.y) ** 2);
  }
}
const point = new Point();
console.log(point.getDistance(new Point(7, 2), new Point(1, 2)));

// 3.	Вводим число(0-999), получаем строку с прописью числа.

function convertMyNumber(myNumber) {
  const stringBelowTwenty = [
    "один",
    "два",
    "три",
    "четыре",
    "пять",
    "шесть",
    "семь",
    "восемь",
    "девять",
    "десять",
    "одиннадцать",
    "двенадцать",
    "тринадцать",
    "четырнадцать",
    "пятнадцать",
    "шестнадцать",
    "семнадцать",
    "восемнадцать",
    "девятнадцать"
  ];
  const stringTens = [
    "десять",
    "двадцать",
    "тридцать",
    "сорок",
    "пятьдесят",
    "шестьдесят",
    "семьдесят",
    "восемьдесят",
    "девяносто"
  ];
  const stringHundreds = [
    "сто",
    "двести",
    "триста",
    "четыреста",
    "пятьсот",
    "шестьсот",
    "семьсот",
    "восемьсот",
    "девятьсот"
  ];

      
  if (myNumber < 0 || myNumber > 1000) {
    return "Неверный диапазон";
  }
  
  if (myNumber < 20) {
    return stringBelowTwenty[myNumber - 1];
  }
  
  if (myNumber > 20 && myNumber < 100) {
    let high = myNumber / 10;
    let low = myNumber % 10;
    let text = stringTens[Math.floor(high) - 1];
    if (low != 0) {
      text = text + " " + stringBelowTwenty[low - 1];
    }
    return text;
  }

  if (myNumber === 100) {
    return stringHundreds[0];
  }

  if (myNumber > 100 && myNumber < 1000) {
    let hundreds = Math.floor (myNumber / 100);
    let dozens = (myNumber / 10) % 10;
    let units = Math.floor (myNumber % 10);
    let text = stringHundreds[hundreds - 1];

    if (Math.floor(dozens) === 1 && units !== 0) {
 
      text = text + " " + stringBelowTwenty[(Math.round(dozens * 10)) - 1];
    }

    if (Math.floor(dozens) >= 2 && units === 0) {
        text = text + " " + stringTens[Math.floor(dozens) - 1];
      }

    if (Math.floor(dozens) === 0 && units !== 0) {
      text = text + " " + stringBelowTwenty[units - 1];
    }

    if (Math.floor(dozens) >= 2 && units !== 0) {
      text =
        text +
        " " +
        stringTens[Math.floor(dozens) - 1] +
        " " +
        stringBelowTwenty[units - 1];
    }

    return text;
  }
}

console.log('[convertionMyNumber]', convertMyNumber(217));

// 4.	Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число
function getNumber(str) {
  const arrStringBelowTwenty = [
    "ноль",
    "один",
    "два",
    "три",
    "четыре",
    "пять",
    "шесть",
    "семь",
    "восемь",
    "девять",
    "десять",
    "одиннадцать",
    "двенадцать",
    "тринадцать",
    "четырнадцать",
    "пятнадцать",
    "шестнадцать",
    "семнадцать",
    "восемнадцать",
    "девятнадцать",
  ];
  const arrStringTens = [
    "десять",
    "двадцать",
    "тридцать",
    "сорок",
    "пятьдесят",
    "шестьдесят",
    "семьдесят",
    "восемьдесят",
    "девяносто",
  ];
  const arrStringHundreds = [
    "сто",
    "двести",
    "триста",
    "четыреста",
    "пятьсот",
    "шестьсот",
    "семьсот",
    "восемьсот",
    "девятьсот",
  ];
  
  const arrNumberBelowTwenty = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  const arrNumberTens = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  const arrNumberHundreds = [100, 200, 300, 400, 500, 600, 700, 800, 900];

  let arrStr = str.split(' ');
  if (arrStr.length === 1) {
    
    if (arrStringBelowTwenty.includes(arrStr[0])) {
        
      return arrNumberBelowTwenty[arrStringBelowTwenty.indexOf(arrStr[0])];

    } else if (arrStringTens.includes(arrStr[0])) {
      
      return arrNumberTens[arrStringTens.indexOf(arrStr[0])];
    } else {

      return arrNumberHundreds[arrStringHundreds.indexOf(arrStr[0])];
    }
  } else if (arrStr.length === 2) {
    if (arrStringTens.includes(arrStr[0])) {
      let tens = arrNumberTens[arrStringTens.indexOf(arrStr[0])];
      let units = arrNumberBelowTwenty[arrStringBelowTwenty.indexOf(arrStr[1])];
      return tens + units;
    } else {
      let hundreds = arrNumberHundreds[arrStringHundreds.indexOf(arrStr[0])];
      let units =
        arrNumberBelowTwenty[arrStringBelowTwenty.indexOf(arrStr[1])] ||
        arrNumberTens[arrStringTens.indexOf(arrStr[1])];
      return hundreds + units;
    }
  } else {
    let units = arrNumberBelowTwenty[arrStringBelowTwenty.indexOf(arrStr[2])];
    let tens = arrNumberTens[arrStringTens.indexOf(arrStr[1])];
    let hundreds = arrNumberHundreds[arrStringHundreds.indexOf(arrStr[0])];
    return hundreds + tens + units;
  }

  console.log("[arrStr]", arrStr);
}

console.log('[getNumber(сорок два)]', getNumber('сорок два'));
console.log('[getNumber(сто семнадцать)]', getNumber('сто семнадцать'));
console.log('[getNumber(двести сорок)]', getNumber('двести сорок'));
console.log('[getNumber(сто двадцать два)]', getNumber('сто двадцать два'));
console.log('[getNumber(триста сорок один)]', getNumber('триста сорок один'));

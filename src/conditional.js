// 1.	Если а – четное посчитать а*б, иначе а+б
const a = 8;
const b = 5;
if (a % 2) {
    console.log(a * b); 
} else {
    console.log(a + b); 
}

// 2.	Определить какой четверти принадлежит точка с координатами (х,у)
const x = 0;
const y = -2;
switch (true) {
    case (x > 0 && y > 0):
        console.log('The first quarter');
        break;
    case (x < 0 && y > 0):
        console.log('The second quarter');
        break;
    case (x < 0 && y < 0):
        console.log('The third quarter');
        break;
    case (x > 0 && y < 0):
        console.log('The fourth quarter');
        break;
    default:
        console.log('The point lies on the coordinate line');
        break;
}

// 3.	Найти суммы только положительных из трех чисел
const d = -5;
const e = 3;
const f = 1;
let sum = 0;
switch (true) {
    case d > 0:
        sum += d;
        console.log(sum);
    case e > 0:
        sum += e;
        console.log(sum);
    case f > 0:
        sum += f;
        console.log(sum);
    default:
        break;
}

// 4.	Посчитать выражение (макс(а*б*с, а+б+с))+3
const g = 5;
const h = 15;
const i = 7;
let mult = g * h * i;
let add = g + h + i;
if (mult - add) {
    console.log(mult += 3);
} else {
   console.log(add += 3);
}

// 5.	Написать программу определения оценки студента по его рейтингу, на основе следующих правил
const rating = 100;
switch (true) {
  case (0 <= rating && rating <= 19):
    console.log("Mark F");
    break;
  case (20 <= rating && rating <= 39):
    console.log("Mark E");
    break;
  case (40 <= rating && rating <= 59):
    console.log("Mark D");
    break;
  case (60 <= rating && rating <= 74):
    console.log("Mark C");
    break;
  case (75 <= rating && rating <= 89):
    console.log("Mark B");
    break;
  case (90 <= rating && rating <= 100):
    console.log("Mark A");
        break;
  default:
        break;
}
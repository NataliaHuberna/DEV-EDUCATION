// 1.	Если а – четное посчитать а*б, иначе а+б

function getResult(a, b) {
    return (a % 2
        ? a + b
        : a * b);
}

console.log('[getResult(4, 3)]', getResult(4, 3));


// 2.	Определить какой четверти принадлежит точка с координатами (х,у)

function defineQuater(x, y) {
    let answer = "";
  switch (true) {
    case x > 0 && y > 0:
      answer = "The first quarter";
    break;
    case x < 0 && y > 0:
      answer = "The second quarter";
    break;
    case x < 0 && y < 0:
      answer = "The third quarter";
    break;
    case x > 0 && y < 0:
      answer = "The fourth quarter";
    break;
    default:
      answer = "The point lies on the coordinate line";
    break;
    }
    return answer;
}

console.log('[defineQuater (-1, 3)]', defineQuater (-1, 3));

// 3.	Найти суммы только положительных из трех чисел

function getSum (d, e, f) {
let sum = 0;
    if (d > 0) {
        sum += d;
    }
      
    if (e > 0) {
        sum += e;
    }
       
    if (f > 0) {
        sum += f;
    }
    
    return sum;
}

console.log('[ getSum (-2, -3, 4)]', getSum(-2, -3, 4));

// 4.	Посчитать выражение (макс(а*б*с, а+б+с))+3

function countMaxExpression(g, h, i) {
let mult = g * h * i;
let add = g + h + i;
    return (mult > add
        ? mult += 3
        : add += 3);
}

console.log('[countMaxExpression (1, 2, 3)]', countMaxExpression(1, 2, 3));

// 5.	Написать программу определения оценки студента по его рейтингу, на основе следующих 
function getMark(rating) {
    let mark;
  
    switch (true) {
    case 0 <= rating && rating <= 19:
      mark = "Mark F";
      break;
    case 20 <= rating && rating <= 39:
      mark = "Mark E";
      break;
    case 40 <= rating && rating <= 59:
      mark = "Mark D";
      break;
    case 60 <= rating && rating <= 74:
      mark = "Mark C";
      break;
    case 75 <= rating && rating <= 89:
      mark = "Mark B";
      break;
    case 90 <= rating && rating <= 100:
      mark = "Mark A";
      break;
    default:
      break;
    }
    return mark;
}

console.log('[getMark(100)]', getMark(100));
// 1.	Новый фильм "Как натренировать своего дракона” только выпустили! В кассах кинотеатра много людей, стоящих в огромную очередь. У каждого из них есть банкнота в 100, 50 или 25 долларов. Билет на «Бэтмен против Супермена: На заре справедливости» стоит 25 долларов. Вася в настоящее время работает клерком. Он хочет продать билет каждому человеку в этой очереди. Может ли Вася продать каждому билет и отдать сдачу, если у него изначально нет денег и он продает билеты строго в том порядке, в котором люди следуют в очереди? Верните YES, если Вася может продать каждому билет и отдать сдачу. В противном случае верните NO. Может ли Вася продать каждому билет и отдать сдачу?
// Условия:
// * принимает массив из очереди людей
// * возвращает строку

function tickets (person) {
  const users = person.map((elem) => Number(elem));
  let count = 0;
  let sumOfmoney = 0;
  let flag = "YES";
  for (let index = 0; index < users.length; index++) {
    const element = users[index];
      
    switch (element) {
        case 25:
            count++;
            sumOfmoney += 25;
            break;
        case 50:
            count--;
            sumOfmoney += 50;
            break;
        case 100:
            count--;
            sumOfmoney -= 50;
            break;
        default:
            break;
    }
    
    if (count < 0 || sumOfmoney < 0) {
      flag = "NO";
      break;
    }
  }
  return flag;
};

//Примеры:
// console.log('[tickets([25, 25, 50])]', tickets([25, 25, 50]));; // => YES
// console.log('[tickets([25, 100])]', tickets([25, 100]));    // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 100]); // Yes
// tickets([25, 50, 100]); // No
// tickets(['25', '25', '50', '100']); // Yes
// tickets(['25', '50', '100']); // No

// 2.	Напишите функцию, которая получает два бесконечных числа в виде строк. Вы должны вернуть результат суммы этих двух чисел в виде строки. Математическая работа с этими двумя числами недоступна. Не используйте BigInt. 
// getSum(‘123’, ‘324’)  ->  ‘447’
// getSum(‘111111111111111111111111111111111111111111111111111’,        ’23333333333333333333333333333333333333333333333333’) 
// -> ‘3444444.......4444444’

function getSum(a, b) {
  a = [...a]
    .map(Number)
    .reverse();
  b = [...b]
    .map(Number)
    .reverse();
  
  const odds = Math.abs(a.length - b.length); 
  if (a.length > b.length) {
    for (let i = 0; i < odds; i++) {
      b.push(0);
    }
  }
  if (b.length > a.length) {
    for (let i = 0; i < odds; i++) {
      a.push(0);
    }
  };
  
  const length = Math.max(a.length, b.length);
  for (let i = 0; i < length; i++) {
    if ((a[i] = a[i] + b[i]) > 9 && i!==(length-1)) {
      a[i] -= 10;
      b[i + 1] = b[i + 1] + 1;
    }
  }

  return a.reverse().join("");
}


// 3.	Создайте функцию, которая получает два аргумента: первый - это массив объектов, второй - строка (имя автора). Ваша функция должна возвращать количество сообщений с автором из аргумента функции и комментариев с тем же автором. Пример массива: 
const listOfPosts2 = [
  {
    id: 1,
    post: "some post1",
    title: "title 1",
    author: "Ivanov",
    comments: [
      {
        id: 1.1,
        comment: "some comment1",
        title: "title 1",
        author: "Rimus",
      },
      {
        id: 1.2,
        comment: "some comment2",
        title: "title 2",
        author: "Uncle",
      },
    ],
  },
  {
    id: 2,
    post: "some post2",
    title: "title 2",
    author: "Ivanov",
    comments: [
      {
        id: 1.1,
        comment: "some comment1",
        title: "title 1",
        author: "Rimus",
      },
      {
        id: 1.2,
        comment: "some comment2",
        title: "title 2",
        author: "Uncle",
      },
      {
        id: 1.3,
        comment: "some comment3",
        title: "title 3",
        author: "Rimus",
      },
    ],
  },
  {
    id: 3,
    post: "some post3",
    title: "title 3",
    author: "Rimus",
  },
  {
    id: 4,
    post: "some post4",
    title: "title 4",
    author: "Uncle",
  },
];

function getQuantityPostsByAuthor (listOfPosts2, authorName) {
  let post = 0;
  let comments = 0;
  if (Array.isArray(listOfPosts2) && typeof authorName === "string") {
    for (let index = 0; index < listOfPosts2.length; index++) {
      const element = listOfPosts2[index];
      if (element.author === authorName) {
        post++;
      }
      if (element.comments) {
        for (let k = 0; k < element.comments.length; k++) {
          const coment = element.comments[k];
          if (coment.author === authorName) {
            comments++;
          }
        }
      }
    }
    // return `Post:${post},comments:${comments}`;
    const answer = {};
    answer["post"] = post;
    answer["comments"] = comments;
    return answer;
  }
};

console.log(
  "[getQuantityPostsByAuthor ()]",
  getQuantityPostsByAuthor(listOfPosts2, "Rimus")
);

// 4 Напишите функцию кеш

let complexFunction = function (arg1,arg2) {
	return arg1+arg2; 
	}

function cashe (f) {
    let cashe = {};
    return function (arg1, arg2) {
        if (cashe[f(arg1, arg2)]) {
         return cashe[f(arg1, arg2)];
        } else {
          let result = f(arg1, arg2);
          cashe[f(arg1, arg2)] = result;
          return result;
        }
    }
}

let cachedFunc = cashe(complexFunction);

console.log(cachedFunc('foo', 'bar')) // complexFunction должна выполниться
console.log(cachedFunc('foo', 'bar')) // complexFunction не должна выполняться 
console.log(cachedFunc('foo', 'baz')) // complexFunction должна выполнится



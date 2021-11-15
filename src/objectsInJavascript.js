// 1.Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц.

function getCookingTime(eggsAmount) {
    let result;
    result = Math.ceil(eggsAmount / 5) * 5;
    return result;
}

// 2.Получая массив чисел. Все они либо нечетные, либо четные, кроме одного. Тебе нужно его найти.
function getNumber(array) {
  let result;
    const evenElements = array.filter(element => element % 2 === 0);
    const oddElements = array.filter(element => element % 2 !== 0);
    
    if (evenElements.length === 1) {
        result = evenElements[0];
    } else {
        result = oddElements[0];
    }
      return result;
}


// 3. Принимая массив объектов и случайную строку. У объектов может быть ключ: «title» с разными значениями. Создайте алгоритм, который фильтрует массив, заданный как первый параметр, и возвращает массив объектов, которые содержат в своих заголовках заданную строку в качестве второго параметра (без учета регистра).

function findTitle(array, string) {

    const result = array
        .filter(elem => elem.title)
        .reduce((res, elem) => {
            const title = elem.title.toLowerCase();
            const newString = string.toLowerCase();
        if (title.includes(newString)) {
          res.push(elem);
        }
        return res;
    }, [])

    return result;
}

let arr = [
  {
    title: "Some title1",
  },
  {
    title: "I like JS",
  },
  {
    user: "This obj doesn’t have key title js",
  },

  {
    title: "Js - is the best!",
  },
];

findTitle(arr, 'js'); // return [{ title: 'I like JS'}, { title: 'Js - is the best!' }]
console.log('[findTitle(arr, js)]', findTitle(arr, 'js'));

//4. Принимая строку, ваша функция должна вернуть обьект, в котором ключи – символы строки, значение – количество повторений символов в строке
function countCharacters(string) {
  let result = [...string].reduce((item, index) => { item[index] = item[index] ? item[index] + 1 : 1; return item; }, {}); 
return result;
}

countCharacters('a 2ab!d') // should return {a: 2, b:1, d:1, 2:1}

// 5 Принимая число, ваша функция должна найти следующий положительный палиндром большего размера.

function checkPalindrome(number) {
  return String(number) === String(number).split("").reverse().join("");
}

function getNextPalindrome(number) {
  let result = number + 1;

  while (!checkPalindrome(result)) {
    result++;
  }

  return result;
}

// 6. Создать структуру данных Set, используя объект, создать методы add, remove, has
const setWithObject = {
  add: function (value) {
    return (this[value] = 0);
  },
  remove: function (value) {
    return this.hasOwnProperty(value) ? delete this[value] : false;
  },
  has: function (value) {
    return this.hasOwnProperty(value);
  },
};

setWithObject.add("d");
setWithObject.add("e");
setWithObject.add("v");
// console.log(setWithObject)
console.log(setWithObject.has("e"));
console.log(setWithObject.remove("e"));
console.log(setWithObject.has("e"));
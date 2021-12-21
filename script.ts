// 1.Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц.

function getCookingTime (eggsAmount: number): number {
    if (!Number.isFinite(eggsAmount) || eggsAmount <= 0) return 0;
    return Math.ceil(eggsAmount / 5) * 5;
}

// 2.Получая массив чисел. Все они либо нечетные, либо четные, кроме одного. Тебе нужно его найти.

function getNumber (array: number[]): number {
    const evenElements: number[] = array.filter(element => element % 2 === 0);
    const oddElements: number[] = array.filter(element => element % 2 !== 0);
    
    if (evenElements.length === 1) {
        return evenElements[0];
    } else {
        return oddElements[0];
    }
}

type TObjectTitle = {
    title?: string 
};

// 3. Принимая массив объектов и случайную строку. У объектов может быть ключ: «title» с разными значениями. Создайте алгоритм, который фильтрует массив, заданный как первый параметр, и возвращает массив объектов, которые содержат в своих заголовках заданную строку в качестве второго параметра (без учета регистра).

function findTitle (array: Array <TObjectTitle>, string: string): Array <TObjectTitle> {
    const result: Array <TObjectTitle> = array
        .filter(elem => elem.title)
        .reduce((res, elem) => {
            const title: string = elem.title.toLowerCase();
            const newString: string = string.toLowerCase();
        if (title.includes(newString)) {
          res.push(elem);
        }
        return res;
    }, new Array <TObjectTitle>())
    return result;
}

class TCountCharacters {
    [key: string]: number
};
//4. Принимая строку, ваша функция должна вернуть обьект, в котором ключи – символы строки, значение – количество повторений символов в строке

function countCharacters (string: string): TCountCharacters {
    const result: TCountCharacters = [...string].reduce((item, index) => { item[index] = item[index] ? item[index] + 1 : 1; return item; }, new TCountCharacters()); 
return result;
}

// 5 Принимая число, ваша функция должна найти следующий положительный палиндром большего размера.

function checkPalindrome(number: number): boolean {
    return String(number) === String(number).split("").reverse().join("");
}

function getNextPalindrome(number: number): number {
    let result: number = number + 1;
    while (!checkPalindrome(result)) {
        result++;
    }
    return result;
}

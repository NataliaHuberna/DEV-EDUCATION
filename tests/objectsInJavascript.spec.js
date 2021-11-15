describe('check file objects in JavaScript', function () {
    describe("Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц", function () {
        it('should return number of minutes for amount more than 5', function () {
            expect(getCookingTime(17)).to.be.equal(20);
        });
      
        it('should return 0 for 0 eggs', function () {
            expect(getCookingTime(0)).to.be.equal(0);
        });
      
        it('should return 5 minutes for amount less 5 eggs', function () {
            expect(getCookingTime(4)).to.be.equal(5);
        });
      
        it('should return 5 minutes for amount 5 eggs', function () {
            expect(getCookingTime(4)).to.be.equal(5);
        });
    });
    describe("Получая массив чисел. Все они либо нечетные, либо четные, кроме одного. Тебе нужно его найти", function () {
        it("should return odd element", function () {
            expect(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])).to.equal(13);
        });

        it("should return even element", function () {
            expect(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])).to.equal(4);
        })
      
        it("should return element from array.length=1 for odd element ", function () {
            expect(getNumber([1])).to.equal(1);
        })
      
        it("should return element from array.length=1 for even element ", function () {
          expect(getNumber([2])).to.equal(2);
        });
      
        it("should return 0 for array = [0] ", function () {
          expect(getNumber([0])).to.equal(0);
        });
      
        it("should return underfined ", function () {
          expect(getNumber([])).to.be.underfined;
        });
    });
    describe("Принимая массив объектов и случайную строку.Создайте алгоритм, который фильтрует массив", function () {
        const arr = [
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
        const answer = [{ title: "I like JS" }, { title: "Js - is the best!" }];
        it("should return array of objects for lowercase", function () {
            expect(findTitle(arr, 'js')).to.eql(answer);
        });
      
        it("should return array of objects for different register", function () {
            expect(findTitle(arr, 'Js')).to.eql(answer);
        });

        it("should return array of objects for uppercase", function () {
             expect(findTitle(arr, 'JS')).to.eql(answer);
        })

        it("should return empty array if object don't has string", function () {
          expect(findTitle(arr, "ANITHING")).to.eql([]);
        });
    });
    describe("Принимая строку, ваша функция должна вернуть обьект, в котором ключи – символы строки, значение – количество повторений символов в строке", function () {
        it("should return object if string includs ' ', numbers, symbols ", function () {
            expect(countCharacters("a 2ab!d")).to.eql({ '2': 1, 'a': 2, " ": 1, 'b': 1, "!": 1, 'd': 1 });
        });
      
        it("should return empty object if string is empty", function () {
            expect(countCharacters("")).to.eql({});
        });
    });
    describe("Принимая число, ваша функция должна найти следующий положительный палиндром большего размера", function () {
        it("should return palindrom for 0", function () {
            expect(getNextPalindrome(0)).to.be.equal(1);
        });
      
        it("should return palindrom for one-digit number", function () {
            expect(getNextPalindrome(7)).to.be.equal(8);
        });

        it("should return palindrom  one-digit number with a transition through ten", function () {
          expect(getNextPalindrome(9)).to.be.equal(11);
        });

        it("should return palindrom for two-digit number", function () {
          expect(getNextPalindrome(53)).to.be.equal(55);
        });

        it("should return palindrom for two-digit with a transition through hundreds", function () {
          expect(getNextPalindrome(99)).to.be.equal(101);
        });

        it("should return palindrom for three-digit number", function () {
          expect(getNextPalindrome(623)).to.be.equal(626);
        });

        it("should return palindrom for three-digit number with a transition through thousands", function () {
          expect(getNextPalindrome(999)).to.be.equal(1001);
        });
    });
    describe("Создать структуру данных Set, используя объект, создать методы add, remove, has", function () {
      it("should return boolean for method add", function () {
        expect(setWithObject.add("e")).to.be.true;
      });

      it("should return boolean for method has", function () {
        expect(setWithObject.has("e")).to.be.true;
      });

      it("should return boolean for method remove", function () {
        expect(setWithObject.remove("e")).to.be.true;
      });

      
    });
})

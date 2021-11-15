describe('check file cycle', function () {
    describe("Найти сумму четных чисел и их количество в диапазоне от 1 до 99", function () {
            it('should return count: 49, sum: 2450', function () {
            expect(getSumAndCount()).to.eql( {'count': 49, 'sum': 2450});
        })
    }
    );
    describe("Проверить простое ли число", function () {
        it("should return Prime number if number is prime", function () {
           expect(checkNumber(17)).to.be.equal("Prime number");
        });
        
        it("should return Composite number if number is composite", function () {
          expect(checkNumber(8)).to.be.equal("Composite number");
        });
      
        it("should return 'Number is less one' for 0", function () {
          expect(checkNumber(0)).to.be.equal("Number is less one");
        });
      
        it("should return 'Number is less one' for negative", function () {
          expect(checkNumber(-2)).to.be.equal("Number is less one");
        });
    });
    describe("Найти корень натурального числа с точностью до целого", function () {
        it("should return sqrt if number has it", function () {
          expect(getSqrt(9)).to.be.equal(3);
        });

        it("should return Number has no whole square root if number hasn't it", function () {
          expect(getSqrt(17)).to.be.equal("Number has no whole square root");
        });
      
        it("should return 'Number is not natural' for 0", function () {
          expect(getSqrt(0)).to.be.equal("Number is not natural");
        });
      
        it("should return 'Number is not natural' for negative numbers ", function () {
          expect(getSqrt(-1)).to.be.equal("Number is not natural");
        });
    });
    describe("Вычислить факториал числа", function () {
        it("should return factorial", function () {
          expect(countFactorial(4)).to.be.equal(24);
        });
    });
    describe('Посчитать сумму цифр заданного числа', function () {
        it("should return sum of numbers for three-digit number", function () {
          expect(countSumOfNums(112)).to.be.equal(4);
        });
      
        it("should return sum of numbers for two-digit numbe", function () {
          expect(countSumOfNums(12)).to.be.equal(3);
        });
      
        it("should return number for one-digit number", function () {
          expect(countSumOfNums(1)).to.be.equal(1);
        });
      
        it("should return 0 for 0", function () {
          expect(countSumOfNums(0)).to.be.equal(0);
        });
    })
    describe("Вывести число, которое является зеркальным отображением последовательности цифр заданного числа", function () {
      it("should return mirror reflection for many digit number", function () {
        expect(getMirrow(123456)).to.be.equal(654321);
      });

      it("should return mirror reflection for one-digit number", function () {
        expect(getMirrow(2)).to.be.equal(2);
      });
    });
})
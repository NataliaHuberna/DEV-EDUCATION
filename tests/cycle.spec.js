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
    });
    describe("Найти корень натурального числа с точностью до целого", function () {
        it("should return sqrt if number has it", function () {
          expect(getSqrt(9)).to.be.equal(3);
        });

        it("should return Number has no whole square root if number hasn't it", function () {
          expect(getSqrt(17)).to.be.equal("Number has no whole square root");
        });
    });
    describe("Вычислить факториал числа", function () {
        it("should return factorial", function () {
          expect(countFactorial(4)).to.be.equal(24);
        });
    });
    describe('Посчитать сумму цифр заданного числа', function () {
        it("should return sum of numbers", function () {
          expect(countSumOfNums(112)).to.be.equal(4);
        });
    })
    describe("Вывести число, которое является зеркальным отображением последовательности цифр заданного числа", function () {
      it("should return mirror reflection", function () {
        expect(getMirrow(123456)).to.be.equal(654321);
      });
    });
})
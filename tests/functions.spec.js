describe("check file functions", function () {
    describe("Получить строковое название дня недели по номеру дня", function () {
      it("should return string with week day", function() {
        expect(getWeekDay(0)).to.be.equal("Воскресенье");
      });

      it("should return underfined", function() {
        expect(getWeekDay(7)).to.be.undefined;
      });
    });
    describe("Найти расстояние между двумя точками в двухмерном декартовом пространстве", function () {
        it("should return distance between points", function () {
            expect(point.getDistance(new Point(1, 4), new Point(1, 1))
            ).to.be.equal(3);
        });
    });
    describe("Вводим число(0-999), получаем строку с прописью числа", function () {
        it("should return Неверный диапазон for numbers below 0", function () {
            expect(convertMyNumber(-1)).to.be('Неверный диапазон');
        });

        it("should return Неверный диапазон for numbers more than 999", function () {
            expect(convertMyNumber(1000)).to.be('Неверный диапазон');
        });

        it("should return string for numbers below 20 and more than 0", function () {
            expect(convertMyNumber(19)).to.be.equal('девятнадцать');
        });

        it("should return string for numbers below 100, more than 19, and 0 at the end", function () {
          expect(convertMyNumber(50)).to.be("пятьдесят");
        });

        it("should return string for numbers below 100, more than 19, and not 0 at the end", function () {
          expect(convertMyNumber(55)).to.be("пятьдесят пять");
        });

        it("should return string сто for number 100", function () {
          expect(convertMyNumber(100)).to.be("сто");
        });

        it("should return string for numbers hundreds", function () {
          expect(convertMyNumber(300)).to.be("триста");
        });

        it("should return string for numbers below 1000 and more than 100, teenth =0", function () {
          expect(convertMyNumber(208)).to.be("двести восемь");
        });

        it("should return string for numbers below 1000 and more than 100, teenth between 10 and 19", function () {
          expect(convertMyNumber(212)).to.be("двести двенадцать");
        });

        it("should return string for numbers below 1000 and more than 100, teenth is  not 0, units are 0", function () {
          expect(convertMyNumber(240)).to.be("двести сорок");
        });

        it("should return string for numbers below 1000 and more than 100, teenth is not 0, units are not 0", function () {
          expect(convertMyNumber(240)).to.be("двести сорок");
        });

        it("should return string ноль for number 0", function () {
          expect(convertMyNumber(0)).to.be("ноль");
        });
    });
    describe("Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число", function () {
        describe("for number length 1 symbol", function () {
            it("should return number 0 for ноль", function () {
              expect(getNumber('ноль')).to.be.equal(0);
            });

            it("should return number below 20 ", function () {
              expect(getNumber('одиннадцать')).to.be.equal(11);
            });

            it("should return number dozens", function () {
              expect(getNumber('сорок')).to.be.equal(40);
            });

            it("should return number hundreds", function () {
              expect(getNumber('четыреста')).to.be.equal(400);
            });
        })
        describe("for number length 2 symbol", function () {
            it("should return number dozens and units ", function () {
              expect(getNumber('двадцать один')).to.be.equal(21);
            });

            it("should return number hundreds and units 0-19", function () {
              expect(getNumber('двести два')).to.be.equal(202);
            });
        })
        describe("for number length 3 symbol", function () {
            it("should return number hundreds, dozens and units ", function () {
              expect(getNumber('триста двадцать один')).to.be.equal(321);
            });
        })
    });
});
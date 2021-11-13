describe("check file array", function () {
    describe('Найти минимальный элемент массива', function () {
        it('should return min element', function () {
            expect(findMinElement([1, 2, 3])).to.be.equal(1);
        })
    });
    describe('Найти максимальный элемент массива', function () {
        it('should return max element', function () {
            expect(findMaxElement([1, 2, 3])).to.be.equal(3);
        })
    });
    describe("Найти индекс минимального элемента массива", function () {
        it("should return index of min element", function () {
            expect(findIndexMin([1, 2, 3])).to.be.equal(0);
        });
    });
    describe("Найти индекс максимального элемента массива", function () {
      it("should return index of max element", function () {
        expect(getIndexMax([1, 2, 3])).to.be.equal(2);
      });
    });
    describe("Посчитать сумму элементов массива с нечетными индексами", function () {
      it("should return sum of elements", function () {
        expect(getSumOddIndex([1, 2, 3, 4, 5])).to.be.equal(6);
      });
    });
    describe("Сделать реверс массива", function () {
      it("should return reversed array", function () {
        expect(reverseArr([1, 2, 3, 4, 5])).to.eql([5, 4, 3, 2, 1]);
      });
    });
    describe('Посчитать количество нечетных элементов массива', function () {
      it("should return amount of odd elements", function () {
        expect(countOddElements([1, 2, 3, 4, 5])).to.be.equal(2);
      });
    });
    describe("Поменять местами первую и вторую половину массива", function () {
      it("should return changed halfs", function () {
        expect(changeHalf([1, 5, 10, 4, 2])).to.eql([4, 2, 10, 1, 5]);
      });
    });

});
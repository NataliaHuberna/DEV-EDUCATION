describe("check file array", function () {
    describe('Найти минимальный элемент массива', function () {
        it('should return min for all elements above 0 ', function () {
            expect(findMinElement([1, 2, 3])).to.be.equal(1);
        })
      
        it('should return min for all elements with 0 ', function () {
            expect(findMinElement([1, 2, 0, 3])).to.be.equal(0);
        })
      
        it('should return min for all elements below 0 ', function () {
            expect(findMinElement([-1, -2, -3])).to.be.equal(-3);
        })
      
        it('should return 0 for all elements  0 ', function () {
            expect(findMinElement([0, 0, 0])).to.be.equal(0);
        })
      
        it("should return min for negative, positive  and  0 ", function () {
          expect(findMinElement([-5, 0, 6])).to.be.equal(-5);
        });
    });
    describe('Найти максимальный элемент массива', function () {
        it('should return max for all positive element', function () {
            expect(findMaxElement([1, 2, 3])).to.be.equal(3);
        })
      
        it("should return max for all elements with 0 ", function () {
          expect(findMaxElement([1, 2, 0, 3])).to.be.equal(3);
        });

        it("should return max for all elements below 0 ", function () {
          expect(findMaxElement([-1, -2, -3])).to.be.equal(-1);
        });

        it("should return 0 for all elements  0 ", function () {
          expect(findMaxElement([0, 0, 0])).to.be.equal(0);
        });
      
        it("should return max for negative, positive  and  0 ", function () {
          expect(findMaxElement([-1, 0, 3])).to.be.equal(3);
        });
    });
    describe("Найти индекс минимального элемента массива", function () {
        it("should return index of min for all positive elements", function () {
          expect(findIndexMin([1, 2, 3])).to.be.equal(0);
        });
      
        it("should return index of min for all elements with 0 ", function () {
          expect(findIndexMin([1, 2, 0, 3])).to.be.equal(2);
        });

        it("should return index of min for all elements below 0 ", function () {
          expect(findIndexMin([-1, -2, -3])).to.be.equal(2);
        });

        it("should return 0 for all elements  0 ", function () {
          expect(findIndexMin([0, 0, 0])).to.be.equal(0);
        });

        it("should return index of min for negative, positive  and  0 ", function () {
          expect(findIndexMin([-1, 0, 3])).to.be.equal(0);
        });
    });
    describe("Найти индекс максимального элемента массива", function () {
      it("should return index of max for all positive elements", function () {
        expect(getIndexMax([1, 2, 3])).to.be.equal(2);
      });

      it("should return index of Max for all elements with 0 ", function () {
        expect(getIndexMax([1, 2, 0, 3])).to.be.equal(3);
      });

      it("should return index of Max for all elements below 0 ", function () {
        expect(getIndexMax([-1, -2, -3])).to.be.equal(0);
      });

      it("should return 0 for all elements  0 ", function () {
        expect(getIndexMax([0, 0, 0])).to.be.equal(0);
      });

      it("should return index of Max for negative, positive  and  0 ", function () {
        expect(getIndexMax([-1, 0, 3])).to.be.equal(2);
      });
    });
    describe("Посчитать сумму элементов массива с нечетными индексами", function () {
      it("should return sum of positive elements", function () {
        expect(getSumOddIndex([1, 2, 3, 4, 5])).to.be.equal(6);
      });

      it("should return sum of negative elements", function () {
        expect(getSumOddIndex([-1, -2, -3, 4, 5, 6])).to.be.equal(8);
      });

      it("should return sum  of positive, negative and 0 elements", function () {
        expect(getSumOddIndex([1, 0, 3, -4, 5, 6])).to.be.equal(2);
      });
    });
    describe("Сделать реверс массива", function () {
      it("should return reversed array for array length odd", function () {
        expect(reverseArr([1, 2, 3, 4, 5])).to.eql([5, 4, 3, 2, 1]);
      });

      it("should return reversed array array for array length even", function () {
        expect(reverseArr([1, 2, 3, 4, 5, 6])).to.eql([6, 5, 4, 3, 2, 1]);
      });

      it("should return reversed array for array length 1", function () {
        expect(reverseArr([1])).to.eql([1]);
      });
    });
    describe('Посчитать количество нечетных элементов массива', function () {
      it("should return amount of odd elements for all positive", function () {
        expect(countOddElements([1, 2, 3, 4, 5])).to.be.equal(3);
      });

      it("should return amount of odd elements for all negative", function () {
        expect(countOddElements([-1, -2, -3, -4, -5])).to.be.equal(3);
      });

      it("should return amount of odd elements for negative, positive and 0", function () {
        expect(countOddElements([-1, 0, 3, -4, 5, 6])).to.be.equal(3);
      });

      it("should return 0 odd elements for all 0", function () {
        expect(countOddElements([0, 0, 0, 0, 0])).to.be.equal(0);
      });
    });
    describe("Поменять местами первую и вторую половину массива", function () {
      it("should return changed halfs for array length odd", function () {
        expect(changeHalf([1, 5, 10, 4, 2])).to.eql([4, 2, 10, 1, 5]);
      });

      it("should return changed halfs for array length even", function () {
        expect(changeHalf([1, 5, 10, 4])).to.eql([10, 4, 1, 5]);
      });

      it("should return changed halfs for array length 1", function () {
        expect(changeHalf([6])).to.eql([6]);
      });

      it("should return 'Array is empty' fo array length 0", function () {
        expect(changeHalf([])).to.be.equal("Array is empty");
      });
    });

});
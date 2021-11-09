describe('check file conditional', function() {
  describe('Если а – четное посчитать а*б, иначе а+б', function() {
      it('should multiply if first argument even', function() {
        expect(getResult(4, 2)).to.be.equal(8);
      });

      it('should sum if first argument odd', function(){
          expect(getResult(3, 2)).to.be.equal(5);
      });
  });
  
  describe('Oпределить какой четверти принадлежит точка с координатами (х,у)', function() {
      it('should be first quarter, if x>0 and y>0', function(){
          expect(defineQuater(1, 2)).to.be.equal("The first quarter");
      });

      it('should be second quarter, if x<0 and y>0', function(){
        expect(defineQuater(-1, 2)).to.be.equal("The second quarter");
      });

      it('should be third quarter, if x<0 and y<0', function(){
        expect(defineQuater(-1, -2)).to.be.equal("The third quarter");
      });

      it('should be fourth quarter, if x>0 and y<0', function(){
        expect(defineQuater(1, -2)).to.be.equal("The fourth quarter");
      });

      it('should be fourth quarter, if x>0 and y<0', function(){
        expect(defineQuater(1, -2)).to.be.equal("The fourth quarter");
      });

      it('should be on the coordinate line, if x=0 or y=0', function(){
        expect(defineQuater(0, -2)).to.be.equal("The point lies on the coordinate line");
      });
  });

  describe('Найти суммы только положительных из трех чисел', function() {
      it('should return sum for all positive numbers', function(){
        expect(getSum (1, 2, 3)).to.be.equal(6);
      });

      it('should return sum for two positive numbers and one negative', function(){
        expect(getSum (1, 2, -3)).to.be.equal(3);
      });

      it('should return positive number for two negative and one positive numbers', function(){
        expect(getSum (-1, -2, 3)).to.be.equal(3);
      });

      it('should return 0 for all negative numbers', function(){
        expect(getSum (-1, -2, -3)).to.be.equal(0);
      });
  });

  describe('Посчитать выражение (макс(а*б*с, а+б+с))+3', function() {
      it('should return sum + 3', function(){
          expect(countMaxExpression(3, 0.1, 2)).to.be.equal(8.1);
      });

      it('should return multyply + 3', function(){
        expect(countMaxExpression(3, 1, 2)).to.be.equal(9);
    });
  });

  describe('Написать программу определения оценки студента по его рейтингу', function(){
      it('should return mark F for reiting 0-19', function(){
            expect(getMark(5)).to.be.equal("Mark F");
      });

      it('should return mark E for reiting 20-39', function(){
        expect(getMark(25)).to.be.equal("Mark E");
      });

      it('should return mark D for reiting 40-59', function(){
        expect(getMark(40)).to.be.equal("Mark D");
      });

      it('should return mark C for reiting 60-74', function(){
        expect(getMark(74)).to.be.equal("Mark C");
      });

      it('should return mark B for reiting 75-89', function(){
        expect(getMark(80)).to.be.equal("Mark B");
      });

      it('should return mark A for reiting 90-100', function(){
        expect(getMark(95)).to.be.equal("Mark A");
      });

      it('should return for reiting > 100 or <0', function(){
        expect(getMark(101)).to.be.undefined;
      });


  })


});
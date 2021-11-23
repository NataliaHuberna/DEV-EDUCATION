describe('Check functions for actions with Linked List', function () {
    describe("Check function getting length of Linked List", function () {
        it("should return length for object with some properties", function () {
        const linkedList = {
          key1: { value: "A", next: 'key2' },
          key2: { value: "B", next: 'key3' },
          key3: { value: "C", next: 'key4' },
          key4: { value: "D", next: 'key5' },
          key5: { value: "E", next: null },
        };  
        expect(Getlength(linkedList)).to.be.equal(5);
        });

        it("should return length = 1 for object with one property", function () {
        const linkedList = {
          key1: { value: "A", next: 'null' },
        };  
        expect(Getlength(linkedList)).to.be.equal(1);
        });

        it("should return length = 0 for object with no property", function () {
        const linkedList = {};  
        expect(Getlength(linkedList)).to.be.equal(0);
        });
    });
    describe("Check function adding of element", function () {
      it("should return linkedList with one property for first adding", function () {
        const linkedList = {};
        expect(AddElement(linkedList, "A")).to.eql(
          ({ key1: { value: "A", next: null }})
        );
      });
      it("should return linkedList with two properties for subsequent adding", function () {
        const linkedList = { key1: { value: "A", next: null } };
        expect(AddElement(linkedList, "B")).to.eql({
          key1: { value: "A", next: "key2" },
          key2: { value: "B", next: null },
        });
      });
    });

    describe("Check function Remove Value", function () {
      it("should return linkedList without value", function () {
        linkedList = {
          key1: { value: "A", next: "key2" },
          key2: { value: "B", next: "key3" },
          key3: { value: "C", next: null},
        };  
        expect(RemoveValue(linkedList, "B")).to.eql({
          key1: { value: "A", next: "key2" },
          key2: { value: "C", next: null },
       });
      });
      it("should return linkedList without last value", function () {
        linkedList = {
          key1: { value: "A", next: "key2" },
          key2: { value: "B", next: "key3" },
          key3: { value: "C", next: "key4" },
          key4: { value: "D", next: "key5" },
          key5: { value: "E", next: null },
        };  
        expect(RemoveValue(linkedList, "E")).to.eql({
          key1: { value: "A", next: "key2" },
          key2: { value: "B", next: "key3" },
          key3: { value: "C", next: "key4" },
          key4: { value: "D", next: null },
        });
      });
      it("should return linkedList without first value", function () {
        const linkedList = {
          key1: { value: "A", next: "key2" },
          key2: { value: "B", next: "key3" },
          key3: { value: "C", next: "key4" },
          key4: { value: "D", next: "key5" },
          key5: { value: "E", next: null },
        };  
        expect(RemoveValue(linkedList, "A")).to.eql({
          key1: { value: "B", next: "key2" },
          key2: { value: "C", next: "key3" },
          key3: { value: "D", next: "key4" },
          key4: { value: "E", next: null },
        });
      });
    });

    describe("Check function Remove Last element", function () {
       it("should return linkedList without last property", function () {
         const linkedList = {
          key1: { value: "A", next: "key2" },
          key2: { value: "B", next: "key3" },
          key3: { value: "C", next: "key4" },
          key4: { value: "D", next: "key5" },
          key5: { value: "E", next: null },
        };  
         expect(RemoveLast(linkedList)).to.eql({
           key1: { value: "A", next: "key2" },
           key2: { value: "B", next: "key3" },
           key3: { value: "C", next: "key4" },
           key4: { value: "D", next: null },
         });
       });
         
       it("should return empty linkedList for removing first property in linkedList with one property", function () {
         const linkedList = { key1: { value: "A", next: null } };
         expect(RemoveLast(linkedList)).to.eql({});
       });
    });
    
     describe("Check function Adding with Array", function () {
       it("should return linkedList with properties for empty linkedlist", function () {
         const linkedList = {};
         expect(AddSubArray(linkedList, ["A", "B"])).to.eql({
           key1: { value: "A", next: "key2" },
           key2: { value: "B", next: null },
         });
       });
         
       it("should return linkedList with properties for linkedlist with some properties", function () {
         const linkedList = {
           key1: { value: "A", next: "key2" },
           key2: { value: "B", next: null },
         };
         expect(AddSubArray(linkedList, ["C", "D"])).to.eql({
           key1: { value: "A", next: "key2" },
           key2: { value: "B", next: "key3" },
           key3: { value: "C", next: "key4"},
           key4: { value: "D", next: null },
         });
       });
     });
    
    describe("Check function GetValueOfIndex", function () {
       it("should return value for middle element", function () {
         const linkedList = {
           key1: { value: "A", next: "key2" },
           key2: { value: "B", next: "key3" },
           key3: { value: "C", next: "key4" },
           key4: { value: "D", next: "key5" },
           key5: { value: "E", next: null },
         };  
         expect(GetValueOfIndex(linkedList, 2)).to.be.equal("B");
       });
         
       it("should return value for first element", function () {
         const linkedList = {
           key1: { value: "A", next: "key2" },
           key2: { value: "B", next: "key3" },
           key3: { value: "C", next: "key4" },
           key4: { value: "D", next: "key5" },
           key5: { value: "E", next: null },
         };  
         expect(GetValueOfIndex(linkedList, 1)).to.be.equal("A");
       });
       it("should return value for last element", function () {
         const linkedList = {
           key1: { value: "A", next: "key2" },
           key2: { value: "B", next: "key3" },
           key3: { value: "C", next: "key4" },
           key4: { value: "D", next: "key5" },
           key5: { value: "E", next: null },
         };  
         expect(GetValueOfIndex(linkedList, 5)).to.be.equal("E");
       });
    });

    describe("Check function GetIndexForValue", function () {
      it("should return value for middle element", function () {
        const linkedList = {
          key1: { value: "A", next: "key2" },
          key2: { value: "B", next: "key3" },
          key3: { value: "C", next: "key4" },
          key4: { value: "D", next: "key5" },
          key5: { value: "E", next: null },
        };
        expect(GetIndexForValue(linkedList, "B")).to.be.equal("2");
      });

      it("should return value for first element", function () {
        const linkedList = {
          key1: { value: "A", next: "key2" },
          key2: { value: "B", next: "key3" },
          key3: { value: "C", next: "key4" },
          key4: { value: "D", next: "key5" },
          key5: { value: "E", next: null },
        };
        expect(GetIndexForValue(linkedList, "A")).to.be.equal("1");
      });
      it("should return value for last element", function () {
        const linkedList = {
          key1: { value: "A", next: "key2" },
          key2: { value: "B", next: "key3" },
          key3: { value: "C", next: "key4" },
          key4: { value: "D", next: "key5" },
          key5: { value: "E", next: null },
        };
        expect(GetIndexForValue(linkedList, "E")).to.be.equal("5");
      });
    });
    
});
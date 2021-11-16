describe('Check file clousers', function () {
    describe("Может ли Вася продать каждому билет и отдать сдачу?", function () {
        it('should return YES for queue of people [25, 25, 50]', function () {
            expect(tickets([25, 25, 50])).to.be.equal("YES");
        });

        it("should return YES for queue of people [25, 25, 50, 100]", function () {
          expect(tickets([25, 25, 50, 100])).to.be.equal("YES");
        });

        it('should return YES for queue of people money string ["25", "25", "50", "100"]', function () {
            expect(tickets(["25", "25", "50", "100"])).to.be.equal("YES");
        });

        it("should return NO for queue of people [25, 100]", function () {
          expect(tickets([25, 100])).to.be.equal("NO");
        });
        
        it("should return NO for queue of people [25, 50, 100]", function () {
          expect(tickets([25, 50, 100])).to.be.equal("NO");
        });
        
        it('should return NO for queue of people ["25", "50", "100"]', function () {
          expect(tickets(["25", "50", "100"])).to.be.equal("NO");
        });
        
    });
    describe("Напишите функцию, которая получает два бесконечных числа в виде строк. Вы должны вернуть результат суммы этих двух чисел в виде строки", function () {
        it("should retun sum of numbers of infinite length, lenght is the same", function () {
            expect(
              getSum(
                "111111111111111111111111111111111111111111111111111",
                "233333333333333333333333333333333333333333333333333"
              )
            ).to.be.equal("344444444444444444444444444444444444444444444444444");
        });

        it("should retun sum of numbers with different lengtn, first number is longer", function () {
            expect(getSum("1111111", "233")).to.be.equal("1111344");
        });

        it("should retun sum of numbers with different lengtn, the second number is longer", function () {
            expect(getSum("233", "1111111")).to.be.equal("1111344");
        });

        it("should retun sum of numbers with a transition through ten at the end of the number", function () {
          expect(getSum("239", "111")).to.be.equal("350");
        });

        it("should retun sum of numbers with a transition through ten in the middle of the number", function () {
          expect(getSum("292", "111")).to.be.equal("403");
        });
        
        it("should retun sum of numbers with a transition through ten ay the beginтштп of the number", function () {
          expect(getSum("992", "911")).to.be.equal("1903");
        });

        it("should retun string as result", function () {
          expect(getSum("292", "111")).to.be.a("string");
        });
    })
    describe('Создайте функцию, которая получает два аргумента: первый - это массив объектов, второй - строка (имя автора)', function () {
        it("should return object as answer", function () {
            const listOfPosts2 = [
                {
                    id: 1,
                    post: "some post1",
                    title: "title 1",
                    author: "Ivanov",
                    comments: [
                        {
                            id: 1.1,
                            comment: "some comment1",
                            title: "title 1",
                            author: "Rimus",
                        },
                        {
                            id: 1.2,
                            comment: "some comment2",
                            title: "title 2",
                            author: "Uncle",
                        },
                    ],
                },
                {
                    id: 2,
                    post: "some post2",
                    title: "title 2",
                    author: "Ivanov",
                    comments: [
                        {
                            id: 1.1,
                            comment: "some comment1",
                            title: "title 1",
                            author: "Rimus",
                        },
                        {
                            id: 1.2,
                            comment: "some comment2",
                            title: "title 2",
                            author: "Uncle",
                        },
                        {
                            id: 1.3,
                            comment: "some comment3",
                            title: "title 3",
                            author: "Rimus",
                        },
                    ],
                },
                {
                    id: 3,
                    post: "some post3",
                    title: "title 3",
                    author: "Rimus",
                },
                {
                    id: 4,
                    post: "some post4",
                    title: "title 4",
                    author: "Uncle",
                },
            ];
            expect(getQuantityPostsByAuthor(listOfPosts2, "Rimus")).to.eql({ post: 1, comments: 3, });
        });

        it("should be first arguments is string", function () {
          expect(getQuantityPostsByAuthor("", "Rimus")).to.be.equal(undefined);
        });

        it("should be first arguments is number", function () {
          expect(getQuantityPostsByAuthor(11, "Rimus")).to.be.equal(undefined);
        });
    })
    describe("Напишите функцию кеш", function () {
      it("should return cashed value for strings", function () {
        expect(cachedFunc("foo", "bar")).to.be.equal("foobar");
      });
      it("should return cashed value for new strings", function () {
        expect(cachedFunc("foo", "baz")).to.be.equal("foobaz");
      });
      it("should return cashed value for emty strings", function () {
        expect(cachedFunc("", "")).to.be.equal("");
      });
    });
});
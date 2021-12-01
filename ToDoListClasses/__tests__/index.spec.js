const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe("dom testing", () => {
  let dom;
  beforeEach(function () {
    return JSDOM.fromFile("src/index.html").then((domjs) => {
      dom = domjs;
    });
  });
  it("should return textContent", () => {
    expect(
      dom.window.document.querySelector("h1").textContent
    ).toEqual("ToDoList");
  });

  it("should return textContent", () => {
    expect(
      dom.window.document.getElementById("add-task-btn").textContent
    ).toEqual("Add");
  });

  it("should return textContent", () => {
    expect(
      dom.window.document.getElementById("description-task").textContent
    ).toEqual("");
  });

  it("should return textContent", () => {
    expect(dom.window.document.querySelector("h2").textContent).toEqual(
      "Tasks for day"
    );
  });
    
  it("should change atribute checked", function () {
    require("../src/scripts/script");
  
    document.querySelector(".btn-complete").click();
  
    expect(document.querySelector(".btn-complete").checked).toBe(true);
  });
      
});

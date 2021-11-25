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
      dom.window.document.querySelector(".header__logo").textContent
    ).toEqual("Pictures Gallery");
  });

  it("should return textContent", () => {
    expect(
      dom.window.document.querySelector(".pagination button[data-number='1']")
        .textContent
    ).toEqual("1");
  });

  it("should return textContent", () => {
    expect(
      dom.window.document.querySelector(".pagination button[data-number='2']")
        .textContent
    ).toEqual("2");
  });

  it("should return textContent", () => {
    expect(
      dom.window.document.querySelector(".pagination button[data-number='3']")
        .textContent
    ).toEqual("3");
  });

  it("should return textContent", () => {
    expect(
      dom.window.document.querySelector(".pagination button[data-number='4']")
        .textContent
    ).toEqual("4");
  });

  it("should return textContent", () => {
    expect(
      dom.window.document.querySelector(".pagination button[data-number='5']")
        .textContent
    ).toEqual("5");
  });

  it("should return textContent", () => {
    expect(dom.window.document.querySelector(".prev").textContent).toEqual("«");
  });

  it("should return textContent", () => {
    expect(dom.window.document.querySelector(".next").textContent).toEqual("»");
  });

  it("should return textContent", () => {
    expect(dom.window.document.getElementById("close").textContent).toEqual(
      "X"
    );
  });
});

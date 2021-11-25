// import { printPictures, randomDogsElement } from "../src/script";

// describe("dom testing", () => {
//   beforeEach(function () {
//       document.body.innerHTML = `
//         <header class ="header container">
//             <div class="header__content">
//                 <a href="index.html" class="header__logo">Pictures Gallery</a>
//                 <div class="pagination">
//                     <button class="prev" disabled>&laquo;</button>
//                     <button data-number="1" class = "active">1</button>
//                     <button data-number="2">2</button>
//                     <button data-number="3">3</button>
//                     <button data-number="4">4</button>
//                     <button data-number="5">5</button>
//                     <button class="next">&raquo;</button>
//                 </div>
//             </div>
//         </header>
//         <div class="container">
//             <div class="full-picture" id="fullPictureBox">
//                 <img src="" id="fullPicture" alt="dog">
//                 <span id="close">X</span>
//             </div>
//             <div class="pictures">
                
//             </div>
//         </div>
//       `;
//   });
  
//   it('description', () => {
//       expect(document.querySelectorAll('.pagination button[data-number]').length).toBe(5);
//   });

//   it("description", () => {
//     printPictures();
//     const page2 = document
//       .querySelectorAll(".pagination button[data-number]")[1];
//     page2.click();
//     expect(page2.classList.contains('active')).toBe(true);
//   });
// });

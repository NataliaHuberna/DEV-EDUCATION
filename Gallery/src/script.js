import './style.css';

const fullPictureBox = document.getElementById("fullPictureBox");
const fullPicture = document.getElementById("fullPicture");
const randomDogsElement = document.querySelector(".pictures");
const pagination = document.querySelector(".pagination");
const buttons = document.querySelectorAll('button');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const close = document.getElementById('close');

let current = 1;

const API_URL = "https://dog.ceo/api/breeds/image/random/30";

function openFullPicture(pic) {
  fullPictureBox.style.display = "flex";
  fullPicture.src = pic;
}

function closeFullPicture() {
  fullPictureBox.style.display = "none";
}

function createTemplate(dogImage) {
    return `
            <div class="picture">
                <div class="picture__cover__inner">
                    <img src="${dogImage}" alt=""
                    class = "picture__cover" >
                </div>
            </div>
            `;
}

randomDogsElement.addEventListener('click', (e) => {
  const elem = e.target;
  if (elem.tagName === 'IMG') {
    openFullPicture(elem.src)
  }
});

close.addEventListener('click', closeFullPicture);

async function getRandomDogs() {
    const response = await fetch(API_URL);
    const json = await response.json();
    printPictures(json.message);
 }

export function printPictures(arrUrl) {
  pagination.addEventListener("click", (e) => {
    const button = e.target;

    if (button.classList.contains("prev")) {
      current--;
    } else if (button.classList.contains("next")) {
      current++;
    } else {
      current = +button.getAttribute("data-number");
    }

    buttons.forEach((button, index) => {
      button.classList.remove("active");
      button.disabled = false;
      if (index === current) button.classList.add("active");
    });

    if (current === 1) prevBtn.disabled = true;
    if (current === 5) nextBtn.disabled = true;
    
    createPictures(current);
  });

  function createPictures(current) {
    const pictures = arrUrl
                      .slice((current - 1) * 6, current * 6)
                      .map((elem) => {
                        return createTemplate(elem);
                      });
          
    randomDogsElement.innerHTML = pictures.join(' ');
  }

  createPictures(current);
}

getRandomDogs();


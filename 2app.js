let currentImgIndex = 0;
let previousImgIndex = 0;

const images = document.querySelectorAll(".images");
const next = document.querySelector(".next");

next.addEventListener("click", () => {
  //stuff will go here
  // Inside the event listener for our "next" class,
  // set previousImgIndex to currentImgIndex, and increment currentImgIndex by 1.
  previousImgIndex = currentImgIndex;

  if (currentImgIndex < images.length - 1) {
    currentImgIndex += 1;
  } else {
    return;
  }

  images[previousImgIndex].style.display = "none";
  images[currentImgIndex].style.display = "block";
});

const prev = document.querySelector(".prev");

prev.addEventListener("click", () => {
  previousImgIndex = currentImgIndex;

  currentImgIndex > 0
    ? (currentImgIndex -= 1)
    : (currentImgIndex = images.length - 1);

  images[previousImgIndex].style.display = "none";
  images[currentImgIndex].style.display = "block";
});

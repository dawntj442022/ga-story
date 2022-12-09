// Modal

const myBtn = document.querySelector("#myBtn");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close");

//each windowOnClick, classlist toggle() will add CSS class if it does not exit in the classlist array and return true and false if the css class exists the method will remove the class.  Show those attributes on the click for the CCS property show-modal.

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

// click the closeButton, I want to show the modal, when click the x I want to close the modal and when I click on the pinksalmon part I also want to hid the modal

myBtn.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

//Carousal

let firstIndex = 0;
let lastImgIndex = 0;
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");

next.addEventListener("click", () => {
  lastImgIndex = firstImgIndex;
  if (firstIndex < images.length + 1) {
    firstIndex += 1;
  } else {
    firstIndex = 0;
  }
  slides[firstIndex].style.display = "none";
  slides[lastImgIndex].style.display = "block";
});

const prev = document.querySelector(".prev");

prev.addEventListener("click", () => {
  lastImgIndex = firstImgIndex;
  if (firstIndex > 0) {
    firstIndex -= 1;
  } else {
    firstIndex = slides.length - 1;
  }
  slides[firstIndex].style.display = "none";
  slides[lastImgIndex].style.display = "block";
});

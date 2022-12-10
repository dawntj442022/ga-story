console.log("linked Correctly");

const synth = window.speechSynthesis;

let voices;

function loadVoices() {
  voices = synth.getVoices();
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    option.value = i;
    voiceSelect.appendChild(option);
  }
}

// in Google Chrome the voices are not ready on page load
if ("onvoiceschanged" in synth) {
  synth.onvoiceschanged = loadVoices;
} else {
  loadVoices();
}

function textToSpeech(text) {
  const utterThis = new SpeechSynthesisUtterance(text);
  utterThis.voice = voices[voiceSelect.value];
  synth.speak(utterThis);
}

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

let currentImgIndex = 0;
let previousImgIndex = 0;
const slides = document.querySelectorAll(".slide");
console.log(slides);
const next = document.querySelector("#next-slide");

next.addEventListener("click", () => {
  // we may want to pause the text to speech

  previousImgIndex = currentImgIndex;
  if (currentImgIndex < slides.length - 1) {
    currentImgIndex += 1;
  } else {
    return;
  }
  slides[currentImgIndex].style.display = "block";
  slides[previousImgIndex].style.display = "none";
  textToSpeech("I love your voice");
});

const prev = document.querySelector(".prev");

prev.addEventListener("click", () => {
  previousImgIndex = currentImgIndex;
  if (currentImgIndex > 0) {
    currentImgIndex -= 1;
  } else {
    return;
  }
  slides[currentImgIndex].style.display = "block";
  slides[previousImgIndex].style.display = "none";
});

console.log("linked Correctly");

class gods {
  constructor(name, power, captions) {
    this.name = name;
    this.power = power;
    this.captions = captions;
  }
}

const godsProstatis = new gods(
  "Prostatatis",
  "Protector",
  "I am the lord of the skys"
);
const godsOTheos = new gods(
  "O Theos tou Polemon",
  "male",
  "I am the god of WaR"
);
const godsOThea = new gods(
  "O Thea tou Nerou",
  "female",
  "I am the goddess of water"
);

class superHuman {
  constructor(name, role, captions) {
    this.name = name;
    this.role = role;
    this.captions = captions;
  }
}

const superHumanOfilia = new superHuman(
  "Ofilia",
  "servant",
  "I give my immortal servitude"
);

const synth = window.speechSynthesis;
let speech = new SpeechSynthesisUtterance();
let voices;
let voiceIndex = 6;

function loadVoices() {
  voices = synth.getVoices();
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    option.value = i;
    // voiceSelect.appendChild(option);
  }
}

if ("onvoiceschanged" in synth) {
  synth.onvoiceschanged = loadVoices;
} else {
  loadVoices();
}

function textToSpeech(text) {
  const utterThis = new SpeechSynthesisUtterance(text);
  utterThis.voice = voices[voiceIndex];
  const readCaptions = setInterval(15000);
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
  textToSpeech("p");
});

const prev = document.querySelector(".prev");

prev.addEventListener("click", () => {
  window.speechSynthesis.reset();
  previousImgIndex = currentImgIndex;
  if (currentImgIndex > 0) {
    currentImgIndex -= 1;
  } else {
    return;
  }
  textToSpeech(" p");
  slides[currentImgIndex].style.display = "block";
  slides[previousImgIndex].style.display = "none";
});

const reset = document.querySelector("#reset");

reset.addEventListener("click", () => {
  previousImgIndex = currentImgIndex;
  if (currentImgIndex > 0) {
    currentImgIndex = 0;
  } else {
    return;
  }
  textToSpeech(" p");
  slides[currentImgIndex].style.display = "block";
  slides[previousImgIndex].style.display = "none";
});

let speechText;

document.querySelector("#start").addEventListener("click", () => {
  //when we press starrt its wait 6 seconda before ==> this delay can be annoying for a user
  //the set interval doesnt stop ==> clear set interval
  speech.text = captions[0].innerText;
  window.speechSynthesis.speak(speech);
});

document.querySelector("#pause").addEventListener("click", () => {
  window.speechSynthesis.pause();
  console.log(pause);
});

document.querySelector("#resume").addEventListener("click", () => {
  window.speechSynthesis.resume();
});

// document.querySelector("#reset").addEventListener("click", () => {});

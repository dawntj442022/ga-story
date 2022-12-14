console.log("linked Correctly");

// Modal

const myBtn = document.querySelector("#myBtn");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

myBtn.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

//Carousal
const synth = window.speechSynthesis;
let speech = new SpeechSynthesisUtterance();
let currentImgIndex = 0;
let previousImgIndex = 0;
const slides = document.querySelectorAll(".slide");
const captions = document.querySelectorAll(".slide>p");
const next = document.querySelector("#next-slide");

next.addEventListener("click", () => {
  previousImgIndex = currentImgIndex;
  if (currentImgIndex < slides.length - 1) {
    currentImgIndex += 1;
  } else {
    return;
  }
  synth.cancel();
  slides[currentImgIndex].style.display = "block";
  slides[previousImgIndex].style.display = "none";
  textToSpeech(captions[currentImgIndex].innerText);
});

const prev = document.querySelector(".prev");

prev.addEventListener("click", () => {
  previousImgIndex = currentImgIndex;
  if (currentImgIndex > 0) {
    currentImgIndex -= 1;
  } else {
    return;
  }
  synth.cancel();
  textToSpeech(captions[currentImgIndex].innerText);
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
  synth.cancel();
  textToSpeech(captions[currentImgIndex].innerText);
  slides[currentImgIndex].style.display = "block";
  slides[previousImgIndex].style.display = "none";
});

//Speech

let voices;
let voiceIndex = 0;

function loadVoices() {
  voices = synth.getVoices();
  console.log(voices);
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    option.value = i;
  }
}

if ("onvoiceschanged" in synth) {
  synth.onvoiceschanged = loadVoices;
} else {
  loadVoices();
}

function textToSpeech(text) {
  speech.text = text;
  speech.voice = voices[voiceIndex];
  synth.speak(speech);
}

document.querySelector("#start").addEventListener("click", () => {
  textToSpeech(captions[0].innerText);
});

document.querySelector("#pause").addEventListener("click", () => {
  synth.pause();
  console.log(pause);
});

document.querySelector("#resume").addEventListener("click", () => {
  synth.resume();
});

//Class, instances and function

class gods {
  constructor(name, power, captions) {
    this.name = name;
    this.power = power;
    this.captions = captions;
  }
}

const godsonProstatis = {
  name: "Prostatatis",
  power: "Control the Wind",
  captions: "is the lord of the skys",
  character: function () {
    return this.name + "has the power of " + this.power + "; " + this.captions;
  },
};
document.getElementById("godson").innerHTML = godsonProstatis.character();

const godsOTheos = {
  name: "O Theos tou Polemon",
  power: "Strength and Strategy",
  captions: "is the god of WaR",
  character: function () {
    return (
      this.name + "has the power of" + " " + this.power + ";" + this.captions
    );
  },
};
document.getElementById("gods").innerHTML = godsOTheos.character();

const goddessOThea = {
  name: "O Thea tou Nerou",
  power: "Water",
  captions: "is the goddess of water",
  character: function () {
    return (
      this.name + "has the power over" + " " + this.power + ";" + this.captions
    );
  },
};

document.getElementById("goddess").innerHTML = goddessOThea.character();

class superHuman {
  constructor(name, role, captions) {
    this.name = name;
    this.role = role;
    this.captions = captions;
  }
}

const superHumanOfilia = {
  name: "Ofilia",
  role: "servant",
  captions: "who gave her immortal servitude to the gods",
  character: function () {
    return this.name + " " + this.role + " " + this.captions;
  },
};
document.getElementById("human").innerHTML = superHumanOfilia.character();

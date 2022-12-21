// / /*Carousel*/ const
// next = document.querySelector(".next");
//  let currentImgIndex = 0; let
// previousImgIndex = 0;
// const images = document.querySelectorAll(".image");

// next.addEventListener("click", () => { previousImgIndex = currentImgIndex + 1;

// images[previousImageIndex]; image.style.display = "none";
// images[currentImgIndex].style.display = "block";

// if(currentImgIndex <
// images.length - 1) { currentImgIndex += 1 }else { currentImgIndex = 0 } });

// previousImgIndex.addEventListener('click', () =>{
// images[previousImgIndex].style.display = 'none';
// images[currentImgIndex].style.display = 'block';

// if (currentImgIndex > 0) {
// currentImgIndex -= 1 } else { currentImgIndex = images.length - 1 }
// if(currentImgIndex < images.length - 1) { currentImgIndex += 1 }else {
// currentImgIndex = 0 } // after currentImgIndex < images.length - 1 ?
// currentImgIndex += 1 : currentImgIndex = 0 // multi-line currentImgIndex <
// images.length - 1 ? currentImgIndex += 1 : currentImgIndex = 0 ; } // //first
// slide image to set and call to display // let slideIndex = 1; //
// showSlides(slideIndex); // // Next/previous controls // function plusSlides(n) {
// // showSlides((slideIndex += n)); // } // // Thumbnail image controls //
// function currentSlide(n) { // showSlides((slideIndex = n)); // } // function
// showSlides(n) { // let slides = document.getElementsByClassName("mySlides"); //
// let dots = document.getElementsByClassName("dot"); // //if (n > slides.length)
// {slideIndex = 1} // //if (n < 1) {slideIndex = slides.length} // for (let i = 0;
// i < slides.length; i++) { // slides[i].style.display = "none"; // } // for (let
// i = 0; i < dots.length; i++) { // dots[i].className =
// dots[i].className.replace(" active", ""); // } // slides[slideIndex -
// 1].style.display = "block"; // dots[slideIndex - 1].className += " active"; //
// }}

// //declaring a new instance of JS speech API let speech = new
// SpeechSynthesisUtterance(); //assigning a language speech.lang = "en";
// speech.volume = 1; speech.rate = 1; //creating an empty array that will contain
// voices let voice = []; let speed = 15000; let voiceIndex = 6; // if (browserName
// === "Chrome") // speed = 15000; // voiceIndex = 6; //load voices asynchronously
// let voices; window.speechSynthesis.onvoiceschanged = () => { voices =
// window.speechSynthesis.getVoices(); speech.voice = voices[voiceIndex];
// console.log(voices); }; // window.addEventListener('DOMContentLoaded', (event)
// => { let next = document.querySelector(".next"); // let userAgent =
// navigator.userAgent // let browserName // if(userAgent.includes("Edg"))
// browserName = "Edge" // if(userAgent.includes("Chrome") &&
// !userAgent.includes("Edg")) browserName = "Chrome" // console.log(browserName)
// console.log("DOM fully loaded and parsed"); let captions =
// document.querySelectorAll("#captions p"); console.log(captions); let i = 1;
// const speechCompleted = () => { speech.text = captions[i].innerText;
// console.log(speech.text, i); window.speechSynthesis.speak(speech); i++;
// next.click(); // if (i > captions.length -1) { // clearInterval(readCaptions) //
// } }; document.querySelector("#start").addEventListener("click", () => { //when
// we press starrt its wait 6 seconda before ==> this delay can be annoying for a
// user //the set interval doesnt stop ==> clear set interval speech.text =
// captions[0].innerText; console.log(speech.text);
// window.speechSynthesis.speak(speech); const readCaptions =
// setInterval(speechCompleted, speed); //just enuogh to fully read the whole
// prompt });

// document.querySelector("#pause").addEventListener("click", () => {
// window.speechSynthesis.pause(); n.pause; console.log(pause); });
// document.querySelector("#resume").addEventListener("click", () => {
// window.speechSynthesis.resume(); });
// document.querySelector("#reset").addEventListener("click", () => {
// window.speechSynthesis.reset(); });

// /*Modal*/ // Get the modal const modal =
// document.getElementById("myModal"); // Get the button that opens the modal const
// btn = document.getElementById("myBtn"); // Get the
// <span>
//   element that closes the modal const span =
//   document.getElementsByClassName("close")[0]; // When the user clicks on the
//   button, open the modal btn.onclick = function () { modal.style.display =
//   "flex"; }; // When the user clicks on
//   <span>
//     (x), close the modal span.onclick = function () { modal.style.display =
//     "none"; }; // When the user clicks anywhere outside of the modal, close it
//     window.onclick = function (event) { if (event.target == modal) {
//     modal.style.display = "none"; } };
//   </span></span
// >

//   //</other code
//   # ga-story

// // const pause = document.getElementsByClassName("buttonPause")
// // const reset = document.getElementsByClassName("buttonReset")

// // var slides = document.querySelectorAll('#slides .slide');
// // var currentSlide = 0;
// // var slideInterval = setInterval(nextSlide,2000);

// // function nextSlide() {
// // slides[currentSlide].className = 'slide';
// // currentSlide = (currentSlide+1)%slides.length;
// // slides[currentSlide].className = 'slide showing';
// // }

// //const btn2 = document.querySelector("slide1").addEventListener("reset", mySlides)

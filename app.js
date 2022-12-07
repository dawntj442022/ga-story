/*Modal*/
// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


/*Carousel*/

//first slide image to set and call to display
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}

const play = document.getElementsByClassName("buttonPlay")
button.addEventListener("click", function(){
      if(slide.paused){
        slide.play();
        button.innerHTML = "Pause";
      } else {
       slide.pause();
        button.innerHTML = "Play";
      }
    }

// const pause = document.getElementsByClassName("buttonPause")
// const reset = document.getElementsByClassName("buttonReset")

// var slides = document.querySelectorAll('#slides .slide');
// var currentSlide = 0;
// var slideInterval = setInterval(nextSlide,2000);

// function nextSlide() {
//     slides[currentSlide].className = 'slide';
//     currentSlide = (currentSlide+1)%slides.length;
//     slides[currentSlide].className = 'slide showing';
// }

//const btn2 = document.querySelector("slide1").addEventListener("reset", mySlides)

/*create class*/

// class gods {
//     constructor (name, role){
//         this.name = name;
//         this.role = role;
//     }
// }

// let mygod1 = new god ("P", "king");
// let mygod2 = new god ("o" ,"son");

// class goddess {
//     constructor (name, role){
//         this.name = name;
//         this.power = role;
//     }
// }

// let mygoddess1 = new goddess ("L", "queen")

// class human {
//     constructor (name, role){
//         this.name = name;
//         this.role = role;
//     }
// }

// let myhuman = new human ("S", "servant")




// var button = document.getElementById("button");
// var audio = document.getElementById("player");
// button.addEventListener("click", function(){
//   if(audio.paused){
//     audio.play();
//     button.innerHTML = "Pause";
//   } else {
//     audio.pause();
//     button.innerHTML = "Play";
//   }
// });
)
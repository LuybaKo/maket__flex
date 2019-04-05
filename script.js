var slideIndex = 1;
showSlides(slideIndex);

var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function plusSlides2(k) {
  showSlides2(slideIndex2 += k);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function currentSlide2(k) {
  showSlides2(slideIndex2 = k);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }
  slides[slideIndex-1].style.display = "block"; 
}
function showSlides2(k) {
  var j;
  var slides2 = document.getElementsByClassName("navigation-slider__mySlides");
  if (k > slides2.length) {slideIndex2 = 1} 
    if (k < 1) {slideIndex2 = slides2.length}
    for (j = 0; j < slides2.length; j++) {
      slides2[j].style.display = "none"; 
    }
  slides2[slideIndex2-1].style.display = "block"; 
}
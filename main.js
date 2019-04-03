let slideIndex = 0;
carousel();

function carousel() {
  let x = document.getElementsByClassName("mySlides");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 3000); // Change image every 3 seconds
}

let slideIndex2 = 0;
carousel2();

function carousel2() {
  let x = document.getElementsByClassName("mySlides2");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex2++;
  if (slideIndex2 > x.length) {slideIndex2 = 1} 
  x[slideIndex2-1].style.display = "block"; 
  setTimeout(carousel2, 3000); // Change image every 3 seconds
}
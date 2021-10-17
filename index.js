const controlBullets = Array.from(document.getElementsByClassName('bullet'));

const slide = document.getElementById('slider');
let currentSlide = 0;


function _applyTransform(slideNum) {
  // Left side has a shift, starts from the last slide
  slide.style.transform = `translateX(-${(slideNum) * 100}%)`;
}

function applyTransformations() {
  _applyTransform(currentSlide);

  // Set selected in controls
  controlBullets.forEach(one => {
    one.classList.remove('selected');
  });
  controlBullets[currentSlide].classList.add('selected');
}

function selectSlide(slideNum) {
  currentSlide = slideNum;
  applyTransformations();
}


// Event listeners

controlBullets.forEach((one, index) => {
  one.addEventListener('click', () => {
    selectSlide(index);
  });
});

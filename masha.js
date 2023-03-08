const sliderContainer = document.querySelector('.slider-container');
const sliderImages = document.querySelector('.slider-images');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const imageCount = sliderImages.childElementCount;
let currentIndex = 0;

function resizeImages() {
  const containerWidth = sliderContainer.offsetWidth;
  const imageWidth = containerWidth / 4; // change this to adjust the number of images visible at once
  const imageHeight = sliderContainer.offsetHeight;
  sliderImages.style.width = `${imageCount * imageWidth}px`;
  sliderImages.style.height = `${imageHeight}px`;
  sliderImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  sliderImages.querySelectorAll('img').forEach(img => {
    img.style.width = `${imageWidth}px`;
    img.style.height = `${imageHeight}px`;
  });
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % imageCount;
  sliderImages.style.transform = `translateX(-${currentIndex * (sliderContainer.offsetWidth / 4)}px)`; // change this to adjust the number of images visible at once
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + imageCount) % imageCount;
  sliderImages.style.transform = `translateX(-${currentIndex * (sliderContainer.offsetWidth / 4)}px)`; // change this to adjust the number of images visible at once
}

resizeImages();
window.addEventListener('resize', resizeImages);
nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);
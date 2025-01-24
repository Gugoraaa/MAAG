const slider = document.getElementById('slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let index = 0;
const slides = slider.children.length;

let autoSlideInterval;


const moveSlider = () => {
  slider.style.transform = `translateX(-${index * 100}%)`;
};


const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    index = (index + 1) % slides; 
    moveSlider();
  }, 3000); 
};


const stopAutoSlide = () => {
  clearInterval(autoSlideInterval);
};

// Botón "Anterior"
prevButton.addEventListener('click', () => {
  stopAutoSlide(); 
  index = index <= 0 ? slides - 1 : index - 1; 
  moveSlider(); r
  startAutoSlide(); 
});

// Botón "Siguiente"
nextButton.addEventListener('click', () => {
  stopAutoSlide(); 
  index = index >= slides - 1 ? 0 : index + 1; 
  moveSlider(); 
  startAutoSlide(); 
});


startAutoSlide();

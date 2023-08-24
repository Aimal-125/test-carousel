let backBtn = document.querySelector("#btn1");
let forwardBtn = document.querySelector("#btn2");
let slides = document.querySelectorAll(".item");
let currentSlide = 0;
let maxSlide = slides.length - 1;

slides.forEach((slide, index) => {
	slide.style.transform = `translate(${index * 100}%)`;
});

forwardBtn.addEventListener("click", () => {
	if(currentSlide === maxSlide) {
		currentSlide = 0;
	} else {
		currentSlide++;
	}
	slides.forEach((slide, index) => {
		slide.style.transform = `translate(${100 * (index - currentSlide)}%)`;
	});
});

backBtn.addEventListener("click", () => {
	if(currentSlide === 0) {
		currentSlide = maxSlide;
	} else {
		currentSlide--;
	}
	slides.forEach((slide, index) => {
		slide.style.transform = `translate(${100 * (index - currentSlide)}%)`;
	});
});

let box = document.querySelector('.box'),
	range = document.querySelector('.range'),
	slider = document.querySelector('.slider');


box.addEventListener('mousedown', mouseDown);
function mouseDown() {
	document.addEventListener('mousemove', mouseMove);
	document.addEventListener('mouseup', mouseUp);
}
function mouseMove(event) {
	if (event.clientX - box.getBoundingClientRect().left - box.offsetWidth/2 > slide.step - 10) {
		slide.value += slide.step;
		if (slide.value > slide.max) {
			slide.value = slide.max;
		}
		box.style.left = slider.offsetWidth/slide.step + 'px';
		range.textContent = slide.value;

	}else if (event.clientX - box.getBoundingClientRect().left < -slide.step + 10) {
		slide.value -= slide.step;
		if (slide.value < slide.min) {
			slide.value = 0;
		}
		box.style.left = slider.offsetWidth/slide.step + 'px';
		range.textContent = slide.value;
	}

	
	
}
function mouseUp() {
	document.removeEventListener('mousemove', mouseMove);
}




box.ondragstart = function() {
	return false;
};



let slide = {
	max: 100,
	min: 0,
	value: 0,
	step: 10
}
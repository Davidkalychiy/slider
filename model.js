
let box = document.querySelector('.box'),
	range = document.querySelector('.range'),
	slider = document.querySelector('.slider');


box.addEventListener('mousedown', mouseDown);
function mouseDown() {
	document.addEventListener('mousemove', mouseMove);
	document.addEventListener('mouseup', mouseUp);
}
function mouseMove(event) {

	date.forEach(element => {
		if (event.clientX > element[0] - step_real && event.clientX < element[0] + step_real) {
			if (event.clientX <= slider.getBoundingClientRect().left) {
				box.style.left = 0 + 'px';
				range.textContent = slide.min;
				slide.value = slider.min;
			}else {
				box.style.left = element[0] - slider.getBoundingClientRect().left + 'px' ;
				slide.value = element[1];
				range.textContent = slide.value ;
			}
		}
	});


	
	
}
function mouseUp(event) {
	document.removeEventListener('mousemove', mouseMove);
}




range.ondragstart = function() {
	return false;
};
box.ondragstart = function() {
	return false;
};
slider.ondragstart = function() {
	return false;
};
document.ondragstart = function() {
	return false;
};


let slide = {
	max: 1000,
	min: 50,
	value: 150,
	step: 50
};
const step_real = (slider.offsetWidth-box.offsetWidth)/((slide.max-slide.min)/slide.step);
let date = [];
for (let k = slider.getBoundingClientRect().left, i = slide.min; i <= slide.max; i += slide.step, k+=step_real) {
	date.push([k,i]);
}
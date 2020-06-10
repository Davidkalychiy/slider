



let wrapper = document.querySelector('.wrapper'),
    changeHorScale_1 = document.getElementById('changeHorScale_1'),
    changeHorScale_2 = document.getElementById('changeHorScale_2'),
    changeHorScale_3 = document.getElementById('changeHorScale_3'),
    ver_1 = document.getElementById('ver_1'),
    hor_1 = document.getElementById('hor_1'),
    max_1 = document.getElementById('max_1'),
    min_1 = document.getElementById('min_1'),
    step_1 = document.getElementById('step_1'),
    showScale_1 = document.getElementById('showScale_1'),
    hideScale_1 = document.getElementById('hideScale_1'),
    showValue_1 = document.getElementById('showValue_1'),
    hideValue_1 = document.getElementById('hideValue_1'),
    ver_2 = document.getElementById('ver_2'),
    hor_2 = document.getElementById('hor_2'),
    max_2 = document.getElementById('max_2'),
    min_2 = document.getElementById('min_2'),
    step_2 = document.getElementById('step_2'),
    showScale_2 = document.getElementById('showScale_2'),
    hideScale_2 = document.getElementById('hideScale_2'),
    showValue_2 = document.getElementById('showValue_2'),
    hideValue_2 = document.getElementById('hideValue_2'),
    ver_3 = document.getElementById('ver_3'),
    hor_3 = document.getElementById('hor_3'),
    max_3 = document.getElementById('max_3'),
    min_3 = document.getElementById('min_3'),
    step_3 = document.getElementById('step_3'),
    showScale_3 = document.getElementById('showScale_3'),
    hideScale_3 = document.getElementById('hideScale_3'),
    showValue_3 = document.getElementById('showValue_3'),
    hideValue_3 = document.getElementById('hideValue_3');








































//view




























class scale {
    constructor(name_slider) {
        this.name_slider = name_slider;
        this.element = document.createElement('div');
    }
    render() {
        this.element.classList.add(this.name_slider);
        wrapper.append(this.element);
    }
    
}








let slider_vertical_1 = new scale('slider_vertical');




let slider_horizontal_1 = new scale('slider_horizontal');
slider_horizontal_1.render();


let slider_horizontal_2 = new scale('slider_horizontal');
slider_horizontal_2.render();


let slider_horizontal_3 = new scale('slider_horizontal');
slider_horizontal_3.render();








class underLine {
    constructor(parent) {
        this.parent = parent;
        this.element = document.createElement('div');
    }
    render(underLine_class) {
        this.element.classList.add(underLine_class);
        this.parent.append(this.element);
    }
}






let underLine_1 = new underLine(slider_horizontal_1.element);
underLine_1.render('slider_horizontal__underLine');

let underLine_2 = new underLine(slider_horizontal_2.element);
underLine_2.render('slider_horizontal__underLine');


let underLine_3 = new underLine(slider_horizontal_3.element);
underLine_3.render('slider_horizontal__underLine');
















class round {
    constructor(parent) {
        this.parent = parent;
        this.element = document.createElement('div');
    }
    render(round_class) {
        this.element.classList.add(round_class);
        this.parent.append(this.element);
    }
}







let round_1 = new round(slider_horizontal_1.element);
let round_2 = new round(slider_horizontal_2.element);
let round_3 = new round(slider_horizontal_3.element);
round_1.render('slider_horizontal__round');
round_2.render('slider_horizontal__round');
round_3.render('slider_horizontal__round');



















class value {
    constructor(parent) {
        this.parent = parent;
        this.element = document.createElement('div');
    }
    render(value_class) {
        this.element.classList.add(value_class);
        this.parent.append(this.element);
        
    }
}





let value_1 = new value(slider_vertical_1.element);
let value_2 = new value(slider_horizontal_1.element);









class move {
    constructor(round,scale,value,type_slider, underLine, inputValue) {
        this.round = round;
        this.value = value;
        this.scale = scale;
        this.underLine = underLine;
        this.type_slider = type_slider;
        this.inputValue = inputValue;
    }
    render(max,min,value_num,step) {

        this.slider = {
            max: +`${max}`,
            min: +`${min}`,
            value_num: +`${value_num}`,
            step: +`${step}`
        };

        let scale = this.scale,
            round = this.round,
            value = this.value,
            slider = this.slider,
            inputValue = this.inputValue,
            underLine = this.underLine,
            type_slider = this.type_slider;

        

            const step_real = (scale.offsetWidth-round.offsetWidth)/((slider.max-slider.min)/slider.step); 
            let date = [];
            for (let k = scale.getBoundingClientRect().left, i = slider.min; i <= slider.max; i += slider.step, k+=step_real) {
                date.push([k,i]);
            }

            






        if (type_slider == 'slider_vertical') {


            inputValue.addEventListener('change', changeScaleValue);
            
            function changeScaleValue() {
                date.forEach(i => {
                    if (i[1] == +inputValue.value) {
                        round.style.top = i[0] - scale.getBoundingClientRect().top + 'px';
                    }
                })
            }


            value.textContent = slider.value_num;
            round.addEventListener('mousedown', mouseDown);


            const step_real = (scale.offsetHeight-round.offsetHeight)/((slider.max-slider.min)/slider.step); 
            let date = [];
            for (let k = scale.getBoundingClientRect().top, i = slider.min; i <= slider.max; i += slider.step, k+=step_real) {
                date.push([k,i]);
            }

            date.forEach(element => {  
                let div = document.createElement('div');
                div.style.display = 'flex'
                div.style.justifyContent = 'center'
                div.style.alignItems = 'center'
                div.style.position = 'absolute'
                div.style.top = element[0] - scale.getBoundingClientRect().top + 'px'
                div.append(element[1]);
                div.style.width = '15px'
                div.style.height = '15px'
                underLine.append(div)
                div.style.userSelect = 'none'
            })

            scale.addEventListener('click', onClickScale);


            function mouseMove(event) {
       
                if(event.pageY <= scale.getBoundingClientRect().top) {
                    round.style.top= 0 + 'px';
                    // value.style.top = 0 + 'px';
                    slider.value_num = slider.min;
                    value.textContent = slider.value_num;
                    input.value = slider.value_num;
                }else if (event.pageY >= scale.getBoundingClientRect().top + scale.offsetHeight) {
                    round.style.top = date[date.length-1][0] - scale.getBoundingClientRect().top + 'px';
                    // value.style.top = date[date.length-1][0] - scale.getBoundingClientRect().top + 'px';
                    slider.value_num = slider.max;
                    value.textContent = slider.value_num;
                    inputValue.value = slider.value_num;
                }
                date.forEach(element => {
                    if (event.pageY > element[0] - step_real && event.pageY < element[0] + step_real) {
                        round.style.top = element[0] - scale.getBoundingClientRect().top + 'px' ;
                        slider.value_num = element[1];
                        value.textContent = element[1];
                        inputValue.value = slider.value_num;
                    }
                });
            }


            function onClickScale(event) {
                if(event.pageY <= scale.getBoundingClientRect().top) {
                    round.style.top = 0 + 'px';
                    value.style.top = 0 + 'px';
                    slider.value_num = slider.min;
                    value.textContent = slider.value_num;
                }else if (event.pageY >= scale.getBoundingClientRect().top + scale.offsetHeight) {
                    round.style.top = date[date.length-1][0] - scale.getBoundingClientRect().top + 'px';
                    value.style.top = date[date.length-1][0] - scale.getBoundingClientRect().top + 'px';
                    slider.value_num = slider.max;
                    value.textContent = slider.value_num;
                }
                date.forEach(element => {
                    if (event.pageY > element[0] - step_real/2 && event.pageY < element[0] + step_real/2) {
                        round.style.top = element[0] - scale.getBoundingClientRect().top + 'px' ;
                        value.style.top = element[0] - scale.getBoundingClientRect().top + 'px' ;
                        slider.value_num = element[1];
                        value.textContent = element[1] ;

                    }
                });
            }





            function mouseDown() {
                document.addEventListener('mousemove', mouseMove);
                document.addEventListener('mouseup', mouseUp);
            }
            



            
            function mouseUp() {
                document.removeEventListener('mousemove', mouseMove);
            }




        }else {


            inputValue.addEventListener('change', changeScaleValue);
            
            function changeScaleValue() {
                date.forEach(i => {
                    if (i[1] == +inputValue.value) {
                        round.style.left = i[0] - scale.getBoundingClientRect().left + 'px';
                    }
                })
            }
            value.textContent = slider.value_num;
            round.addEventListener('mousedown', mouseDown);


            scale.addEventListener('click', onClickScale);

            const step_real = (scale.offsetWidth-round.offsetWidth)/((slider.max-slider.min)/slider.step); 
            let date = [];
            for (let k = scale.getBoundingClientRect().left, i = slider.min; i <= slider.max; i += slider.step, k+=step_real) {
                date.push([k,i]);
            }
            date.forEach(element => {  
                let div = document.createElement('div');
                div.style.position = 'absolute'
                div.style.left = element[0] - scale.getBoundingClientRect().left + 'px'
                div.append(element[1]);
                div.style.width = '15px'
                div.style.textAlign = 'center'
                underLine.append(div)
                div.style.userSelect = 'none'
            })

            function mouseMove(event) {

                if(event.pageX <= scale.getBoundingClientRect().left) {
                    round.style.left = 0 + 'px';
                    // value.style.left = 0 + 'px';
                    slider.value_num = date[0][1];
                    value.textContent = slider.value_num;
                    inputValue.value = slider.value_num;
                }else if (event.pageX >= scale.getBoundingClientRect().left + scale.offsetWidth) {
                    round.style.left = date[date.length-1][0] - scale.getBoundingClientRect().left + 'px';
                    // value.style.left = date[date.length-1][0] - scale.getBoundingClientRect().left + 'px';
                    slider.value_num = date[date.length-1][1];
                    value.textContent = slider.value_num;
                    inputValue.value = slider.value_num;
                }
                date.forEach(element => {
                    if (event.pageX > element[0] - step_real && event.pageX < element[0] + step_real) {
                        round.style.left = element[0] - scale.getBoundingClientRect().left + 'px' ;
                        // value.style.left = element[0] - scale.getBoundingClientRect().left + 'px' ;
                        slider.value_num = element[1];
                        value.textContent = element[1] ;
                        
                        inputValue.value = slider.value_num;

                    }
                });
            }
            


            
            function onClickScale(event) {
                if(event.pageX <= scale.getBoundingClientRect().left) {
                    round.style.left = 0 + 'px';
                    // value.style.left = 0 + 'px';
                    slider.value_num = slider.min;
                    value.textContent = slider.value_num;
                }else if (event.pageX >= scale.getBoundingClientRect().left + scale.offsetWidth) {
                    round.style.left = date[date.length-1][0] - scale.getBoundingClientRect().left + 'px';
                    // value.style.left = date[date.length-1][0] - scale.getBoundingClientRect().left + 'px';
                    slider.value_num = slider.max;
                    value.textContent = slider.value_num;
                }
                date.forEach(element => {
                    if (event.pageX > element[0] - step_real/2 && event.pageX < element[0] + step_real/2) {
                        round.style.left = element[0] - scale.getBoundingClientRect().left + 'px' ;
                        // value.style.left = element[0] - scale.getBoundingClientRect().left + 'px' ;
                        slider.value_num = element[0];
                        value.textContent = element[1] ;

                    }
                });
            }





            function mouseDown() {
                document.addEventListener('mousemove', mouseMove);
                document.addEventListener('mouseup', mouseUp);
            }
            



            
            function mouseUp() {
                document.removeEventListener('mousemove', mouseMove);  
        }
    }

 


        
            
            
        
        

        this.value.ondragstart = function() {
            return false;
        };
        this.round.ondragstart = function() {
            return false;
        };
        this.scale.ondragstart = function() {
            return false;
        };
        document.ondragstart = function() {
            return false;
        };
    }
}
// round_1 = null





new move(round_1.element, slider_horizontal_1.element,'', 'slider_horizontal', underLine_1.element, changeHorScale_1).render(100,0,0,11)
new move(round_2.element, slider_horizontal_2.element,'', 'slider_horizontal', underLine_2.element, changeHorScale_2).render(100,0,0,7)
new move(round_3.element, slider_horizontal_3.element,'', 'slider_horizontal', underLine_3.element, changeHorScale_3).render(100,0,0,10)








// model

















//controller







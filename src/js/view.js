



let wrapper = document.querySelector('.wrapper'),
    changeVerScale = document.getElementById('changeVerScale'),
    changeHorScale = document.getElementById('changeHorScale');








































//view




























class scale {
    constructor(name_slider) {
        this.name_slider = name_slider;
        this.element = document.createElement('div');
    }
    render() {
        // this.element.style.width = '300px'
        // this.element.style.height = '300px'
        this.element.classList.add(this.name_slider);
        wrapper.append(this.element);
    }
    
}







// new scale('slider_horizontal', '.slider_horizontal').render();
// let scale_horizontal = new scale('slider_horizontal', '.slider_horizontal').scale;




let slider_vertical_1 = new scale('slider_vertical');
    // slider_vertical_2 = new scale('slider_vertical');
slider_vertical_1.render();
// slider_vertical_2.render();



let slider_horizontal_1 = new scale('slider_horizontal');
    // slider_horizontal_2 = new scale('slider_horizontal');
slider_horizontal_1.render();
// slider_horizontal_2.render();


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


let underLine_2 = new underLine(slider_vertical_1.element);
underLine_2.render('slider_vertical__underLine');













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







let round_1 = new round(slider_vertical_1.element);
let round_2 = new round(slider_horizontal_1.element);
round_1.render('slider_vertical__round')
round_2.render('slider_horizontal__round')



// let round_3 = new round(slider_horizontal_1.element.querySelector('.' + slider_horizontal_1.name_slider));
// let round_4 = new round(slider_horizontal_2.element.querySelector('.' + slider_horizontal_2.name_slider));
// round_3.render()
// round_4.render()

















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



// new value('.slider_horizontal', '.value').render();
// let value_horizontal = new value('.slider_horizontal', '.slider_horizontal__value').value;

let value_1 = new value(slider_vertical_1.element);
let value_2 = new value(slider_horizontal_1.element);
// value_1.render('slider_vertical__value');
// value_2.render('slider_horizontal__value');
// let value_vertical_1 = new value('.slider_vertical', '.slider_vertical__value').value;
// let value_vertical_2 = new value('.slider_vertical', '.slider_vertical__value').value;







class move {
    constructor(round,scale,value,type_slider, underLine) {
        this.round = round;
        this.value = value;
        this.scale = scale;
        this.underLine = underLine;
        this.type_slider = type_slider;
    }
    render(max,min,value_num,step) {

        this.slider = {
            max: +`${max}`,
            min: +`${min}`,
            value_num: +`${value_num}`,
            step: +`${step}`
        };

        // this.slider = {
        //     max: 1000,
        //     min: 10,
        //     value_num: 10,
        //     step: 10
        // };
 
        let scale = this.scale,
            round = this.round,
            value = this.value,
            slider = this.slider,
            underLine = this.underLine,
            type_slider = this.type_slider;

        

            const step_real = (scale.offsetWidth-round.offsetWidth)/((slider.max-slider.min)/slider.step); 
            let date = [];
            for (let k = scale.getBoundingClientRect().left, i = slider.min; i <= slider.max; i += slider.step, k+=step_real) {
                date.push([k,i]);
            }

            



        if (type_slider == 'slider_vertical') {


            changeVerScale.addEventListener('change', changeScaleValue);
            
            function changeScaleValue() {
                date.forEach(i => {
                    if (i[1] == +changeVerScale.value) {
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
                    changeVerScale.value = slider.value_num;
                }else if (event.pageY >= scale.getBoundingClientRect().top + scale.offsetHeight) {
                    round.style.top = date[date.length-1][0] - scale.getBoundingClientRect().top + 'px';
                    // value.style.top = date[date.length-1][0] - scale.getBoundingClientRect().top + 'px';
                    slider.value_num = slider.max;
                    value.textContent = slider.value_num;
                    changeVerScale.value = slider.value_num;
                }
                date.forEach(element => {
                    if (event.pageY > element[0] - step_real && event.pageY < element[0] + step_real) {
                        round.style.top = element[0] - scale.getBoundingClientRect().top + 'px' ;
                        // value.style.top = element[0] - scale.getBoundingClientRect().top + 'px' ;
                        slider.value_num = element[1];
                        value.textContent = element[1];
                        changeVerScale.value = slider.value_num;
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


            changeHorScale.addEventListener('change', changeScaleValue);
            
            function changeScaleValue() {
                date.forEach(i => {
                    if (i[1] == +changeHorScale.value) {
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
                    slider.value_num = slider.min;
                    value.textContent = slider.value_num;
                    changeHorScale.value = slider.value_num;
                }else if (event.pageX >= scale.getBoundingClientRect().left + scale.offsetWidth) {
                    round.style.left = date[date.length-1][0] - scale.getBoundingClientRect().left + 'px';
                    // value.style.left = date[date.length-1][0] - scale.getBoundingClientRect().left + 'px';
                    slider.value_num = slider.max;
                    value.textContent = slider.value_num;
                    changeHorScale.value = slider.value_num;
                }
                date.forEach(element => {
                    if (event.pageX > element[0] - step_real && event.pageX < element[0] + step_real) {
                        round.style.left = element[0] - scale.getBoundingClientRect().left + 'px' ;
                        // value.style.left = element[0] - scale.getBoundingClientRect().left + 'px' ;
                        slider.value_num = element[1];
                        value.textContent = element[1] ;
                        
                        changeHorScale.value = slider.value_num;

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








new move(round_1.element, slider_vertical_1.element,'', 'slider_vertical', underLine_2.element).render(100,0,0,20)
new move(round_2.element, slider_horizontal_1.element,'', 'slider_horizontal', underLine_1.element).render(100,0,0,10)










// model

















//controller



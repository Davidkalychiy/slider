



let wrapper = document.querySelector('.wrapper');









































//view


class scale {
    constructor(name_slider) {
        this.name_slider = name_slider;
        this.element = document.createElement('div');
    }
    render() {
        this.element.innerHTML =`
        <div class='${this.name_slider}'>
        </div>`;
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







let round_1 = new round(slider_vertical_1.element.querySelector('.' + slider_vertical_1.name_slider));
let round_2 = new round(slider_horizontal_1.element.querySelector('.' + slider_horizontal_1.name_slider));
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

let value_1 = new value(slider_vertical_1.element.querySelector('.' + slider_vertical_1.name_slider));
let value_2 = new value(slider_horizontal_1.element.querySelector('.' + slider_horizontal_1.name_slider));
value_1.render('slider_vertical__value');
value_2.render('slider_horizontal__value');
// let value_vertical_1 = new value('.slider_vertical', '.slider_vertical__value').value;
// let value_vertical_2 = new value('.slider_vertical', '.slider_vertical__value').value;







class move {
    constructor(round,scale,value,type_slider) {
        this.round = round;
        this.value = value;
        this.scale = scale;
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
            type_slider = this.type_slider;

        
        if (type_slider == 'slider_vertical') {



            value.textContent = slider.value_num;
            round.addEventListener('mousedown', mouseDown);




            function mouseMove(event) {
                console.log(slider.max)
                const step_real = (scale.offsetHeight-round.offsetHeight)/((slider.max-slider.min)/slider.step); 
                let date = [];
                for (let k = scale.getBoundingClientRect().top, i = slider.min; i <= slider.max; i += slider.step, k+=step_real) {
                    date.push([k,i]);
                }
                date.forEach(element => {
                    if (event.clientY > element[0] - step_real && event.clientY < element[0] + step_real) {
                    
                        if(event.clientY <= scale.getBoundingClientRect().top) {
                            round.style.top = 0 + 'px';
                            value.style.top = 0 + 'px';
                            slider.value_num = slider.min;
                            value.textContent = slider.value_num;
                        }else {
                            round.style.top = element[0] - scale.getBoundingClientRect().top + 'px' ;
                            value.style.top = element[0] - scale.getBoundingClientRect().top + 'px' ;
                            slider.value_num = element[0];
                            value.textContent = element[1] ;
                        }
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

            value.textContent = slider.value_num;
            round.addEventListener('mousedown', mouseDown);




            function mouseMove(event) {
                const step_real = (scale.offsetWidth-round.offsetWidth)/((slider.max-slider.min)/slider.step); 
                let date = [];
                for (let k = scale.getBoundingClientRect().left, i = slider.min; i <= slider.max; i += slider.step, k+=step_real) {
                    date.push([k,i]);
                }
                date.forEach(element => {
                    if (event.clientX > element[0] - step_real && event.clientX < element[0] + step_real) {
                    
                        if(event.clientX <= scale.getBoundingClientRect().left) {
                            round.style.left = 0 + 'px';
                            value.style.left = 0 + 'px';
                            slider.value_num = slider.min;
                            value.textContent = slider.value_num;
                        }else {
                            round.style.left = element[0] - scale.getBoundingClientRect().left + 'px' ;
                            value.style.left = element[0] - scale.getBoundingClientRect().left + 'px' ;
                            slider.value_num = element[0];
                            value.textContent = element[1] ;
                        }
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








new move(round_1.element, slider_vertical_1.element.querySelector('.' + slider_vertical_1.name_slider), value_1.element, 'slider_vertical').render(1000,100,100,100)
new move(round_2.element, slider_horizontal_1.element.querySelector('.' + slider_horizontal_1.name_slider), value_2.element, 'slider_horizontal').render(1000,10,10,10)










// model

















//controller




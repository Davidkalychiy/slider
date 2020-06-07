let wrapper = document.querySelector('.wrapper');
class scale {
    constructor(name_slider, scale) {
        this.name_slider = name_slider;
        this.scale = document.querySelector(scale);
    }
    render() {
        let div = document.createElement('div');
        div.innerHTML =`
        <div class='${this.name_slider}'>
        </div>`;
        wrapper.append(div);
    }
    
}


// new scale('slider_horizontal', '.slider_horizontal').render();
// let scale_horizontal = new scale('slider_horizontal', '.slider_horizontal').scale;
new scale('slider_vertical', '.slider_vertical').render();
let scale_vecrtical = new scale('slider_vertical', '.slider_vertical').scale;

class round {
    constructor(parentSelector,round) {
        this.parent = document.querySelector(parentSelector);
        this.round = document.querySelector(round);
    }
    render() {
        let round = document.createElement('div')
        round.classList.add('round');
        this.parent.append(round);
    }
}

// new round('.slider_horizontal', '.round').render();
// let round_horizontal = new round('.slider_horizontal', '.round').round;
new round('.slider_vertical', '.round').render();
let round_vertical = new round('.slider_vertical', '.round').round;
class value {
    constructor(parentSelector,value) {
        this.parent = document.querySelector(parentSelector);
        this.value = document.querySelector(value);
    }
    render() {
        let value = document.createElement('div');
        value.classList.add('value');
        this.parent.append(value);
    }
}


// new value('.slider_horizontal', '.value').render();
// let value_horizontal = new value('.slider_horizontal', '.value').value;

new value('.slider_vertical', '.value').render();
let value_vertical = new value('.slider_vertical', '.value').value;
class move {
    constructor(round,scale,value,slider) {
        this.round = round;
        this.value = value;
        this.scale = scale;
        this.slider = slider;

    }
    render() {
        this.slider = {
            max: 10000,
            min: 124,
            value: 150,
            step: 247
        };
        
        
        
        const step_real = (this.scale.offsetHeight-this.round.offsetHeight)/((this.slider.max-this.slider.min)/this.slider.step);
        let date = [];
        for (let k = this.scale.getBoundingClientRect().top, i = this.slider.min; i <= this.slider.max; i += this.slider.step, k+=step_real) {
            date.push([k,i]);
        }
        this.value.textContent = this.slider.min;
        
        this.round.addEventListener('mousedown', mouseDown);
        function mouseDown() {
            document.addEventListener('mousemove', mouseMove);
            document.addEventListener('mouseup', mouseUp);
        }
        
        let scale = this.scale,
            round = this.round,
            value = this.value,
            slider = this.slider;
        
        function mouseMove(event) {
            date.forEach(element => {
                if (event.clientY > element[0] - step_real && event.clientY < element[0] + step_real) {
                
                    if(event.clientY <= scale.getBoundingClientRect().top) {
                        round.style.top = 0 + 'px';
                        value.style.top = 0 + 'px';
                        value.textContent = slider.min;
                        slider.value = slider.min;
                    }else {
                        round.style.top = element[0] - scale.getBoundingClientRect().top + 'px' ;
                        value.style.top = element[0] - scale.getBoundingClientRect().top + 'px' ;
                        scale.value = element[1];
                        value.textContent = scale.value ;
                    }
                }
            });
        
        
            
            
        }
        function mouseUp(event) {
            document.removeEventListener('mousemove', mouseMove);
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


// new move(round_horizontal, scale_horizontal, value_horizontal).render();
new move(round_vertical, scale_vecrtical, value_vertical).render();
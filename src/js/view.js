



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












//model
function dateSlider(max,min,step,value) {
    return slider = {
        max: max,
        min: min,
        step: step,
        value: value
    }
}

let dateSLiderHor_1 = dateSlider(200,0,20,0);





















//view




























class slider {
    constructor(name_slider) {
        this.name_slider = name_slider;
        this.element = document.createElement('div');
    }
    render() {
        this.element.classList.add(this.name_slider);
        wrapper.append(this.element);
    }
    
}













let slider_horizontal_1 = new slider('slider_horizontal');
slider_horizontal_1.render();


// let slider_vertical_1 = new scale('slider_vertical');
// slider_vertical_1.render();
// slider_vertical_1.element.style.display = 'none'

// let slider_horizontal_2 = new scale('slider_horizontal');
// slider_horizontal_2.render();



// let slider_vertical_2 = new scale('slider_vertical');
// slider_vertical_2.render();

// slider_vertical_2.element.style.display = 'none'

// let slider_horizontal_3 = new scale('slider_horizontal');
// slider_horizontal_3.render();



// let slider_vertical_3 = new scale('slider_vertical');
// slider_vertical_3.render();


// slider_vertical_3.element.style.display = 'none'













class scale {
    constructor(parent) {
        this.parent = parent;
        this.element = document.createElement('div');
    }
    render(underLine_class) {
        this.element.classList.add(underLine_class);
        this.parent.append(this.element);
    }
}






let scaleHor_1 = new scale(slider_horizontal_1.element);
scaleHor_1.render('slider_horizontal__underLine');

// let underLineHor_2 = new underLine(slider_horizontal_2.element);
// underLineHor_2.render('slider_horizontal__underLine');


// let underLineHor_3 = new underLine(slider_horizontal_3.element);
// underLineHor_3.render('slider_horizontal__underLine');



// let underLineVer_1 = new underLine(slider_vertical_1.element);
// underLineVer_1.render('slider_vertical__underLine');
// underLineVer_1.element.style.display = 'none'
// let underLineVer_2 = new underLine(slider_vertical_2.element);
// underLineVer_2.render('slider_vertical__underLine');
// underLineVer_2.element.style.display = 'none'
// let underLineVer_3 = new underLine(slider_vertical_3.element);
// underLineVer_3.render('slider_vertical__underLine');
// underLineVer_3.element.style.display = 'none'













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







let roundHor_1 = new round(slider_horizontal_1.element);
roundHor_1.render('slider_horizontal__round');
// let roundHor_2 = new round(slider_horizontal_2.element);
// let roundHor_3 = new round(slider_horizontal_3.element);
// roundHor_1.render('slider_horizontal__round');
// roundHor_2.render('slider_horizontal__round');
// roundHor_3.render('slider_horizontal__round');

// let roundVer_1 = new round(slider_vertical_1.element);
// let roundVer_2 = new round(slider_vertical_2.element);
// let roundVer_3 = new round(slider_vertical_3.element);
// roundVer_1.render('slider_vertical__round');
// roundVer_1.element.style.display = 'none'
// roundVer_2.render('slider_vertical__round');
// roundVer_2.element.style.display = 'none'
// roundVer_3.render('slider_vertical__round');
// roundVer_3.element.style.display = 'none'


















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





let valueHor_1 = new value(slider_horizontal_1.element);
valueHor_1.render('slider_horizontal__value');
// let valueHor_2 = new value(slider_horizontal_2.element);
// valueHor_2.render('slider_horizontal__value');
// let valueHor_3 = new value(slider_horizontal_3.element);
// valueHor_3.render('slider_horizontal__value')
// let valueVer_1 = new value(slider_vertical_1.element);
// valueVer_1.render('slider_vertical__value');
// valueVer_1.element.style.display = 'none'
// let valueVer_2 = new value(slider_vertical_2.element);
// valueVer_2.render('slider_vertical__value');
// valueVer_2.element.style.display = 'none'
// let valueVer_3 = new value(slider_vertical_3.element);
// valueVer_3.render('slider_vertical__value');
// valueVer_3.element.style.display = 'none'









            

function moveLogic(slider,round,value,dateSlider,inputValue,scale,typeSlider) {
    if (typeSlider == 'sliderHor') {
        var parSlider = slider.element.offsetWidth,
            parRound = round.element.offsetWidth,
            posSlider = slider.element.getBoundingClientRect().left,
            posRound = 'round.element.style.left',
            posValue = 'value.element.style.left';
            console.log(posRound)
    }
    const stepReal = (parSlider-parRound)/((dateSlider.max-dateSlider.min)/dateSlider.step); 
    let date = [];
    for (let k = posSlider, i = dateSlider.min; i <= dateSlider.max; i += dateSlider.step, k+=stepReal) {
        date.push([k,i]);
    }
    
    
    
    inputValue.addEventListener('change', changeScaleValue);
    
    function changeScaleValue() {
        date.forEach(i => {
            if (i[1] == +inputValue.value) {
                posRound = i[0] - posSlider + 'px';
                posValue = i[0] - posSlider + 'px';
                value.element.textContent = i[1];
            }
        })
    }
    
    
    
    
    value.element.textContent = dateSlider.value;
    
    
    
    
    
    
    round.element.addEventListener('mousedown', mouseDown);
    
    
    slider.element.addEventListener('click', onClickScale);
    
    
    
    function onClickScale(event) {
        if(event.pageX <= posSlider) {
            posRound = 0 + 'px'
            posValue = 0 + 'px'
            dateSlider.value = slider.min;
            value.element.textContent = dateSlider.value;
            inputValue.value = dateSlider.value;
        }else if (event.pageX >= posSlider + parSlider) {
            posRound = date[date.length-1][0] - posSlider + 'px';
            posValue = date[date.length-1][0] - posSlider + 'px';
            slider.element.value = dateSlider.max;
            value.element.textContent = dateSlider.value;
            inputValue.value = dateSlider.value;
        }else{
            date.forEach(element => {
                if (event.pageX > element[0] - stepReal/2 && event.pageX < element[0] + stepReal/2) {
                    posRound = element[0] - posSlider + 'px' ;
                    posValue = element[0] - posSlider + 'px' ;
                    dateSlider.value = element[1];
                    value.element.textContent = element[1];
                    inputValue.value = dateSlider.value;
            
                }
            });
        }
    }
    
    
    

    date.forEach(element => {  
        let div = document.createElement('div');
        div.style.position = 'absolute'
        div.style.left = element[0] - slider.element.getBoundingClientRect().left + 'px'
        div.append(element[1]);
        div.style.width = '15px'
        div.style.textAlign = 'center'
        scale.element.append(div)
        div.style.userSelect = 'none'
    })

    function mouseDown() {
        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', mouseUp);
    }
        
    
    
    
        
    function mouseUp() {
        document.removeEventListener('mousemove', mouseMove);  
    }

    
    function mouseMove(event) {
    
        if(event.pageX <= posSlider) {
            posRound = 0 + 'px';
            posValue = 0 + 'px';
            dateSlider.value = date[0][1];
            value.element.textContent = dateSlider.value;
            inputValue.value = dateSlider.value;
        }else if (event.pageX >= posSlider + slider.element.offsetWidth) {
            posRound = date[date.length-1][0] - posSlider + 'px';
            posValue = date[date.length-1][0] - posSlider + 'px';
            dateSlider.value = date[date.length-1][1];
            value.element.textContent = dateSlider.value;
            inputValue.value = dateSlider.value;
        }
        date.forEach(element => {
            if (event.pageX > element[0] - stepReal && event.pageX < element[0] + stepReal) {
                posRound = element[0] - posSlider + 'px' ;
                posValue = element[0] - posSlider + 'px' ;
                dateSlider.value = element[1];
                value.element.textContent = element[1];
                inputValue.value = dateSlider.value;
    
            }
        });

    }
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
        
        
    
    
    
    // this.value.ondragstart = function() {
    //     return false;
    // };
    // this.round.ondragstart = function() {
    //     return false;
    // };
    // this.scale.ondragstart = function() {
    //     return false;
    // };
    // document.ondragstart = function() {
    //     return false;
    // };
}








moveLogic(slider_horizontal_1,roundHor_1,valueHor_1,dateSLiderHor_1,changeHorScale_1,scaleHor_1,'sliderHor')





// model

















//controller




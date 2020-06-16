



let wrapper = document.querySelector('.wrapper'),
    changeHorScale_1 = document.getElementById('changeHorScale_1'),
    changeHorScale_2 = document.getElementById('changeHorScale_2'),
    changeHorScale_3 = document.getElementById('changeHorScale_3'),
    ver_1 = document.getElementById('ver_1'),
    hor_1 = document.getElementById('hor_1'),
    max_1 = document.getElementById('max_1'),
    min_1 = document.getElementById('min_1'),
    step_1 = document.getElementById('step_1'),
    value_1 = document.getElementById('value_1'),
    showScale_1 = document.getElementById('showScale_1'),
    hideScale_1 = document.getElementById('hideScale_1'),
    showValue_1 = document.getElementById('showValue_1'),
    hideValue_1 = document.getElementById('hideValue_1'),
    ver_2 = document.getElementById('ver_2'),
    hor_2 = document.getElementById('hor_2'),
    max_2 = document.getElementById('max_2'),
    min_2 = document.getElementById('min_2'),
    step_2 = document.getElementById('step_2'),
    value_2 = document.getElementById('value_1'),
    showScale_2 = document.getElementById('showScale_2'),
    hideScale_2 = document.getElementById('hideScale_2'),
    showValue_2 = document.getElementById('showValue_2'),
    hideValue_2 = document.getElementById('hideValue_2'),
    ver_3 = document.getElementById('ver_3'),
    hor_3 = document.getElementById('hor_3'),
    max_3 = document.getElementById('max_3'),
    min_3 = document.getElementById('min_3'),
    step_3 = document.getElementById('step_3'),
    value_3 = document.getElementById('value_1'),
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
let dateSLiderVer_1 = dateSlider(100,0,10,0);






    





















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
slider_horizontal_1.element.classList.add('show')

let slider_vertical_1 = new slider('slider_vertical');
slider_vertical_1.render();
slider_vertical_1.element.classList.add('hide')

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







var roundHor_1 = new round(slider_horizontal_1.element);
roundHor_1.render('slider_horizontal__round');
// let roundHor_2 = new round(slider_horizontal_2.element);
// let roundHor_3 = new round(slider_horizontal_3.element);
// roundHor_1.render('slider_horizontal__round');
// roundHor_2.render('slider_horizontal__round');
// roundHor_3.render('slider_horizontal__round');

var roundVer_1 = new round(slider_vertical_1.element);
// let roundVer_2 = new round(slider_vertical_2.element);
// let roundVer_3 = new round(slider_vertical_3.element);
roundVer_1.render('slider_vertical__round');
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
let valueVer_1 = new value(slider_vertical_1.element);
valueVer_1.render('slider_vertical__value');
// valueVer_1.element.style.display = 'none'
// let valueVer_2 = new value(slider_vertical_2.element);
// valueVer_2.render('slider_vertical__value');
// valueVer_2.element.style.display = 'none'
// let valueVer_3 = new value(slider_vertical_3.element);
// valueVer_3.render('slider_vertical__value');
// valueVer_3.element.style.display = 'none'
 














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


let scaleVer_1 = new scale(slider_vertical_1.element);
scaleVer_1.render('slider_vertical__underLine');








// function creaderDiv(typeSlider,slider,round,dateSlider,scale) {
//     if (typeSlider == 'sliderHor') {
//         var parSlider = slider.element.offsetWidth,
//             parRound = round.element.offsetWidth,
//             posSlider = slider.element.getBoundingClientRect().left;
//     }else if (typeSlider == 'sliderVer') {
//         var parSlider = slider.element.offsetHeight
//             parRound = round.element.offsetHeight,
//             posSlider = slider.element.getBoundingClientRect().top;
//     }
//     const stepReal = (parSlider-parRound)/((dateSlider.max-dateSlider.min)/dateSlider.step); 
//     let date = [];
//     for (let k = posSlider, i = dateSlider.min; i <= dateSlider.max; i += dateSlider.step, k+=stepReal) {
//         date.push([k,i]);
//     }
//     date.forEach(element => {  
//         let div = document.createElement('div');
//         div.setAttribute('id', typeSlider + element[1])
//         div.style.position = 'absolute'
//         if (typeSlider == 'sliderHor') {
//             div.style.left = element[0] - posSlider + 'px'
//         }else if (typeSlider == 'sliderVer') {
//             div.style.top = element[0] - posSlider + 'px'
//         }
        
//         // div.append(element[1]);
//         div.style.width = '15px'
//         div.style.textAlign = 'center'
//         scale.element.append(div)
//         div.style.userSelect = 'none'
//     })
// }













// creaderDiv('sliderHor',slider_horizontal_1,roundHor_1,dateSLiderHor_1,scaleHor_1)
// creaderDiv('sliderVer',slider_vertical_1,roundVer_1,dateSLiderHor_1,scaleVer_1)







































function moveLogic(slider,round,value,dateSlider,inputValue,scale,typeSlider) {
    if (typeSlider == 'sliderHor') {
        var parSlider = slider.element.offsetWidth,
            parRound = round.element.offsetWidth,
            posSlider = slider.element.getBoundingClientRect().left;
    }else if (typeSlider == 'sliderVer') {
        var parSlider = slider.element.offsetHeight,
            parRound = round.element.offsetHeight,
            posSlider = slider.element.getBoundingClientRect().top;
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
                if (typeSlider == 'sliderHor') {
                    round.element.style.left = i[0] - posSlider + 'px';
                    value.element.style.left = i[0] - posSlider + 'px';
                    value.element.textContent = i[1];
                }else if (typeSlider == 'sliderVer') {
                    round.element.style.top = i[0] - posSlider + 'px';
                    value.element.style.top = i[0] - posSlider + 'px';
                    value.element.textContent = i[1];
                }

                
            }
        })
    }
    
    
    
    
    value.element.textContent = dateSlider.value;
    
    
    
    
    
    
    round.element.addEventListener('mousedown', mouseDown);
    
    
    slider.element.addEventListener('click', onClickScale);
    
    
    
    function onClickScale(event) {
        if((event.pageX <= posSlider && typeSlider == 'sliderHor') || (event.pageY <= posSlider && typeSlider == 'sliderVer')) {
            if (typeSlider == 'sliderHor') {
                round.element.style.left = 0 + 'px';
                value.element.style.left = 0 + 'px';
            }else if (typeSlider == 'sliderVer') {
                round.element.style.top = 0 + 'px';
                value.element.style.top = 0 + 'px';
            }
            dateSlider.value = slider.min;
            value.element.textContent = dateSlider.value;
            inputValue.value = dateSlider.value;
        }else if ((event.pageX >= posSlider + parSlider && typeSlider == 'sliderHor') || (event.pageY >= posSlider + parSlider && typeSlider == 'sliderVer')) {
            if (typeSlider == 'sliderHor') {
                round.element.style.left = date[date.length-1][0] - posSlider + 'px';
                value.element.style.left = date[date.length-1][0] - posSlider + 'px';
            }else if (typeSlider == 'sliderVer') {
                round.element.style.top = date[date.length-1][0] - posSlider + 'px';
                value.element.style.top = date[date.length-1][0] - posSlider + 'px';
            }
            slider.element.value = dateSlider.max;
            value.element.textContent = dateSlider.value;
            inputValue.value = dateSlider.value;
        }else{
            date.forEach(element => {
                if ((event.pageX > element[0] - stepReal/2 && event.pageX < element[0] + stepReal/2 && typeSlider == 'sliderHor') || event.pageY > element[0] - stepReal/2 && event.pageY < element[0] + stepReal/2 && typeSlider == 'sliderVer') {
                    if (typeSlider == 'sliderHor') {
                        round.element.style.left = element[0] - posSlider + 'px' ;
                        value.element.style.left = element[0] - posSlider + 'px' ;
                    }else {
                        round.element.style.top = element[0] - posSlider + 'px' ;
                        value.element.style.top = element[0] - posSlider + 'px' ;
                    }
                    dateSlider.value = element[1];
                    value.element.textContent = element[1];
                    inputValue.value = dateSlider.value;
            
                }
            });
        }
    }
    
    
    



    function mouseDown() {
        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', mouseUp);
    }
        
    
    
    
        
    function mouseUp() {
        document.removeEventListener('mousemove', mouseMove);  
    }

    
    function mouseMove(event) {
        if((event.pageX <= posSlider && typeSlider == 'sliderHor') || (event.pageY <= posSlider && typeSlider == 'sliderVer')) {
            if (typeSlider == 'sliderHor') {
                round.element.style.left = 0 + 'px';
                value.element.style.left = 0 + 'px';
                dateSlider.value = date[0][1];
                value.element.textContent = dateSlider.value;
                inputValue.value = dateSlider.value;
            }else {
                round.element.style.top = 0 + 'px';
                value.element.style.top = 0 + 'px';
                dateSlider.value = date[0][1];
                value.element.textContent = dateSlider.value;
                inputValue.value = dateSlider.value;
            }

        }else if (((event.pageX >= posSlider + parSlider) && (typeSlider == 'sliderHor')) || ((event.pageY >= posSlider + parSlider) && (typeSlider == 'sliderVer'))) {
            if (typeSlider == 'sliderHor') {
                round.element.style.left = date[date.length-1][0] - posSlider + 'px';
                value.element.style.left = date[date.length-1][0] - posSlider + 'px';
                dateSlider.value = date[date.length-1][1];
                value.element.textContent = dateSlider.value;
                inputValue.value = dateSlider.value;
            }else {
                round.element.style.top = date[date.length-1][0] - posSlider + 'px';
                value.element.style.top = date[date.length-1][0] - posSlider + 'px';
                dateSlider.value = date[date.length-1][1];
                value.element.textContent = dateSlider.value;
                inputValue.value = dateSlider.value;
            }

        }
        date.forEach(element => {
            if (((event.pageX > element[0] - stepReal) && (event.pageX < element[0] + stepReal) && (typeSlider == 'sliderHor')) || ((event.pageY > element[0] - stepReal) && (event.pageY < element[0] + stepReal) && (typeSlider == 'sliderVer'))) {
                if (typeSlider == 'sliderHor') {
                    round.element.style.left = element[0] - posSlider + 'px' ;
                    value.element.style.left = element[0] - posSlider + 'px' ;
                    dateSlider.value = element[1];
                    value.element.textContent = element[1];
                    inputValue.value = dateSlider.value;
                }else if(typeSlider == 'sliderVer') {
                    round.element.style.top = element[0] - posSlider + 'px' ;
                    value.element.style.top = element[0] - posSlider + 'px' ;
                    dateSlider.value = element[1];
                    value.element.textContent = element[1];
                    inputValue.value = dateSlider.value;
                }

    
            }
        });

    }

    // for (let i = 0; i <= 100;i++) {
    //     let div = document.getElementById(typeSlider + i);
    //     div.textContent = '';
    // }

    // const valueStep = Math.round(100/((dateSlider.max - dateSlider.min)/dateSlider.step));

    // if ((dateSlider.max - dateSlider.min)/dateSlider.step <= 20) {

    //     let fuck = [];
    //     for (let k = 0, i = dateSlider.min; i <= dateSlider.max; i += dateSlider.step, k+=valueStep) {
    //         fuck.push([k,i]);
    //     }
    //     fuck.forEach(element => {  
    //         let div = document.getElementById(typeSlider + element[0])
    //         div.textContent = element[1];
    //     })
    // }
    if (typeSlider == 'sliderHor') {
        console.log('hor')
        date.forEach(element => {  
            let div = document.createElement('div');
            div.setAttribute('id', 'sliderHor' + element[1]);
            div.style.position = 'absolute'
            div.style.left = element[0] - slider.element.getBoundingClientRect().left + 'px'
            div.append(element[1]);
            div.style.width = '15px'
            div.style.textAlign = 'center'
            scale.element.append(div)
            div.style.userSelect = 'none'
        })
    } else if (typeSlider == 'sliderVer') {
        console.log('ver')
        date.forEach(element => {  
            let div = document.createElement('div');
            div.setAttribute('id', 'sliderVer' + element[1]);
            div.style.position = 'absolute'
            div.style.top = element[0] - slider.element.getBoundingClientRect().top + 'px'
            div.append(element[1]);
            div.style.width = '15px'
            div.style.textAlign = 'center'
            scale.element.append(div)
            div.style.userSelect = 'none'
        }) 
    }


    inputValue.value = dateSlider.value

    max_1.value = dateSlider.max;
    min_1.value = dateSlider.min;
    step_1.value = dateSlider.step;




    
    
    
    
    
    
    
    
    
    
    
    
        
        
    
    
    
    value.element.ondragstart = function() {
        return false;
    };
    round.element.ondragstart = function() {
        return false;
    };
    scale.element.ondragstart = function() {
        return false;
    };
    document.ondragstart = function() {
        return false;
    };
}


















moveLogic(slider_horizontal_1,roundHor_1,valueHor_1,dateSLiderHor_1,changeHorScale_1,scaleHor_1,'sliderHor')
moveLogic(slider_vertical_1,roundVer_1,valueVer_1,dateSLiderVer_1,changeHorScale_1,scaleVer_1,'sliderVer')





//controller

function removerDiv(slider,round,dateSLider,typeSlider) {
    if (typeSlider == 'sliderHor') {
        var parSlider = slider.element.offsetWidth,
            parRound = round.element.offsetWidth,
            posSlider = slider.element.getBoundingClientRect().left;
    }else if (typeSlider == 'sliderVer') {
        var parSlider = slider.element.offsetHeight,
            parRound = round.element.offsetHeight,
            posSlider = slider.element.getBoundingClientRect().top;
    }
    const stepReal = (parSlider-parRound)/((dateSLider.max-dateSLider.min)/dateSLider.step); 
    let date = [];
    for (let k = posSlider, i = dateSLider.min; i <= dateSLider.max; i += dateSLider.step, k+=stepReal) {
        date.push([k,i]);
    }
    date.forEach(i => {
        let div = document.getElementById(typeSlider + i[1]);
        div.remove();
    })
}






// let verScale = setInterval(() => {
//     if (ver_1.checked == true) {
//         moveLogic(slider_vertical_1,roundVer_1,valueVer_1,dateSLiderVer_1,changeHorScale_1,scaleVer_1,'sliderVer')
//         clearInterval(verScale);
        
//     }    
// }, 1);




ver_1.addEventListener('change', ver);
hor_1.addEventListener('change', hor);

function hor() {
    
    slider_horizontal_1.element.style.display = 'flex';
    slider_vertical_1.element.style.display = 'none';
    removerDiv(slider_horizontal_1,roundHor_1,dateSLiderHor_1,'sliderHor');
    moveLogic(slider_horizontal_1,roundHor_1,valueHor_1,dateSLiderHor_1,changeHorScale_1,scaleHor_1,'sliderHor')
    max_1.addEventListener('change', () => {
        removerDiv(slider_horizontal_1,roundHor_1,dateSLiderHor_1,'sliderHor');
        dateSLiderHor_1.max = +max_1.value;
        moveLogic(slider_horizontal_1,roundHor_1,valueHor_1,dateSLiderHor_1,changeHorScale_1,scaleHor_1,'sliderHor')
    })
    
    
    min_1.addEventListener('change', () => {
        removerDiv(slider_horizontal_1,roundHor_1,dateSLiderHor_1,'sliderHor');
        dateSLiderHor_1.min = +min_1.value;
        moveLogic(slider_horizontal_1,roundHor_1,valueHor_1,dateSLiderHor_1,changeHorScale_1,scaleHor_1,'sliderHor')
    })
    
    
    step_1.addEventListener('change', () => {
        removerDiv(slider_horizontal_1,roundHor_1,dateSLiderHor_1,'sliderHor');
        dateSLiderHor_1.step = +step_1.value;
        moveLogic(slider_horizontal_1,roundHor_1,valueHor_1,dateSLiderHor_1,changeHorScale_1,scaleHor_1,'sliderHor')
    })
    
    
    value_1.addEventListener('change', () => {
        removerDiv(slider_horizontal_1,roundHor_1,dateSLiderHor_1,'sliderHor');
        dateSLiderHor_1.value = +value_1.value;
        moveLogic(slider_horizontal_1,roundHor_1,valueHor_1,dateSLiderHor_1,changeHorScale_1,scaleHor_1,'sliderHor')
    })
    
}
function ver() {
    slider_horizontal_1.element.style.display = 'none';
    slider_vertical_1.element.style.display = 'flex';
    removerDiv(slider_vertical_1,roundVer_1,dateSLiderVer_1,'sliderVer')
    moveLogic(slider_vertical_1,roundVer_1,valueVer_1,dateSLiderVer_1,changeHorScale_1,scaleVer_1,'sliderVer')
    max_1.addEventListener('change', () => {
        removerDiv(slider_vertical_1,roundVer_1,dateSLiderVer_1,'sliderVer')
        dateSLiderVer_1.max = +max_1.value;
        moveLogic(slider_vertical_1,roundVer_1,valueVer_1,dateSLiderVer_1,changeHorScale_1,scaleVer_1,'sliderVer')
    })
    
    
    min_1.addEventListener('change', () => {
        removerDiv(slider_vertical_1,roundVer_1,dateSLiderVer_1,'sliderVer')
        dateSLiderVer_1.min = +min_1.value;
        moveLogic(slider_vertical_1,roundVer_1,valueVer_1,dateSLiderVer_1,changeHorScale_1,scaleVer_1,'sliderVer')
    })
    
    
    step_1.addEventListener('change', () => {
        removerDiv(slider_vertical_1,roundVer_1,dateSLiderVer_1,'sliderVer')
        dateSLiderVer_1.step = +step_1.value;
        moveLogic(slider_vertical_1,roundVer_1,valueVer_1,dateSLiderVer_1,changeHorScale_1,scaleVer_1,'sliderVer')
    })
    
    
    value_1.addEventListener('change', () => {
        removerDiv(slider_vertical_1,roundVer_1,dateSLiderVer_1,'sliderVer')
        dateSLiderVer_1.value = +value_1.value;
        moveLogic(slider_vertical_1,roundVer_1,valueVer_1,dateSLiderVer_1,changeHorScale_1,scaleVer_1,'sliderVer')
    })
    
    
}
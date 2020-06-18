



let wrapper = document.querySelector('.wrapper'),
    changeValue_1 = document.getElementById('changeValue_1'),
    changeValue_2 = document.getElementById('changeValue_2'),
    changeValue_3 = document.getElementById('changeValue_3'),
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
function dateSlider(max,min,step,value,startValue) {
    return slider = {
        max: max,
        min: min,
        step: step,
        value: startValue,
        startValue: startValue
    }
}


let dateSLider_1 = dateSlider(200,0,20,0,60);

let dateSLider_4 = dateSlider(200,0,20,0,20);


let dateSLider_2 = dateSlider(200,0,20,0,20);


let dateSLider_3 = dateSlider(200,0,20,0,20);






    





















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



let slider_horizontal_2 = new slider('slider_horizontal');
slider_horizontal_2.render();
slider_horizontal_2.element.classList.add('show')

let slider_vertical_2 = new slider('slider_vertical');
slider_vertical_2.render();
slider_vertical_2.element.classList.add('hide')




let slider_horizontal_3 = new slider('slider_horizontal');
slider_horizontal_3.render();
slider_horizontal_3.element.classList.add('show')

let slider_vertical_3 = new slider('slider_vertical');
slider_vertical_3.render();
slider_vertical_3.element.classList.add('hide')






















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
let roundVer_1 = new round(slider_vertical_1.element);
roundVer_1.render('slider_vertical__round');


let roundHor_4 = new round(slider_horizontal_1.element);
roundHor_4.render('slider_horizontal__round');
let roundVer_4 = new round(slider_vertical_1.element);
roundVer_4.render('slider_vertical__round');


let roundHor_2 = new round(slider_horizontal_2.element);
roundHor_2.render('slider_horizontal__round');
let roundVer_2 = new round(slider_vertical_2.element);
roundVer_2.render('slider_vertical__round');


let roundHor_5 = new round(slider_horizontal_2.element);
roundHor_5.render('slider_horizontal__round');
let roundVer_5 = new round(slider_vertical_2.element);
roundVer_5.render('slider_vertical__round');


let roundHor_3 = new round(slider_horizontal_3.element);
roundHor_3.render('slider_horizontal__round');
let roundVer_3 = new round(slider_vertical_3.element);
roundVer_3.render('slider_vertical__round');


let roundHor_6 = new round(slider_horizontal_3.element);
roundHor_6.render('slider_horizontal__round');
let roundVer_6 = new round(slider_vertical_1.element);
roundVer_6.render('slider_vertical__round');












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
let valueVer_1 = new value(slider_vertical_1.element);
valueVer_1.render('slider_vertical__value');


let valueHor_4 = new value(slider_horizontal_1.element);
valueHor_4.render('slider_horizontal__value');
let valueVer_4 = new value(slider_vertical_1.element);
valueVer_4.render('slider_vertical__value');


let valueHor_2 = new value(slider_horizontal_2.element);
valueHor_2.render('slider_horizontal__value');
let valueVer_2 = new value(slider_vertical_2.element);
valueVer_2.render('slider_vertical__value');


let valueHor_5 = new value(slider_horizontal_2.element);
valueHor_5.render('slider_horizontal__value');
let valueVer_5 = new value(slider_vertical_2.element);
valueVer_5.render('slider_vertical__value');


let valueHor_3 = new value(slider_horizontal_3.element);
valueHor_3.render('slider_horizontal__value');
let valueVer_3 = new value(slider_vertical_3.element);
valueVer_3.render('slider_vertical__value');


let valueHor_6 = new value(slider_horizontal_3.element);
valueHor_6.render('slider_horizontal__value');
let valueVer_6 = new value(slider_vertical_3.element);
valueVer_6.render('slider_vertical__value');

 














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

let scaleHor_2 = new scale(slider_horizontal_2.element);
scaleHor_2.render('slider_horizontal__underLine');
let scaleVer_2 = new scale(slider_vertical_2.element);
scaleVer_2.render('slider_vertical__underLine');


let scaleHor_3 = new scale(slider_horizontal_3.element);
scaleHor_3.render('slider_horizontal__underLine');
let scaleVer_3 = new scale(slider_vertical_3.element);
scaleVer_3.render('slider_vertical__underLine');








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







































function moveLogic(slider,round,value,dateSlider,inputValue,scale,typeSlider,typeSliderHor,typeSliderVer) {
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
                    dateSlider.value = i[1];
                }else if (typeSlider == 'sliderVer') {
                    round.element.style.top = i[0] - posSlider + 'px';
                    value.element.style.top = i[0] - posSlider + 'px';
                    value.element.textContent = i[1];
                    dateSlider.value = i[1];
                }

                
            }
        })
    }



    
    
    
    
    
    
    
    
    
    
    
    
    slider.element.addEventListener('click', onClickScale);
    
    
    
    function onClickScale(event) {
        if((event.clientX <= posSlider && typeSlider == 'sliderHor') || (event.clientY <= posSlider && typeSlider == 'sliderVer')) {
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
        }else if ((event.clientX >= posSlider + parSlider && typeSlider == 'sliderHor') || (event.clientY >= posSlider + parSlider && typeSlider == 'sliderVer')) {
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
                if ((event.clientX > element[0] - stepReal/2 && event.clientX < element[0] + stepReal/2 && typeSlider == 'sliderHor') || event.clientY > element[0] - stepReal/2 && event.clientY < element[0] + stepReal/2 && typeSlider == 'sliderVer') {
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
    
    
    round.element.addEventListener('mousedown', mouseDown);



    function mouseDown() {
        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', mouseUp);
    }
        
    
    
    
        
    function mouseUp() {
        document.removeEventListener('mousemove', mouseMove);  
    }

    
    function mouseMove(event) {
        if (typeSlider == 'sliderHor') {
            var parSlider = slider.element.offsetWidth,
                posSlider = slider.element.getBoundingClientRect().left;
        }else if (typeSlider == 'sliderVer') {
            var parSlider = slider.element.offsetHeight,
                posSlider = slider.element.getBoundingClientRect().top;
        }
        if((event.clientX <= posSlider && typeSlider == 'sliderHor') || (event.clientY <= posSlider && typeSlider == 'sliderVer')) {
            if (typeSlider == 'sliderHor') {
                round.element.style.left = 0 + 'px';
                value.element.style.left = 0 + 'px';
                dateSlider.value = date[0][1];
                value.element.textContent = dateSlider.value;
                inputValue.value = dateSlider.value;
            }else if (typeSlider == 'sliderVer') {
                round.element.style.top = 0 + 'px';
                value.element.style.top = 0 + 'px';
                dateSlider.value = date[0][1];
                value.element.textContent = dateSlider.value;
                inputValue.value = dateSlider.value;
            }

        }else if (((event.clientX >= posSlider + parSlider) && (typeSlider == 'sliderHor')) || ((event.clientY >= posSlider + parSlider) && (typeSlider == 'sliderVer'))) {
            if (typeSlider == 'sliderHor') {
                round.element.style.left = date[date.length-1][0] - posSlider + 'px';
                value.element.style.left = date[date.length-1][0] - posSlider + 'px';
                dateSlider.value = date[date.length-1][1];
                value.element.textContent = dateSlider.value;
                inputValue.value = dateSlider.value;
            }else if (typeSlider == 'sliderVer') {
                round.element.style.top = date[date.length-1][0] - posSlider + 'px';
                value.element.style.top = date[date.length-1][0] - posSlider + 'px';
                dateSlider.value = date[date.length-1][1];
                value.element.textContent = dateSlider.value;
                inputValue.value = dateSlider.value;
            }

        }
        date.forEach(element => {
            if (((event.clientX > element[0] - stepReal) && (event.clientX < element[0] + stepReal) && (typeSlider == 'sliderHor')) || ((event.clientY > element[0] - stepReal) && (event.clientY < element[0] + stepReal) && (typeSlider == 'sliderVer'))) {
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
        date.forEach(element => {  
            let div = document.createElement('div');
            div.setAttribute('id', typeSliderHor + element[1]);
            div.style.position = 'absolute'
            div.style.left = element[0] - slider.element.getBoundingClientRect().left + 'px'
            div.append(element[1]);
            div.style.width = '15px'
            div.style.textAlign = 'center'
            scale.element.append(div)
            div.style.userSelect = 'none'
        })
    } else if (typeSlider == 'sliderVer') {
        date.forEach(element => {  
            let div = document.createElement('div');
            div.setAttribute('id', typeSliderVer + element[1]);
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


    



    
    
    
        function changeStartValue() {
        date.forEach(i => {
            if (i[1] == dateSlider.value) {
                if (typeSlider == 'sliderHor') {
                    round.element.style.left = i[0] - posSlider + 'px';
                    value.element.style.left = i[0] - posSlider + 'px';
                    value.element.textContent = i[1];
                    dateSlider.value = i[1]
                }else if (typeSlider == 'sliderVer') {
                    round.element.style.top = i[0] - posSlider + 'px';
                    value.element.style.top = i[0] - posSlider + 'px';
                    value.element.textContent = i[1];
                    dateSlider.value = i[1]
                }
            
            }
        })
    }
    changeStartValue()
    
    
    
    
    
    
    
    
        
        
    
    
    
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


















moveLogic(slider_horizontal_1,roundHor_1,valueHor_1,dateSLider_1,changeValue_1,scaleHor_1,'sliderHor','sliderHor1','sliderVer1')
moveLogic(slider_vertical_1,roundVer_1,valueVer_1,dateSLider_1,changeValue_1,scaleVer_1,'sliderVer','sliderHor1','sliderVer1')

moveLogic(slider_horizontal_1,roundHor_4,valueHor_4,dateSLider_4,changeValue_1,scaleHor_1,'sliderHor','sliderHor1','sliderVer1')
moveLogic(slider_vertical_1,roundVer_4,valueVer_4,dateSLider_4,changeValue_1,scaleVer_1,'sliderVer','sliderHor1','sliderVer1')

moveLogic(slider_horizontal_2,roundHor_2,valueHor_2,dateSLider_2,changeValue_2,scaleHor_2,'sliderHor','sliderHor2','sliderVer2')
moveLogic(slider_vertical_2,roundVer_2,valueVer_2,dateSLider_2,changeValue_2,scaleVer_2,'sliderVer','sliderHor2','sliderVer2')

moveLogic(slider_horizontal_3,roundHor_3,valueHor_3,dateSLider_3,changeValue_3,scaleHor_3,'sliderHor','sliderHor3','sliderVer3')
moveLogic(slider_vertical_3,roundVer_3,valueVer_3,dateSLider_3,changeValue_3,scaleVer_3,'sliderVer','sliderHor3','sliderVer3')





//controller

function removerDiv(slider,round,dateSLider,typeSlider,sliderName) {
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
        let div = document.getElementById(sliderName + i[1]);
        div.remove();
    })
}






// let verScale = setInterval(() => {
//     if (ver_1.checked == true) {
//         moveLogic(slider_vertical_1,roundVer_1,valueVer_1,dateSLiderVer_1,changeHorScale_1,scaleVer_1,'sliderVer')
//         clearInterval(verScale);
        
//     }    
// }, 1);


// hor_1.value = checked


function controller(sliderHor,sliderVer,roundHor,roundVer,valueHor,valueVer,scaleHor,scaleVer,maxS,minS,stepS,ver,hor,dateSLider,changeValue,showScale,hideScale,showValue,hideValue,typeSliderHor,typeSliderVer) {
    showHor()
    maxS.value = dateSLider.max;
    minS.value = dateSLider.min;
    stepS.value = dateSLider.step;
    ver.addEventListener('change', showVer);
    hor.addEventListener('change', showHor);

    function showHor() {
        
        sliderHor.element.style.display = 'flex';
        sliderVer.element.style.display = 'none';
        removerDiv(sliderHor,roundHor,dateSLider,'sliderHor',typeSliderHor);
        moveLogic(sliderHor,roundHor,valueHor,dateSLider,changeValue,scaleHor,'sliderHor',typeSliderHor,typeSliderVer)
    
        maxS.addEventListener('change', () => {
            removerDiv(sliderHor,roundHor,dateSLider,'sliderHor',typeSliderHor);
            removerDiv(sliderVer,roundVer,dateSLider,'sliderVer',typeSliderVer);
            dateSLider.max = +maxS.value;
            moveLogic(sliderHor,roundHor,valueHor,dateSLider,changeValue,scaleHor,'sliderHor',typeSliderHor,typeSliderVer)
            moveLogic(sliderVer,roundVer,valueVer,dateSLider,changeValue,scaleVer,'sliderVer',typeSliderHor,typeSliderVer)
        })
        
        
        minS.addEventListener('change', () => {
            removerDiv(sliderHor,roundHor,dateSLider,'sliderHor',typeSliderHor);
            removerDiv(sliderVer,roundVer,dateSLider,'sliderVer',typeSliderVer);
            dateSLider.min = +minS.value;
            moveLogic(sliderHor,roundHor,valueHor,dateSLider,changeValue,scaleHor,'sliderHor',typeSliderHor,typeSliderVer)
            moveLogic(sliderVer,roundVer,valueVer,dateSLider,changeValue,scaleVer,'sliderVer',typeSliderHor,typeSliderVer)
        })
        
        
        stepS.addEventListener('change', () => {
            removerDiv(sliderHor,roundHor,dateSLider,'sliderHor',typeSliderHor);
            removerDiv(sliderVer,roundVer,dateSLider,'sliderVer',typeSliderVer);
            dateSLider.step = +stepS.value;
            moveLogic(sliderHor,roundHor,valueHor,dateSLider,changeValue,scaleHor,'sliderHor',typeSliderHor,typeSliderVer)
            moveLogic(sliderVer,roundVer,valueVer,dateSLider,changeValue,scaleVer,'sliderVer',typeSliderHor,typeSliderVer)
        })
        
    
    
    
        
    }
    function showVer() {
        sliderHor.element.style.display = 'none';
        sliderVer.element.style.display = 'flex';
        removerDiv(sliderVer,roundVer,dateSLider,'sliderVer',typeSliderVer);
        moveLogic(sliderVer,roundVer,valueVer,dateSLider,changeValue,scaleVer,'sliderVer',typeSliderHor,typeSliderVer)
    }
    
    
    
    
    showScale.addEventListener('change', showS);
    hideScale.addEventListener('change', hideS);
    
    
    
    function hideS() {
        scaleHor.element.style.display = 'none'
        scaleVer.element.style.display = 'none'
    }
    
    function showS() {
        scaleHor.element.style.display = 'block'
        scaleVer.element.style.display = 'block'
    }
    
    showValue.addEventListener('change', showV);
    hideValue.addEventListener('change', hideV);
    
    
    
    function hideV() {
        valueHor.element.style.display = 'none'
        valueVer.element.style.display = 'none'
    }
    
    function showV() {
        valueHor.element.style.display = 'flex'
        valueVer.element.style.display = 'flex'
    }
    
}


controller(slider_horizontal_1,slider_vertical_1,roundHor_1,roundVer_1,valueHor_1,valueVer_1,scaleHor_1,scaleVer_1,max_1,min_1,step_1,ver_1,hor_1,dateSLider_1,changeValue_1,showScale_1,hideScale_1,showValue_1,hideValue_1,'sliderHor1','sliderVer1')



controller(slider_horizontal_2,slider_vertical_2,roundHor_2,roundVer_2,valueHor_2,valueVer_2,scaleHor_2,scaleVer_2,max_2,min_2,step_2,ver_2,hor_2,dateSLider_2,changeValue_2,showScale_2,hideScale_2,showValue_2,hideValue_2,'sliderHor2','sliderVer2')




controller(slider_horizontal_3,slider_vertical_3,roundHor_3,roundVer_3,valueHor_3,valueVer_3,scaleHor_3,scaleVer_3,max_3,min_3,step_3,ver_3,hor_3,dateSLider_3,changeValue_3,showScale_3,hideScale_3,showValue_3,hideValue_3,'sliderHor3','sliderVer3')

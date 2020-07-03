var wrapper = document.querySelector('.wrapper'), changeValue1 = document.getElementById('changeValue_1'), changeValue2 = document.getElementById('changeValue_2'), changeValue3 = document.getElementById('changeValue_3'), ver1 = document.getElementById('ver_1'), hor1 = document.getElementById('hor_1'), max1 = document.getElementById('max_1'), min1 = document.getElementById('min_1'), step1 = document.getElementById('step_1'), showScale1 = document.getElementById('showScale_1'), hideScale1 = document.getElementById('hideScale_1'), showValue1 = document.getElementById('showValue_1'), hideValue1 = document.getElementById('hideValue_1'), ver2 = document.getElementById('ver_2'), hor2 = document.getElementById('hor_2'), max2 = document.getElementById('max_2'), min2 = document.getElementById('min_2'), step2 = document.getElementById('step_2'), showScale2 = document.getElementById('showScale_2'), hideScale2 = document.getElementById('hideScale_2'), showValue2 = document.getElementById('showValue_2'), hideValue2 = document.getElementById('hideValue_2'), ver3 = document.getElementById('ver_3'), hor3 = document.getElementById('hor_3'), max3 = document.getElementById('max_3'), min3 = document.getElementById('min_3'), step3 = document.getElementById('step_3'), showScale3 = document.getElementById('showScale_3'), hideScale3 = document.getElementById('hideScale_3'), showValue3 = document.getElementById('showValue_3'), hideValue3 = document.getElementById('hideValue_3'), interval1 = document.getElementById('interval_1'), interval2 = document.getElementById('interval_2'), interval3 = document.getElementById('interval_3'), alone1 = document.getElementById('alone_1'), alone2 = document.getElementById('alone_2'), alone3 = document.getElementById('alone_3');
//model
function dateSlider(max, min, step, startValue) {
    return {
        max: max,
        min: min,
        step: step,
        value: startValue,
        startValue: startValue
    };
}
var dateSLider1 = dateSlider(300, 0, 50, 100);
var dateSLiderInt1 = dateSlider(300, 0, 50, 50);
var dateSLider2 = dateSlider(200, 0, 20, 20);
// let dateSLiderInt2: object = dateSlider(200,0,20,20);
var dateSLider3 = dateSlider(200, 0, 20, 20);
// let dateSLiderInt3: object = dateSlider(200,0,20,20);
//view
var slider = /** @class */ (function () {
    function slider(name_slider) {
        this.name_slider = name_slider;
        this.element = document.createElement('div');
    }
    slider.prototype.render = function () {
        this.element.classList.add(this.name_slider);
        wrapper.append(this.element);
    };
    return slider;
}());
var slider_horizontal1 = new slider('slider_horizontal');
slider_horizontal1.render();
slider_horizontal1.element.classList.add('show');
var slider_vertical1 = new slider('slider_vertical');
slider_vertical1.render();
slider_vertical1.element.classList.add('hide');
var slider_horizontal2 = new slider('slider_horizontal');
slider_horizontal2.render();
slider_horizontal2.element.classList.add('show');
var slider_vertical2 = new slider('slider_vertical');
slider_vertical2.render();
slider_vertical2.element.classList.add('hide');
var slider_horizontal3 = new slider('slider_horizontal');
slider_horizontal3.render();
slider_horizontal3.element.classList.add('show');
var slider_vertical3 = new slider('slider_vertical');
slider_vertical3.render();
slider_vertical3.element.classList.add('hide');
var round = /** @class */ (function () {
    function round(parent) {
        this.parent = parent;
        this.element = document.createElement('div');
    }
    round.prototype.render = function (round_class) {
        this.element.classList.add(round_class);
        this.parent.append(this.element);
    };
    return round;
}());
var roundHor1 = new round(slider_horizontal1.element);
roundHor1.render('slider_horizontal__round');
var roundVer1 = new round(slider_vertical1.element);
roundVer1.render('slider_vertical__round');
var roundHorInt1 = new round(slider_horizontal1.element);
roundHorInt1.render('slider_horizontal__round');
var roundVerInt1 = new round(slider_vertical1.element);
roundVerInt1.render('slider_vertical__round');
roundHorInt1.element.classList.add('hide');
roundVerInt1.element.classList.add('hide');
var roundHor2 = new round(slider_horizontal2.element);
roundHor2.render('slider_horizontal__round');
var roundVer2 = new round(slider_vertical2.element);
roundVer2.render('slider_vertical__round');
var roundHor3 = new round(slider_horizontal3.element);
roundHor3.render('slider_horizontal__round');
var roundVer3 = new round(slider_vertical3.element);
roundVer3.render('slider_vertical__round');
var value = /** @class */ (function () {
    function value(parent) {
        this.parent = parent;
        this.element = document.createElement('div');
    }
    value.prototype.render = function (value_class) {
        this.element.classList.add(value_class);
        this.parent.append(this.element);
    };
    return value;
}());
var valueHor1 = new value(slider_horizontal1.element);
valueHor1.render('slider_horizontal__value');
var valueVer1 = new value(slider_vertical1.element);
valueVer1.render('slider_vertical__value');
var valueHorInt1 = new value(slider_horizontal1.element);
valueHorInt1.render('slider_horizontal__value');
var valueVerInt1 = new value(slider_vertical1.element);
valueVerInt1.render('slider_vertical__value');
valueHorInt1.element.classList.add('hide');
valueVerInt1.element.classList.add('hide');
var valueHor2 = new value(slider_horizontal2.element);
valueHor2.render('slider_horizontal__value');
var valueVer2 = new value(slider_vertical2.element);
valueVer2.render('slider_vertical__value');
var valueHor3 = new value(slider_horizontal3.element);
valueHor3.render('slider_horizontal__value');
var valueVer3 = new value(slider_vertical3.element);
valueVer3.render('slider_vertical__value');
var scale = /** @class */ (function () {
    function scale(parent) {
        this.parent = parent;
        this.element = document.createElement('div');
    }
    scale.prototype.render = function (underLine_class) {
        this.element.classList.add(underLine_class);
        this.parent.append(this.element);
    };
    return scale;
}());
var scaleHor1 = new scale(slider_horizontal1.element);
scaleHor1.render('slider_horizontal__underLine');
var scaleVer1 = new scale(slider_vertical1.element);
scaleVer1.render('slider_vertical__underLine');
var scaleHor2 = new scale(slider_horizontal2.element);
scaleHor2.render('slider_horizontal__underLine');
var scaleVer2 = new scale(slider_vertical2.element);
scaleVer2.render('slider_vertical__underLine');
var scaleHor3 = new scale(slider_horizontal3.element);
scaleHor3.render('slider_horizontal__underLine');
var scaleVer3 = new scale(slider_vertical3.element);
scaleVer3.render('slider_vertical__underLine');
function moveLogic(slider, round1, value, dateSlider, inputValue, scale, typeSlider, typeSliderHor, typeSliderVer) {
    if (typeSlider == 'sliderHor') {
        var parSlider = slider.element.offsetWidth, parRound = round1.element.offsetWidth, posSlider = slider.element.getBoundingClientRect().left;
    }
    else if (typeSlider == 'sliderVer') {
        var parSlider = slider.element.offsetHeight, parRound = round1.element.offsetHeight, posSlider = slider.element.getBoundingClientRect().top;
    }
    var stepReal = (parSlider - parRound) / ((dateSlider.max - dateSlider.min) / dateSlider.step);
    var date = [];
    for (var k = posSlider, i = dateSlider.min; i <= dateSlider.max; i += dateSlider.step, k += stepReal) {
        date.push([k, i]);
    }
    inputValue.addEventListener('change', changeInputValue);
    function changeInputValue() {
        date.forEach(function (i) {
            if (i[1] == +inputValue.value) {
                if (typeSlider == 'sliderHor') {
                    round1.element.style.left = i[0] - posSlider + 'px';
                    value.element.style.left = i[0] - posSlider + 'px';
                    value.element.textContent = i[1];
                    dateSlider.value = i[1];
                }
                else if (typeSlider == 'sliderVer') {
                    round1.element.style.top = i[0] - posSlider + 'px';
                    value.element.style.top = i[0] - posSlider + 'px';
                    value.element.textContent = i[1];
                    dateSlider.value = i[1];
                }
            }
        });
    }
    round1.element.addEventListener('mousedown', mouseDown);
    function mouseDown() {
        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', mouseUp);
    }
    function mouseUp() {
        document.removeEventListener('mousemove', mouseMove);
    }
    function mouseMove(event) {
        if (typeSlider == 'sliderHor') {
            var parSlider = slider.element.offsetWidth, posSlider = slider.element.getBoundingClientRect().left;
        }
        else if (typeSlider == 'sliderVer') {
            var parSlider = slider.element.offsetHeight, posSlider = slider.element.getBoundingClientRect().top;
        }
        if ((event.clientX <= posSlider && typeSlider == 'sliderHor') || (event.clientY <= posSlider && typeSlider == 'sliderVer')) {
            if (typeSlider == 'sliderHor') {
                round1.element.style.left = 0 + 'px';
                value.element.style.left = 0 + 'px';
            }
            else if (typeSlider == 'sliderVer') {
                round1.element.style.top = 0 + 'px';
                value.element.style.top = 0 + 'px';
            }
            dateSlider.value = date[0][1];
            value.element.textContent = dateSlider.value;
            inputValue.value = dateSlider.value;
        }
        else if (((event.clientX >= posSlider + parSlider) && (typeSlider == 'sliderHor')) || ((event.clientY >= posSlider + parSlider) && (typeSlider == 'sliderVer'))) {
            if (typeSlider == 'sliderHor') {
                round1.element.style.left = date[date.length - 1][0] - posSlider + 'px';
                value.element.style.left = date[date.length - 1][0] - posSlider + 'px';
            }
            else if (typeSlider == 'sliderVer') {
                round1.element.style.top = date[date.length - 1][0] - posSlider + 'px';
                value.element.style.top = date[date.length - 1][0] - posSlider + 'px';
            }
            dateSlider.value = date[date.length - 1][1];
            value.element.textContent = dateSlider.value;
            inputValue.value = dateSlider.value;
        }
        date.forEach(function (element) {
            if (((event.clientX > element[0] - stepReal) && (event.clientX < element[0] + stepReal) && (typeSlider == 'sliderHor')) || ((event.clientY > element[0] - stepReal) && (event.clientY < element[0] + stepReal) && (typeSlider == 'sliderVer'))) {
                if (typeSlider == 'sliderHor') {
                    round1.element.style.left = element[0] - posSlider + 'px';
                    value.element.style.left = element[0] - posSlider + 'px';
                }
                else if (typeSlider == 'sliderVer') {
                    round1.element.style.top = element[0] - posSlider + 'px';
                    value.element.style.top = element[0] - posSlider + 'px';
                }
                dateSlider.value = element[1];
                value.element.textContent = element[1];
                inputValue.value = dateSlider.value;
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
    inputValue.value = dateSlider.value;
    function StartValue() {
        date.forEach(function (i) {
            if (i[1] == dateSlider.value) {
                if (typeSlider == 'sliderHor') {
                    round1.element.style.left = i[0] - posSlider + 'px';
                    value.element.style.left = i[0] - posSlider + 'px';
                }
                else if (typeSlider == 'sliderVer') {
                    round1.element.style.top = i[0] - posSlider + 'px';
                    value.element.style.top = i[0] - posSlider + 'px';
                }
                value.element.textContent = i[1];
                dateSlider.value = i[1];
            }
        });
    }
    StartValue();
    value.element.ondragstart = function () {
        return false;
    };
    round1.element.ondragstart = function () {
        return false;
    };
    scale.element.ondragstart = function () {
        return false;
    };
    document.ondragstart = function () {
        return false;
    };
}
function createScale(slider, round, dateSlider, scale, typeSlider, typeSliderHor, typeSliderVer) {
    if (typeSlider == 'sliderHor') {
        var parSlider = slider.element.offsetWidth, parRound = round.element.offsetWidth, posSlider = slider.element.getBoundingClientRect().left;
    }
    else if (typeSlider == 'sliderVer') {
        var parSlider = slider.element.offsetHeight, parRound = round.element.offsetHeight, posSlider = slider.element.getBoundingClientRect().top;
    }
    var stepReal = (parSlider - parRound) / ((dateSlider.max - dateSlider.min) / dateSlider.step);
    var date = [];
    for (var k = posSlider, i = dateSlider.min; i <= dateSlider.max; i += dateSlider.step, k += stepReal) {
        date.push([k, i]);
    }
    if (typeSlider == 'sliderHor') {
        date.forEach(function (element) {
            var div = document.createElement('div');
            div.setAttribute('id', typeSliderHor + element[1]);
            div.style.position = 'absolute';
            div.style.left = element[0] - slider.element.getBoundingClientRect().left + 'px';
            div.append(element[1]);
            div.style.width = '15px';
            div.style.textAlign = 'center';
            scale.element.append(div);
            div.style.userSelect = 'none';
        });
    }
    else if (typeSlider == 'sliderVer') {
        date.forEach(function (element) {
            var div = document.createElement('div');
            div.setAttribute('id', typeSliderVer + element[1]);
            div.style.position = 'absolute';
            div.style.top = element[0] - slider.element.getBoundingClientRect().top + 'px';
            div.append(element[1]);
            div.style.width = '15px';
            div.style.textAlign = 'center';
            scale.element.append(div);
            div.style.userSelect = 'none';
        });
    }
}
function onClickScale(slider, round, value, dateSlider, inputValue, typeSlider) {
    var a = slider.element.addEventListener('click', function (event) {
        if (typeSlider == 'sliderHor') {
            var parSlider = slider.element.offsetWidth, parRound = round.element.offsetWidth, posSlider = slider.element.getBoundingClientRect().left;
        }
        else if (typeSlider == 'sliderVer') {
            var parSlider = slider.element.offsetHeight, parRound = round.element.offsetHeight, posSlider = slider.element.getBoundingClientRect().top;
        }
        var stepReal = (parSlider - parRound) / ((dateSlider.max - dateSlider.min) / dateSlider.step);
        var date = [];
        for (var k = posSlider, i = dateSlider.min; i <= dateSlider.max; i += dateSlider.step, k += stepReal) {
            date.push([k, i]);
        }
        if ((event.clientX <= posSlider && typeSlider == 'sliderHor') || (event.clientY <= posSlider && typeSlider == 'sliderVer')) {
            if (typeSlider == 'sliderHor') {
                round.element.style.left = 0 + 'px';
                value.element.style.left = 0 + 'px';
            }
            else if (typeSlider == 'sliderVer') {
                round.element.style.top = 0 + 'px';
                value.element.style.top = 0 + 'px';
            }
            dateSlider.value = slider.min;
            value.element.textContent = dateSlider.value;
            inputValue.value = dateSlider.value;
        }
        else if ((event.clientX >= posSlider + parSlider && typeSlider == 'sliderHor') || (event.clientY >= posSlider + parSlider && typeSlider == 'sliderVer')) {
            if (typeSlider == 'sliderHor') {
                round.element.style.left = date[date.length - 1][0] - posSlider + 'px';
                value.element.style.left = date[date.length - 1][0] - posSlider + 'px';
            }
            else if (typeSlider == 'sliderVer') {
                round.element.style.top = date[date.length - 1][0] - posSlider + 'px';
                value.element.style.top = date[date.length - 1][0] - posSlider + 'px';
            }
            slider.element.value = dateSlider.max;
            value.element.textContent = dateSlider.value;
            inputValue.value = dateSlider.value;
        }
        else {
            date.forEach(function (element) {
                if ((event.clientX > element[0] - stepReal / 2 && event.clientX < element[0] + stepReal / 2 && typeSlider == 'sliderHor') || event.clientY > element[0] - stepReal / 2 && event.clientY < element[0] + stepReal / 2 && typeSlider == 'sliderVer') {
                    if (typeSlider == 'sliderHor') {
                        round.element.style.left = element[0] - posSlider + 'px';
                        value.element.style.left = element[0] - posSlider + 'px';
                    }
                    else {
                        round.element.style.top = element[0] - posSlider + 'px';
                        value.element.style.top = element[0] - posSlider + 'px';
                    }
                    dateSlider.value = element[1];
                    value.element.textContent = element[1];
                    inputValue.value = dateSlider.value;
                }
            });
        }
    });
}
moveLogic(slider_horizontal1, roundHor1, valueHor1, dateSLider1, changeValue1, scaleHor1, 'sliderHor', 'sliderHor1', 'sliderVer1');
moveLogic(slider_horizontal1, roundHorInt1, valueHorInt1, dateSLiderInt1, changeValue1, scaleHor1, 'sliderHor', 'sliderHor1', 'sliderVer1');
createScale(slider_horizontal1, roundHor1, dateSLider1, scaleHor1, 'sliderHor', 'sliderHor1', 'sliderVer1');
// onClickScale(event,slider_horizontal1,roundHor1,valueHor1,dateSLider1,changeValue1,'sliderHor')
// moveLogic(slider_vertical1,roundVer1,valueVer1,dateSLider1,changeValue1,scaleVer1,'sliderVer','sliderHor1','sliderVer1')
// moveLogic(slider_vertical1,roundVerInt1,valueVerInt1,dateSLiderInt1,changeValue1,scaleVer1,'sliderVer','sliderHor1','sliderVer1')
// createScale(slider_vertical1,roundVer1,dateSLider1,scaleVer1,'sliderVer','sliderHor1','sliderVer1')
// onClickScale(event,slider_vertical1,roundVer1,valueVer1,dateSLider1,changeValue1,'sliderVer')
// moveLogic(slider_horizontal2,roundHor2,valueHor2,dateSLider2,changeValue2,scaleHor2,'sliderHor','sliderHor2','sliderVer2')
// moveLogic(slider_vertical2,roundVer2,valueVer2,dateSLider2,changeValue2,scaleVer2,'sliderVer','sliderHor2','sliderVer2')
// moveLogic(slider_horizontal3,roundHor3,valueHor3,dateSLider3,changeValue3,scaleHor3,'sliderHor','sliderHor3','sliderVer3')
// moveLogic(slider_vertical3,roundVer3,valueVer3,dateSLider3,changeValue3,scaleVer3,'sliderVer','sliderHor3','sliderVer3')
// onClickScale(slider_horizontal1,roundHor1,valueHor1,dateSLider1,changeValue1,'sliderHor')
// onClickScale(slider_vertical1,roundVer1,valueVer1,dateSLider1,changeValue1,'sliderVer')
// onClickScale(slider_horizontal1,roundHorInt1,valueHorInt1,dateSLiderInt1,changeValue1,'sliderHor')
// onClickScale(slider_vertical1,roundVerInt1,valueVerInt1,dateSLiderInt1,changeValue1,'sliderVer')
//controller
function removerDiv(slider, round, dateSLider, typeSlider, sliderName) {
    if (typeSlider == 'sliderHor') {
        var parSlider = slider.element.offsetWidth, parRound = round.element.offsetWidth, posSlider = slider.element.getBoundingClientRect().left;
    }
    else if (typeSlider == 'sliderVer') {
        var parSlider = slider.element.offsetHeight, parRound = round.element.offsetHeight, posSlider = slider.element.getBoundingClientRect().top;
    }
    var stepReal = (parSlider - parRound) / ((dateSLider.max - dateSLider.min) / dateSLider.step);
    var date = [];
    for (var k = posSlider, i = dateSLider.min; i <= dateSLider.max; i += dateSLider.step, k += stepReal) {
        date.push([k, i]);
    }
    date.forEach(function (i) {
        var div = document.getElementById(sliderName + i[1]);
        div.remove();
    });
}
function controller(sliderHor, sliderVer, roundHor, roundHorInt, roundVer, roundVerInt, valueHor, valueHorInt, valueVer, valueVerInt, scaleHor, scaleVer, maxS, minS, stepS, ver, hor, dateSLider, dateSliderInt, changeValue, showScale, hideScale, showValue, hideValue, interval, alone, inputValue, typeSliderHor, typeSliderVer) {
    showHor();
    maxS.value = dateSLider.max;
    minS.value = dateSLider.min;
    stepS.value = dateSLider.step;
    ver.addEventListener('change', showVer);
    hor.addEventListener('change', showHor);
    function showHor() {
        sliderHor.element.style.display = 'flex';
        sliderVer.element.style.display = 'none';
        removerDiv(sliderHor, roundHor, dateSLider, 'sliderHor', typeSliderHor);
        moveLogic(sliderHor, roundHor, valueHor, dateSLider, changeValue, scaleHor, 'sliderHor', typeSliderHor, typeSliderVer);
        moveLogic(sliderHor, roundHorInt, valueHorInt, dateSliderInt, changeValue, scaleHor, 'sliderHor', typeSliderHor, typeSliderVer);
        createScale(sliderHor, roundHor, dateSLider, scaleHor, 'sliderHor', typeSliderHor, typeSliderVer);
    }
    function showVer() {
        sliderHor.element.style.display = 'none';
        sliderVer.element.style.display = 'flex';
        removerDiv(sliderVer, roundVer, dateSLider, 'sliderVer', typeSliderVer);
        moveLogic(sliderVer, roundVer, valueVer, dateSLider, changeValue, scaleVer, 'sliderVer', typeSliderHor, typeSliderVer);
        moveLogic(sliderVer, roundVerInt, valueVerInt, dateSliderInt, changeValue, scaleVer, 'sliderVer', typeSliderHor, typeSliderVer);
        createScale(sliderVer, roundVer, dateSLider, scaleVer, 'sliderVer', typeSliderHor, typeSliderVer);
    }
    // maxS.addEventListener('change', () => {
    //     removerDiv(sliderHor,roundHor,dateSLider,'sliderHor',typeSliderHor);
    //     removerDiv(sliderVer,roundVer,dateSLider,'sliderVer',typeSliderVer);
    //     dateSLider.max = +maxS.value;
    //     dateSliderInt.max = +maxS.value;
    //     moveLogic(sliderHor,roundHor, valueHor,dateSLider,changeValue,scaleHor,'sliderHor',typeSliderHor,typeSliderVer)
    //     moveLogic(sliderHor,roundHorInt1, valueHorInt,dateSliderInt,changeValue,scaleHor,'sliderHor',typeSliderHor,typeSliderVer)
    //     createScale(sliderHor,roundHor,dateSLider,scaleHor,'sliderHor',typeSliderHor,typeSliderVer)
    //     moveLogic(sliderVer,roundVer, valueVer,dateSLider,changeValue,scaleVer,'sliderVer',typeSliderHor,typeSliderVer)
    //     moveLogic(sliderVer,roundVerInt1, valueVerInt,dateSliderInt,changeValue,scaleVer,'sliderVer',typeSliderHor,typeSliderVer)
    //     createScale(sliderVer,roundVer,dateSLider,scaleVer,'sliderVer',typeSliderHor,typeSliderVer)
    // })
    // minS.addEventListener('change', () => {
    //     removerDiv(sliderHor,roundHor,dateSLider,'sliderHor',typeSliderHor);
    //     removerDiv(sliderVer,roundVer,dateSLider,'sliderVer',typeSliderVer);
    //     dateSLider.min = +minS.value;
    //     dateSliderInt.min = +minS.value;
    //     moveLogic(sliderHor,roundHor, valueHor,dateSLider,changeValue,scaleHor,'sliderHor',typeSliderHor,typeSliderVer)
    //     moveLogic(sliderHor,roundHorInt1, valueHorInt,dateSliderInt,changeValue,scaleHor,'sliderHor',typeSliderHor,typeSliderVer)
    //     createScale(sliderHor,roundHor,dateSLider,scaleHor,'sliderHor',typeSliderHor,typeSliderVer)
    //     moveLogic(sliderVer,roundVer, valueVer,dateSLider,changeValue,scaleVer,'sliderVer',typeSliderHor,typeSliderVer)
    //     moveLogic(sliderVer,roundVerInt1, valueVerInt,dateSliderInt,changeValue,scaleVer,'sliderVer',typeSliderHor,typeSliderVer)
    //     createScale(sliderVer,roundVer,dateSLider,scaleVer,'sliderVer',typeSliderHor,typeSliderVer)
    // })
    // stepS.addEventListener('change', () => {
    //     removerDiv(sliderHor,roundHor,dateSLider,'sliderHor',typeSliderHor);
    //     removerDiv(sliderVer,roundVer,dateSLider,'sliderVer',typeSliderVer);
    //     dateSLider.step = +stepS.value;
    //     dateSliderInt.step = +stepS.value;
    //     moveLogic(sliderHor,roundHor, valueHor,dateSLider,changeValue,scaleHor,'sliderHor',typeSliderHor,typeSliderVer)
    //     moveLogic(sliderHor,roundHorInt1, valueHorInt,dateSliderInt,changeValue,scaleHor,'sliderHor',typeSliderHor,typeSliderVer)
    //     createScale(sliderHor,roundHor,dateSLider,scaleHor,'sliderHor',typeSliderHor,typeSliderVer)
    //     moveLogic(sliderVer,roundVer, valueVer,dateSLider,changeValue,scaleVer,'sliderVer',typeSliderHor,typeSliderVer)
    //     moveLogic(sliderVer,roundVerInt1, valueVerInt,dateSliderInt,changeValue,scaleVer,'sliderVer',typeSliderHor,typeSliderVer)
    //     createScale(sliderVer,roundVer,dateSLider,scaleVer,'sliderVer',typeSliderHor,typeSliderVer)
    // })
    showScale.addEventListener('change', showS);
    hideScale.addEventListener('change', hideS);
    function hideS() {
        scaleHor.element.style.display = 'none';
        scaleVer.element.style.display = 'none';
    }
    function showS() {
        scaleHor.element.style.display = 'block';
        scaleVer.element.style.display = 'block';
    }
    showValue.addEventListener('change', showV);
    hideValue.addEventListener('change', hideV);
    function hideV() {
        valueHor.element.style.display = 'none';
        valueVer.element.style.display = 'none';
    }
    function showV() {
        valueHor.element.style.display = 'flex';
        valueVer.element.style.display = 'flex';
    }
    interval.addEventListener('change', clickOnInterval);
    alone.addEventListener('change', clickOnAlone);
    function clickOnInterval() {
        valueHor.element.style.display = 'none';
        valueVer.element.style.display = 'none';
        valueHorInt.element.style.display = 'none';
        valueVerInt.element.style.display = 'none';
        roundHorInt.element.style.display = 'flex';
        roundVerInt.element.style.display = 'flex';
        moveLogic(sliderHor, roundHorInt, valueHorInt, dateSliderInt, changeValue, scaleHor, 'sliderHor', typeSliderHor, typeSliderVer);
        var dig = setInterval(trueInt, 1);
        function trueInt(event) {
            if (roundHor.element.getBoundingClientRect().left <= roundHorInt.element.getBoundingClientRect().left) {
                dateSLider.startValue = dateSliderInt.value;
                dateSLider.min = dateSliderInt.value;
                console.log(dateSLider);
                console.log(dateSliderInt);
                moveLogic(sliderHor, roundHor, valueHor, dateSLider, changeValue, scaleHor, 'sliderHor', typeSliderHor, typeSliderVer);
                clearInterval(dig);
            }
        }
    }
    function clickOnAlone() {
        valueHor.element.style.display = 'flex';
        valueVer.element.style.display = 'flex';
        roundHorInt.element.style.display = 'none';
        roundVerInt.element.style.display = 'none';
    }
}
controller(slider_horizontal1, slider_vertical1, roundHor1, roundHorInt1, roundVer1, roundVerInt1, valueHor1, valueHorInt1, valueVer1, valueVerInt1, scaleHor1, scaleVer1, max1, min1, step1, ver1, hor1, dateSLider1, dateSLiderInt1, changeValue1, showScale1, hideScale1, showValue1, hideValue1, interval1, alone1, changeValue1, 'sliderHor1', 'sliderVer1');
// controller(slider_horizontal2,slider_vertical2,roundHor2,roundVer2,valueHor2,valueVer2,scaleHor2,scaleVer2,max2,min2,step2,ver2,hor2,dateSLider2,changeValue2,showScale2,hideScale2,showValue2,hideValue2,'sliderHor2','sliderVer2')
// controller(slider_horizontal3,slider_vertical3,roundHor3,roundVer3,valueHor3,valueVer3,scaleHor3,scaleVer3,max3,min3,step3,ver3,hor3,dateSLider3,changeValue3,showScale3,hideScale3,showValue3,hideValue3,'sliderHor3','sliderVer3')

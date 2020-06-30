

















//model







    





















//view







































































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















































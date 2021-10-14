'use strict'
//declaro variables
const contadorHtml = document.querySelector('.counter')
const btnDecrease = document.querySelector('.decrease-btn')
const btnIncrease = document.querySelector('.increase-btn')
const btnReset = document.querySelector('.reset-btn')

let counter = 0;


btnIncrease.addEventListener('click', function (){
    counter++;
    contadorHtml.textContent = counter
})

btnDecrease.addEventListener('click', function (){
    counter--;
    contadorHtml.textContent = counter
})

btnReset.addEventListener('click', function (){
    counter = 0;
    contadorHtml.textContent = counter
})


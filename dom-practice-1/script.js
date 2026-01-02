var h1 = document.querySelector('h1')
var btn1 = document.querySelector('#inc')
var btn2= document.querySelector('#reset')
var btn3 = document.querySelector('#decr')

var a = 0

btn1.addEventListener('click', function(){
    a++
    h1.innerHTML = a
})

btn2.addEventListener('click', function(){
    a = 0
    h1.innerHTML = a
})

btn3.addEventListener('click', function(){
    a--
    h1.innerHTML = a
})
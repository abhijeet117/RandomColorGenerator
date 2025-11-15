let circle = document.querySelector('.circle');

let original = document.querySelector('.btn1');
let change = document.querySelector('.btn2');



change.addEventListener('click', function(){
    let random1 = Math.floor(Math.random()*256);
    let random2 = Math.floor(Math.random()*256);
    let random3 = Math.floor(Math.random()*256);
    circle.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
    
})

original.addEventListener('click', function() {
     circle.style.backgroundColor = 'transparent';
})
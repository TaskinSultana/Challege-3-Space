const menu = document.querySelector('.menu');
const menuExtra = document.querySelector('.menu-extra');
const crossMark= document.querySelector('#cross-mark');

menu.addEventListener('click',()=>{
    menuExtra.style.display='block';
})

crossMark.addEventListener('click',()=>{
    menuExtra.style.display='none';
})



// for skill section

let circular1 = document.querySelector('.circular1');
let circular2 = document.querySelector('.circular2');
let circular3 = document.querySelector('.circular3');
let circular4 = document.querySelector('.circular4');
let value1= document.querySelector('.value1');
let value2= document.querySelector('.value2');
let value3= document.querySelector('.value3');
let value4= document.querySelector('.value4');


let startvalue1=0,startvalue2=0,startvalue3=0,startvalue4=0, endvalue1=98, endvalue2=95,endvalue3=89 ,endvalue4=85;

let progress1= setInterval(() => {
    startvalue1++;
    value1.textContent=`${startvalue1}%`;
    circular1.style.background=`conic-gradient(#ff2e63 ${startvalue1 * 3.6}deg,#ffffff 0deg)`;

    if(startvalue1 == endvalue1){
        clearInterval(progress1)
    }

}, 30);

let progress2= setInterval(() => {
    startvalue2++;
    value2.textContent=`${startvalue2}%`;
    circular2.style.background=`conic-gradient(#ff2e63 ${startvalue2 * 3.6}deg,#ffffff 0deg)`;

    if(startvalue2 == endvalue2){
        clearInterval(progress2)
    }
}, 30);

let progress3= setInterval(() => {
    startvalue3++;
    value3.textContent=`${startvalue3}%`;
    circular3.style.background=`conic-gradient(#ff2e63 ${startvalue3 * 3.6}deg,#ffffff 0deg)`;

    if(startvalue3 == endvalue3){
        clearInterval(progress3)
    }
}, 30);

let progress4= setInterval(() => {
    startvalue4++;
    value4.textContent=`${startvalue4}%`;
    circular4.style.background=`conic-gradient(#ff2e63 ${startvalue4 * 3.6}deg,#ffffff 0deg)`;

    if(startvalue4 == endvalue4){
        clearInterval(progress4)
    }
}, 30);
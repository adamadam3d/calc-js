const btns = document.querySelectorAll('.button');
const screen1 = document.querySelector('.value1')
const screen2 = document.querySelector('.value2'); //
const equal = document.querySelector('.equal' )
const add = document.querySelector('.add');
const clear = document.querySelector('#clear');
const back = document.querySelector('.back');
const sub = document.querySelector('.minus');
const num = document.createElement('span');
const sign = document.createElement('span');
const multp = document.querySelector('.multp');
const divide = document.querySelector('.divide')
let total = 0;
let number2 =parseFloat(screen2.textContent)


function test() {
    screen1.textContent+=this.textContent
}

btns.forEach(btn=> btn.addEventListener('click',test));


sub.addEventListener('click', operation);

add.addEventListener('click',operation);
multp.addEventListener('click',operation);
divide.addEventListener('click',operation);
equal.addEventListener('click',()=>{
    let number1 =parseFloat(screen1.textContent)
    let number2 =parseFloat(screen2.textContent);
    switch (sign.textContent) {
        case '+':
            total =number1 + number2;
            break;
        case '-':
            total = number2 - number1;
            break;
        case '*':
            total = number1 * number2;
            break;
        case '/': 
            total = number2 /number1 ;
            break;

    }
    total = Math.floor(total * 10) / 10
    screen2.innerHTML = '';
    screen1.textContent = total ;


});

function operation(){
    let number1 =parseFloat(screen1.textContent);
    let number2 =parseFloat(screen2.textContent);
    console.log(screen1.textContent)
    switch (sign.textContent) {
        case '+':
            total =number1 + number2;
            break;
        case '-':
            total = number2 - number1;
            break;
        case '*':
            total = number1 * number2;
            break;
        case '/': 
            total = number2 /number1 ;
            break;

    }
    
    total = Math.floor(total * 10) / 10



    if (screen2.textContent && screen1.textContent ){

        screen2.innerHTML = '';
        screen2.textContent = total;
        screen1.innerHTML = '';
        sign.textContent = this.textContent;
        screen2.appendChild(sign);

        }
    if (screen1.textContent){
        num.textContent = parseFloat(screen1.textContent )
        sign.textContent = this.textContent;
        screen2.appendChild(num);
        screen2.appendChild(sign);
        screen1.textContent ='';
        return;
    }



}
clear.addEventListener('click',()=>{
    screen1.textContent = '';
    screen2.innerHTML = '';
});
back.addEventListener('click',()=>{
    screen1.textContent = screen1.textContent.slice(0,-1);
});

equal.removeEventListener('click',test);
back.removeEventListener('click',test);
add.removeEventListener('click',test);
sub.removeEventListener('click',test);
multp.removeEventListener('click',test);
divide.removeEventListener('click',test);


let numbers =  document.querySelectorAll('.number');
let operators = document.querySelector('.operator');
let clearBtn = document.querySelector('.is-clear');
let display = document.querySelector('.display');
let calcInputDisplay = document.querySelector('.calc-input');


function Type(button) {
    calcInputDisplay.value = calcInputDisplay.value + button.innerHTML;
}

function Clear(){
    calcInputDisplay.value = '';
}

numbers.forEach(n=>{
    n.addEventListener('click', () => Type(n));
})

clearBtn.onclick = Clear;


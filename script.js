//calculator program

const display = document.getElementById('screen');
const buttons = document.querySelectorAll('button');

let arr = Array.from(buttons);

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
    
}

function deleteDisplay(){
    console.log('display.value = '+ typeof display.value)
    console.log('display.value.toString() = '+ typeof display.value.toString())
    display.value = display.value.slice(0,-1);
}



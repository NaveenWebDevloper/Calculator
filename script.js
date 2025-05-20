let display = document.getElementById('display');


function addtoDisplay(input) {
    display.value += input;
}
function evaluateDisplay() {
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}
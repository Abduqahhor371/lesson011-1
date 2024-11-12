// calculator

const display = document.getElementById("display")

alert("Assalomu Alaykum Xush kelibsiz!");
let name = prompt("Iltimos, ismingizni kiriting:");
alert("Xush kelibsiz " + name + "");

function appendToDisplay(input){
    display.value += input
}

function clearDisplay(){
    display.value = ""

}

function calculate(){
    try{
    display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error"
    }
}
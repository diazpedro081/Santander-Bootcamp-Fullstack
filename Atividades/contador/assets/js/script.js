var btnSoma = document.querySelector("#btnSoma")
var btnSubtrai = document.querySelector("#btnSubtrai")
var currentNumberWrapper = document.getElementById('currentNumber');

var currentNumber = 0;

btnSoma.addEventListener("click", function incremento() {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
    verify();
})

btnSubtrai.addEventListener("click", function decrement(){
    currentNumber --;
    currentNumberWrapper.innerHTML = currentNumber;
    verify();
})



function verify(params) {
    if (currentNumber < 0){
      currentNumberWrapper.style.color="#ca6567";
    } else {
      currentNumberWrapper.style.color="#000";
    }
  }
import validator from "./validator.js";

document.querySelector(".btn").addEventListener("click", Documentos);

function Documentos() {
  let pegaValor = document.querySelector(".input").value;
  document.querySelector(".resultado").innerHTML = maskify.cardHide(pegaValor);
  
  console.log(maskify.cardHide(pegaValor))
  console.log(validator.isValid(pegaValor))
  
}

//função para ocultar os números e mostrar apenas os últimos 4.
const maskify = {
  cardHide(cardNumber) {
    let hideNum = [];
    for(let i = 0; i < cardNumber.length; i++){
      if(i < cardNumber.length-4){
        hideNum.push("#");
      }else{
        hideNum.push(cardNumber[i]);
      }
    }
    return hideNum.join("");
  }
};

//função para o input aceitar apenas números.
var input = document.querySelector("#number");
input.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
      e.preventDefault();
  }
});
function checkChar(e) {
    var char = String.fromCharCode(e.keyCode);
  
  console.log(char);
    var pattern = '[0-9]';
    if (char.match(pattern)) {
      return true;
  }
}
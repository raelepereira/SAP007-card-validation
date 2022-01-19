import validator from "./validator.js";
import ocultar from "./ocultar.js";

document.querySelector(".btn").addEventListener("click", Documentos);

function Documentos() {
  let pegaValor = document.querySelector(".input").value;
  document.querySelector(".resultado").innerHTML = ocultar.cardHide(pegaValor); 
  
  console.log(ocultar.cardHide(pegaValor))
  console.log(validator.isValid(pegaValor))
  
}

    /*//funcao para ocultar os primeiros digitos
function cardHide(card) {
    let hideNum = [];
      for(let i = 0; i < card.length; i++){
      if(i < card.length-4){
        hideNum.push("*");
      }else{
        hideNum.push(card[i]);
      }
    }
    return hideNum.join("");
  }
  */
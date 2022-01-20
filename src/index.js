import validator from "./validator.js";
import ocultar from "./ocultar.js";

document.querySelector(".btn").addEventListener("click", Documentos);

function Documentos() {
  let pegaValor = document.querySelector(".input").value;
  document.querySelector(".resultado").innerHTML = ocultar.cardHide(pegaValor);
  
  console.log(ocultar.cardHide(pegaValor))
  console.log(validator.isValid(pegaValor))
  
}
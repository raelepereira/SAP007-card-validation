import validator from "./validator.js";
import maskify from "./maskify.js";

document.querySelector(".btn").addEventListener("click", Documentos);

function Documentos() {
  let pegaValor = document.querySelector(".input").value;
  document.querySelector(".resultado").innerHTML = maskify.cardHide(pegaValor);
  
  console.log(maskify.cardHide(pegaValor))
  console.log(validator.isValid(pegaValor))
  
}

export default maskify;


import validator from "./validator.js";

const inputDoNumeroDoCartao = document.querySelector(".input");
const resultado = document.querySelector(".resultado");
const btn = document.querySelector(".btn");

btn.addEventListener("click", Documentos);


function Documentos() {
  const pegaValor = inputDoNumeroDoCartao.value;
  resultado.innerHTML = validator.maskify(pegaValor);

  const numeroEValido = validator.isValid(pegaValor)
  if(numeroEValido){ 
    window.alert("Cartão Válido")
   
   } else { 
    window.alert("Cartão Inválido")
    
    }
  
  console.log(validator.maskify(pegaValor))
  console.log(validator.isValid(pegaValor))
  
}


//função para o input aceitar apenas números.

var input = document.querySelector("#number");
input.addEventListener("keypress", function(e) { //saber qnd o usuário digitar algo
    if(!checkChar(e)) { //checa o caracter, se vier falso, quer dizer caracter especial ...
      e.preventDefault(); //limita o caracter especial de aparecer no input
  }
});

function checkChar(e) { // (e)=evento
    var char = String.fromCharCode(e.keyCode); //transformando em caracter
  
  console.log(char);
    var pattern = '[0-9]'; //expressão regular, aceita apenas números
    if (char.match(pattern)) { //se estiver dentro do padrão, retorna true
      return true;
  }
}



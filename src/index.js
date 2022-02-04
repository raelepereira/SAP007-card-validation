import validator from "./validator.js";


document.querySelector(".btn").addEventListener("click", Documentos);

function Documentos() {
  let pegaValor = document.querySelector(".input").value;
  document.querySelector(".resultado").innerHTML = validator.maskify(pegaValor);
  
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



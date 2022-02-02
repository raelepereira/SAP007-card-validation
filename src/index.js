import validator from "./validator.js";

document.querySelector(".btn").addEventListener("click", Documentos);

function Documentos() {
  let pegaValor = document.querySelector(".input").value;
  document.querySelector(".resultado").innerHTML = validator.maskify(pegaValor);
  
  console.log(validator.maskify(pegaValor))
  console.log(validator.isValid(pegaValor))
  
}

//função para ocultar os números e mostrar apenas os últimos 4.

/*const maskify = {
  cardHide(cardNumber) {   //função cardHide // aceita CardNumber(string) como argumento
    let hideNum = [];     //hideNum:  variável que a função irá retornar
        for(let i = 0; i < cardNumber.length; i++){//após o término do loop, fica a matriz c os nu. do cartão par. ocultados 
      if(i < cardNumber.length-4){ 
        hideNum.push("#");
      }else{
        hideNum.push(cardNumber[i]);
      }
    }
    return hideNum.join(""); //método para converter o array em uma string
  }
};
*/

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



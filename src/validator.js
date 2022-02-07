const validator  = {

 //função para ocultar os números e mostrar apenas os últimos 4.
    
       maskify(cardNumber) {   
      let hideNum = [];     //variável que a funç. irá retornar
          for(let i = 0; i < cardNumber.length; i++){
        if(i < cardNumber.length-4){ //após o término do loop, a matriz fica c os n. do cartão parc. ocultados.
          hideNum.push("#");
        }else{
          hideNum.push(cardNumber[i]);
        }
      }
      return hideNum.join(""); //método para converter o array em uma string
    },

  
    //algoritmo de luhn

  isValid(CardNumber) {  
    let arr = (CardNumber + '') 
      .split('') //separa cada caracter da string em um array
      .reverse() 
      .map(x => parseInt(x)); //exec. o map em cada elemento do array, p transformar a string em um número inteiro
    let lastDigit = arr.splice(0, 1)[0]; //pega o último dígito
    let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + (((val * 2) % 9)) || 9), 0); //se o i for ímpar, mult. o val por 2, se o val for >9, subtrai 9 do valor.
    sum += lastDigit; 
    if(sum % 10 === 0){ 
  
      return true
     
    } else { 
     
      return false
      
    }
  },
};


export default validator;




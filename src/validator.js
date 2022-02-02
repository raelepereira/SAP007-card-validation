const validator  = {

 //função para ocultar os números e mostrar apenas os últimos 4.
    
       maskify(cardNumber) {   //função cardHide // aceita CardNumber(string) como argumento
      let hideNum = [];     //hideNum:  variável que a função irá retornar
          for(let i = 0; i < cardNumber.length; i++){//após o término do loop, fica a matriz c os nu. do cartão par. ocultados 
        if(i < cardNumber.length-4){ 
          hideNum.push("#");
        }else{
          hideNum.push(cardNumber[i]);
        }
      }
      return hideNum.join(""); //método para converter o array em uma string
    },

  
    //algoritmo de luhn

  isValid(CardNumber) { //método isValid 
    let arr = (CardNumber + '') // passa o CardNumber para uma variável
      .split('') //.split separa cada elemento do array 
      .reverse() //.reverse troca todos os números de posição.
      .map(x => parseInt(x)); //converte uma string em um inteiro
    let lastDigit = arr.splice(0, 1)[0]; //passa o nu. pra uma variável .splice pode adicionar e remover itens de uma lista.
    let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0); // .reduce soma todos os itens da lista.
    sum += lastDigit; 
    if(sum % 10 === 0){ //Se for um múltiplo de 10 o cartão é válido, se não, é inválido.
      window.alert("Cartão Válido")
      return true
     
    } else { 
      window.alert("Cartão Inválido")
      return false
      
    }
  },
};


export default validator;




/*
function checkLuhn(cardNo)
    {
        let nDigits = cardNo.length;
 
        let nSum = 0;
        let isSecond = false;
        for (let i = nDigits - 1; i >= 0; i--)
        {
 
            let d = cardNo[i].charCodeAt() - '0'.charCodeAt();
 
            if (isSecond == true)
                d = d * 2;
 
            // We add two digits to handle
            // cases that make two digits
            // after doubling
            nSum += parseInt(d / 10, 10);
            nSum += d % 10;
 
            isSecond = !isSecond;
        }
        return (nSum % 10 == 0);
    }
     
    let cardNo = "79927398713";
    if (checkLuhn(cardNo))
      document.write("This is a valid card");
    else
      document.write("This is not a valid card");
      */
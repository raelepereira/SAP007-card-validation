const validator  = {

 //função para ocultar os números e mostrar apenas os últimos 4.
    
       maskify(cardNumber) {   
      let hideNum = [];     
          for(let i = 0; i < cardNumber.length; i++){
        if(i < cardNumber.length-4){ 
          hideNum.push("#");
        }else{
          hideNum.push(cardNumber[i]);
        }
      }
      return hideNum.join(""); 
    },

  
    //algoritmo de luhn

  isValid(CardNumber) {  
    let arr = (CardNumber + '') 
      .split('') 
      .reverse() 
      .map(x => parseInt(x)); 
    let lastDigit = arr.splice(0, 1)[0]; 
    let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + (((val * 2) % 9)) || 9), 0);
    sum += lastDigit; 
    if(sum % 10 === 0){ 
      return true  
    } else {   
      return false      
    }
  },
};


export default validator;




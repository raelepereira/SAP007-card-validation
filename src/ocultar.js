const ocultar = {
    cardHide(cardNumber) {
      let hideNum = [];
      for(let i = 0; i < cardNumber.length; i++){
        if(i < cardNumber.length-4){
          hideNum.push("*");
        }else{
          hideNum.push(cardNumber[i]);
        }
      }
      return hideNum.join("");
    }
  };

export default ocultar;
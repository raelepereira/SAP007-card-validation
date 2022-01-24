const validator = { 
  isValid(CardNumber) { //método isValid recebe um cardNumber
    let arr = (CardNumber + '') // passa o CardNumber para uma variável
      .split('') //.split separa cada elemento do array(números) para...(nesse caso, para um espaço vazio)
      .reverse() //.reverse troca todos os números de posição.
      .map(x => parseInt(x)); //.map pode fazer uma função dentro do seu array/lista para cada objeto.
    let lastDigit = arr.splice(0, 1)[0]; //.splice pode adicionar e remover itens de uma lista.
    let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
    sum += lastDigit; // Passando a soma para a variável; .reduce soma todos os itens da lista.
    if(sum % 10 === 0){ //Se for um múltiplo de 10 o cartão é válido, se não, é inválido.
      window.alert("Cartão Válido")
    } else {
      window.alert("Cartão Inválido")
    }
  },
};

export default validator;


//parseInt (está parseando cada objeto dessa lista para um Int (número), ou seja, está passando as 
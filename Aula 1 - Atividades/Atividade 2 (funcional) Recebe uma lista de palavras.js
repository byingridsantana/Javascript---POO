function ordenarPorTamanho(lista) {
    return lista.sort((a, b) => a.length - b.length);
  }
  
  const palavras = ["banana", "laranja", "uva", "abacaxi"];
  const palavrasOrdenadas = ordenarPorTamanho(palavras);
  console.log(palavrasOrdenadas); 
  
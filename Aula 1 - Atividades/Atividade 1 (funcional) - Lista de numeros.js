function somaQuadradosPares(lista) {
    const numerosPares = lista.filter(numero => numero % 2 === 0);
    const quadradosPares = numerosPares.map(numero => numero ** 2);
    const soma = quadradosPares.reduce((acc, curr) => acc + curr, 0);
    return soma;
  }
  
  const numeros = [1, 2, 3, 4, 5, 6];
  console.log(somaQuadradosPares(numeros)); 
  
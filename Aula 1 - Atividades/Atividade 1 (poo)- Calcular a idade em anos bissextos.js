class Pessoa {
    constructor(nome, idade, cidade) {
      this.nome = nome;
      this.idade = idade;
      this.cidade = cidade;
    }
  
    calcularIdadeBissextos(ano) {
      
      const anosBissextos = contarAnosBissextos(ano);
      const idadeBissextos = this.idade + anosBissextos;
      return idadeBissextos;
    }
  }
  
  function contarAnosBissextos(ano) {
    let anos = 0;
    for (let i = 1960; i <= ano; i += 4) {
      if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
        anos++;
      }
    }
    return anos;
  }
  
  const pessoa1 = new Pessoa('João', 30, 'São Paulo');
  console.log(pessoa1.calcularIdadeBissextos(2050)); // Calcula a idade em 2050
  const pessoa2 = new Pessoa('Maria', 25, 'Rio de Janeiro');
  console.log(pessoa2.calcularIdadeBissextos(2100)); // Calcula a idade em 2100
  
class ConversorDeMoeda {
  constructor(taxaCambio) {
    this.taxaCambio = taxaCambio;
  }

  converter(valor, moedaOrigem, moedaDestino) {
    const valorConvertido = valor * this.taxaCambio;
    console.log(`Valor convertido: ${valorConvertido} ${moedaDestino}`);
    return valorConvertido;
  }
}

const conversorMoeda = new ConversorDeMoeda(5.0); // Taxa de câmbio: 5.0

const valorConvertido = conversorMoeda.converter(100, 'USD', 'BRL');
console.log(`Valor convertido: ${valorConvertido} BRL`);


//console.clear()
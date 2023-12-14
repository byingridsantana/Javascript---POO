class Carro {
    constructor(modelo, ano) {
      this.modelo = modelo;
      this.ano = ano;
      this.ligado = false;
      this.velocidade = 0;
    }
  
    ligar() {
      if (!this.ligado) {
        this.ligado = true;
        return `${this.modelo} foi ligado.`;
      } else {
        return `${this.modelo} já está ligado.`;
      }
    }
  
    desligar() {
      if (this.ligado) {
        this.ligado = false;
        this.velocidade = 0;
        return `${this.modelo} foi desligado.`;
      } else {
        return `${this.modelo} já está desligado.`;
      }
    }
  
    acelerar(velocidade) {
      if (this.ligado) {
        this.velocidade += velocidade;
        return `${this.modelo} acelerou para ${this.velocidade} km/h.`;
      } else {
        return `${this.modelo} precisa estar ligado para acelerar.`;
      }
    }
  
    frear() {
      if (this.velocidade > 0) {
        this.velocidade = 0;
        return `${this.modelo} parou.`;
      } else {
        return `${this.modelo} já está parado.`;
      }
    }
  
    status() {
      return this.ligado ? `${this.modelo} está ligado.` : `${this.modelo} está desligado.`;
    }
  }
  
  const meuCarro = new Carro('Fusca', 1975);
  console.log(meuCarro.status()); 
  console.log(meuCarro.ligar()); 
  console.log(meuCarro.acelerar(50));
  
  console.log(meuCarro.status());
  
  console.log(meuCarro.frear()); 
  console.log(meuCarro.desligar());
  
  console.log(meuCarro.status());
  
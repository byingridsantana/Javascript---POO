class Animal {
    constructor(nome, tipo) {
      this.nome = nome;
      this.tipo = tipo;
    }
  }
  
  class Mamifero extends Animal {
    constructor(nome, tipo) {
      super(nome, tipo);
    }
  
    amamentar() {
      return `${this.nome} é um mamífero e pode amamentar filhotes.`;
    }
  }
  
  class Ave extends Animal {
    constructor(nome, tipo) {
      super(nome, tipo);
    }
  
    voar() {
      return `${this.nome} é uma ave e pode voar!`;
    }
  }
  
  const cachorro = new Mamifero('Totó', 'Cachorro');
  console.log(cachorro.amamentar()); 
  
  const papagaio = new Ave('Loro', 'Papagaio');
  console.log(papagaio.voar()); 
  
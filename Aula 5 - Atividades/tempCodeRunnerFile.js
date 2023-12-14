class Personagem {
    constructor(nome, vida, forca) {
      this.nome = nome;
      this.vida = vida;
      this.forca = forca;
      this.inventario = [];
    }
  
    atacar(alvo) {
      const dano = Math.floor(Math.random() * this.forca);
      alvo.receberDano(dano);
      console.log(`${this.nome} ataca ${alvo.nome} e causa ${dano} de dano.`);
    }
  
    receberDano(dano) {
      this.vida -= dano;
      if (this.vida <= 0) {
        console.log(`${this.nome} foi derrotado!`);
      } else {
        console.log(`${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}`);
      }
    }
  
    adicionarItem(item) {
      this.inventario.push(item);
      console.log(`${this.nome} adquiriu ${item.nome}.`);
    }
  
    usarItem(item, alvo) {
      if (this.inventario.includes(item)) {
        item.aplicarEfeito(alvo);
        const indiceItem = this.inventario.indexOf(item);
        this.inventario.splice(indiceItem, 1);
        console.log(`${this.nome} usou ${item.nome} em ${alvo.nome}.`);
      } else {
        console.log(`${this.nome} não possui ${item.nome} no inventário.`);
      }
    }
  }
  
  class Heroi extends Personagem {
    constructor(nome, vida, forca, arma) {
      super(nome, vida, forca);
      this.arma = arma;
    }
  
    equiparArma(arma) {
      this.arma = arma;
      console.log(`${this.nome} equipou ${arma}.`);
    }
  }
  
  class Monstro extends Personagem {
    constructor(nome, vida, forca, tipo) {
      super(nome, vida, forca);
      this.tipo = tipo;
    }
  
    rugir() {
      console.log(`${this.nome} solta um rugido assustador!`);
    }
  }
  
  class Item {
    constructor(nome, efeito) {
      this.nome = nome;
      this.efeito = efeito;
    }
  
    aplicarEfeito(alvo) {
      console.log(`${this.efeito} é aplicado em ${alvo.nome}.`);
    }
  }

// Criando um herói
const heroi = new Heroi('Herói', 100, 20, 'Espada');

// Criando um monstro
const monstro = new Monstro('Monstro', 80, 15, 'Dragão');

// Criando um item
const pocao = new Item('Poção de Cura', 'Cura +20 de vida');

// Atribuindo o item ao herói
heroi.adicionarItem(pocao);

// Simulando um ataque do herói ao monstro
heroi.atacar(monstro);

// Usando o item de cura no herói
heroi.usarItem(pocao, heroi);

// Simulando um ataque do monstro ao herói
monstro.atacar(heroi);

// Criando um novo herói
const novoHeroi = new Heroi('Novo Herói', 150, 25, 'Machado');

// Adicionando um novo item ao novo herói
const novaArmadura = new Item('Armadura Forte', 'Defesa +30');
novoHeroi.adicionarItem(novaArmadura);

// Simulando um ataque do novo herói ao monstro original
novoHeroi.atacar(monstro);

// Usando o novo item no novo herói
novoHeroi.usarItem(novaArmadura, novoHeroi);

// Simulando um ataque do monstro original ao novo herói
monstro.atacar(novoHeroi);
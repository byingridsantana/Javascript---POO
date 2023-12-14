class Personagem {
    constructor(nome, pontuacao = 0, posicao = { x: 0, y: 0 }) {
      this.nome = nome;
      this.pontuacao = pontuacao;
      this.posicao = posicao;
    }
  
    mover(direcao) {
      // Lógica para mover o personagem na direção especificada
      // Atualiza a posição do personagem
    }
  
    coletarItem(item) {
      this.pontuacao += item.pontos;
      // Lógica para coletar um item
    }
  
    derrotarInimigo(inimigo) {
      this.pontuacao += inimigo.pontos;
      // Lógica para derrotar um inimigo
    }
  
    calcularPontuacao() {
      return this.pontuacao;
    }
  }
  
  class Inimigo {
    constructor(tipo, nivelDificuldade, pontos) {
      this.tipo = tipo;
      this.nivelDificuldade = nivelDificuldade;
      this.pontos = pontos;
    }
  }
  
  class Item {
    constructor(nome, pontos) {
      this.nome = nome;
      this.pontos = pontos;
    }
  }
  
  class Jogo {
    constructor() {
      this.personagens = [];
      this.inimigos = [];
      this.itens = [];
      this.estado = 'iniciado'; // Pode ser 'iniciado', 'pausado' ou 'concluído'
    }
  
    iniciarJogo() {
      // Lógica para inicializar o jogo, criar personagens, inimigos, itens, etc.
      this.estado = 'iniciado';
    }
  
    pausarJogo() {
      this.estado = 'pausado';
      // Lógica para pausar o jogo
    }
  
    concluirJogo() {
      this.estado = 'concluído';
      // Lógica para concluir o jogo
    }
  }
  
  // Exemplo de uso:
  
  const jogo = new Jogo();
  jogo.iniciarJogo();
  
  const personagem1 = new Personagem('Herói');
  const inimigo1 = new Inimigo('Esqueleto', 3, 50);
  const item1 = new Item('Poção', 20);
  
  personagem1.derrotarInimigo(inimigo1);
  personagem1.coletarItem(item1);
  
  console.log('Pontuação do jogador:', personagem1.calcularPontuacao());
  
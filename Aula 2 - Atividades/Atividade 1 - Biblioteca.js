class Autor {
    constructor(nome, nacionalidade) {
      this.nome = nome;
      this.nacionalidade = nacionalidade;
    }
  
    exibirDetalhes() {
      console.log(`Autor: ${this.nome}, Nacionalidade: ${this.nacionalidade}`);
    }
  }
  
  class Livro {
    constructor(titulo, anoPublicacao, autor) {
      this.titulo = titulo;
      this.anoPublicacao = anoPublicacao;
      this.autor = autor;
    }
  
    detalhesDoLivro() {
      console.log(`Título: ${this.titulo}, Ano de Publicação: ${this.anoPublicacao}`);
      this.autor.exibirDetalhes();
    }
  }
  
  class Biblioteca {
    constructor() {
      this.livros = [];
    }
  
    adicionarLivro(livro) {
      this.livros.push(livro);
    }
  
    listarLivros() {
      console.log('Livros na Biblioteca:');
      this.livros.forEach(livro => {
        console.log(`- ${livro.titulo}`);
      });
    }
  
    buscarLivrosPorAutor(autor) {
      console.log(`Livros do autor ${autor.nome}:`);
      const livrosDoAutor = this.livros.filter(livro => livro.autor === autor);
      livrosDoAutor.forEach(livro => {
        console.log(`- ${livro.titulo}`);
      });
    }
  }
  
  const autor1 = new Autor('Machado de Assis', 'Brasileiro');
  const autor2 = new Autor('George Orwell', 'Inglês');
  
  const livro1 = new Livro('Dom Casmurro', 1899, autor1);
  const livro2 = new Livro('1984', 1949, autor2);
  const livro3 = new Livro('O Alienista', 1882, autor1);
  
  const biblioteca = new Biblioteca();
  
  biblioteca.adicionarLivro(livro1);
  biblioteca.adicionarLivro(livro2);
  biblioteca.adicionarLivro(livro3);
  
  biblioteca.listarLivros();
  
  const autorParaBuscar = autor1;
  biblioteca.buscarLivrosPorAutor(autorParaBuscar);
  
  livro1.detalhesDoLivro();
  livro2.detalhesDoLivro();
  
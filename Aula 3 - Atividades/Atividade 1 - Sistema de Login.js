class SistemaDeLogin {
    constructor() {
      this.usuarios = [];
    }
  
    cadastrarUsuario(nome, senha) {
      this.usuarios.push({ nome, senha });
      console.log(`Usuário ${nome} cadastrado com sucesso.`);
    }
  
    realizarLogin(nome, senha) {
      const usuarioEncontrado = this.usuarios.find(usuario => usuario.nome === nome && usuario.senha === senha);
      if (usuarioEncontrado) {
        console.log(`Login bem-sucedido para o usuário ${nome}.`);
        return nome;
      } else {
        console.log('Nome de usuário ou senha incorretos.');
        return null;
      }
    }
  
    exibirMensagemPersonalizada(nome) {
      return `Bem-vindo, ${nome}!`;
    }
  }
  
  // Criando instância do sistema de login
  const sistemaLogin = new SistemaDeLogin();
  
  // Cadastrando usuários
  sistemaLogin.cadastrarUsuario("Ingrid1", "senha123");
  sistemaLogin.cadastrarUsuario("Joana2", "abc456");
  
  // Realizando login e exibindo mensagem personalizada
  const usuarioLogado = sistemaLogin.realizarLogin("Ingrid1", "senha1234");
  if (usuarioLogado) {
    console.log(sistemaLogin.exibirMensagemPersonalizada(usuarioLogado));
  } else {
    console.log('Não foi possível realizar o login.');
  }
  
 // console.clear()
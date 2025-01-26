alert("Arquivo script.js carregado!");
// Função para mudar o conteúdo ao clicar na playlist
function selecionaAlbum(id) {
    // Ocultar a section principal e mostrar a de conteúdo
    document.querySelector('.conteudo-principal').style.display = 'none';
    document.querySelector('.conteudo').style.display = 'block';
  
    // Alterando o conteúdo conforme o ID da playlist clicada
    if (id === 'choro') {
      mudarConteudo('Crying, But With Style', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, saepe?', 'album1.png', 'choro');
    } else if (id === 'safado') {
      mudarConteudo('UUIII, NAUGHTY!!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex explicabo, error aliquid?', 'album2.png', 'safado');
    } else if (id === 'festa') {
      mudarConteudo('Dance, Kitten. Dance!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex explicabo, error aliquid?', 'album3.png', 'festa');
    }
  }

function voltar(){
    document.querySelector('.conteudo-principal').style.display = 'block';
    document.querySelector('.conteudo').style.display = 'none';
}
  
  // Função para mudar o conteúdo da section "conteudo"
  function mudarConteudo(titulo, descricao, imagem, classe) {
    // Alterando os elementos da section "conteudo"
    document.getElementById('titulo-album').innerText = titulo;
    document.getElementById('descricao-album').innerText = descricao;
    document.getElementById('texto-album').innerText = descricao;
    document.querySelector('.album').src = `assets/img/${imagem}`;
    document.querySelector('.degrade').className = `degrade ${classe}`; // Troca a classe
  }
  
  // Adicionando os eventos de click para as playlists dinamicamente
  document.getElementById('choro').addEventListener('click', () => selecionaAlbum('choro'));
  document.getElementById('safado').addEventListener('click', () => selecionaAlbum('safado'));
  document.getElementById('festa').addEventListener('click', () => selecionaAlbum('festa'));
  
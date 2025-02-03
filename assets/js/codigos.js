function selecionaAlbum(id) {
  // Ocultar todas as sections de playlists
  document.querySelectorAll('.conteudo').forEach((section) => {
    section.style.display = 'none';
  });

  // Ocultar a section principal
  document.getElementById('conteudo-principal').style.display = 'none';

  // Exibir a section correspondente ao ID clicado
  const section = document.getElementById(`conteudo-${id}`);
  section.style.display = 'block';
}

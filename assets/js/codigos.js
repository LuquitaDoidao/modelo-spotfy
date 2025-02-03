// mudança de paginas
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

// enviar formulario
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".formulario form");
  const tampa = document.querySelector(".tampa");
  const botao = form.querySelector("button"); // Supondo que o botão de envio seja um <button> dentro do form

  botao.addEventListener("click", function (event) {
      event.preventDefault(); // Evita o envio do formulário, caso necessário
      form.style.display = "none"; // Esconde o formulário
      tampa.style.display = "flex"; // Mostra o elemento com a classe "tampa"
  });
});

function pesquisar() {
  // Seleciona a seção HTML onde os resultados serão exibidos
  const section = document.getElementById("resultados-pesquisa");

  // Obtém o termo de pesquisa digitado pelo usuário
  const termoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  // Verifica se o usuário digitou algum termo
  if (termoPesquisa === "") {
      section.innerHTML = "<p>Por favor, digite uma palavra-chave para pesquisar.</p>";
      return; // Interrompe a função se o termo estiver vazio
  }

  // Inicializa uma variável para armazenar os resultados da pesquisa
  let resultados = "";
  
  //Declarando titulo e descricao
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada jogo no array de dados
  for (const jogo of data) {
      //Atribue titulo, descricao e tags
      titulo = jogo.titulo.toLowerCase().includes(termoPesquisa);
      descricao = jogo.descricao.toLowerCase().includes(termoPesquisa);
      tags = jogo.tags.toLowerCase().includes(termoPesquisa);
      // Verifica se o título do jogo contém o termo de pesquisa (ignorando maiúsculas e minúsculas)
      if (titulo || descricao || tags) {
          // Cria um elemento HTML para exibir as informações do jogo
          resultados += `
              <div class="item-resultado">
                  <h2>
                      <a href="${jogo.trailer}" target="_blank">${jogo.titulo}</a>
                  </h2>
                  <p class="descricao-meta">${jogo.descricao}</p>
                  <a href="${jogo.steam}" target="_blank">Página da Steam</a>
              </div>
          `;
      }
  }

  // Verifica se foram encontrados resultados
  if (resultados === "") {
      section.innerHTML = `<p>Nenhum jogo foi encontrado para o termo: "${termoPesquisa}"</p>`;
  } else {
      // Exibe os resultados da pesquisa
      section.innerHTML = resultados;
  }
}
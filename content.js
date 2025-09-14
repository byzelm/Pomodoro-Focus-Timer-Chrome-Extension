function aplicarModoEstudo() {
  chrome.storage.local.get("ativo", (data) => {
    if (data.ativo) {
      // YouTube - remove vídeos recomendados
      let sidebar = document.getElementById("related");
      if (sidebar) sidebar.style.display = "none";

      // Twitter - remove trending topics
      let trends = document.querySelector('[aria-label="Timeline: Assuntos do momento"]');
      if (trends) trends.style.display = "none";
    } else {
      // Restaura elementos se usuário desativar
      let sidebar = document.getElementById("related");
      if (sidebar) sidebar.style.display = "";

      let trends = document.querySelector('[aria-label="Timeline: Assuntos do momento"]');
      if (trends) trends.style.display = "";
    }
  });
}

// Executa quando a página carrega
aplicarModoEstudo();

// Escuta mudanças no storage para atualizar em tempo real
chrome.storage.onChanged.addListener((changes) => {
  if (changes.ativo) aplicarModoEstudo();
});

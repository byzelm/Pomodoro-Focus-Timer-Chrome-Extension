const toggleBtn = document.getElementById("toggle");
const statusText = document.getElementById("status");

chrome.storage.local.get("ativo", (data) => {
  atualizarUI(data.ativo);
});

toggleBtn.addEventListener("click", () => {
  chrome.storage.local.get("ativo", (data) => {
    const novoStatus = !data.ativo;
    chrome.storage.local.set({ ativo: novoStatus });
    atualizarUI(novoStatus);
  });
});

function atualizarUI(ativo) {
  if (ativo) {
    toggleBtn.textContent = "Desativar";
    statusText.textContent = "Status: Ativo ✅";
  } else {
    toggleBtn.textContent = "Ativar";
    statusText.textContent = "Status: Inativo ❌";
  }
}

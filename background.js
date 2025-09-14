chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ ativo: false });
  console.log("Modo de Estudo instalado. Status inicial: inativo.");
});

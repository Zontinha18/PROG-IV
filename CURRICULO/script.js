// Exibir saudação ao carregar
window.addEventListener("load", () => {
    alert("Bem-vindo(a) ao meu currículo interativo!");
});

// Alterar título com o nome digitado
document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    document.getElementById("saudacao").innerText = `Olá, ${nome}! Bem-vindo(a) ao meu currículo`;
});

// Canvas simples
const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#4CAF50";
ctx.fillRect(50, 50, 100, 100);
ctx.strokeStyle = "#000";
ctx.strokeRect(50, 50, 100, 100);

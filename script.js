// Adiciona efeito visual ao passar o mouse sobre as linhas da tabela
document.addEventListener("DOMContentLoaded", () => {
  const linhas = document.querySelectorAll("tbody tr");

  linhas.forEach((linha) => {
    linha.addEventListener("mouseenter", () => {
      linha.style.transform = "scale(1.01)";
      linha.style.transition = "transform 0.15s ease-in-out";
    });

    linha.addEventListener("mouseleave", () => {
      linha.style.transform = "scale(1)";
    });
  });
});

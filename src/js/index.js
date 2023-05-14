const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemTrocarTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro");
    body.classList.toggle("modo-escuro");
    if (modoEscuroAtivo) {
        imagemTrocarTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        imagemTrocarTema.setAttribute("src", "./src/imagens/moon.png");
    }
});
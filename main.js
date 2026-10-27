
const nomes = ["Guilherme", "Silva", "Nascimento"];

const formulario = document.getElementById("formulario");
const campoNome = document.getElementById("nome");
const lista = document.getElementById("lista");

function exibirNomes() {
    lista.innerHTML = "";

    for (let nome of nomes) {
        lista.innerHTML += `<li>${nome}</li>`;
    }
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = campoNome.value;

    if (nome.trim() !== "") {
        nomes.push(nome);
        campoNome.value = "";
        exibirNomes();
    }
});

exibirNomes();

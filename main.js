document.getElementById("meuFormulario").addEventListener("submit", function(event){
    event.preventDefault();

    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);
    const resultadoDiv = document.getElementById("mensagemResultado");

    if (campoB > campoA) {
        resultadoDiv.textContent = "Formulário válido: Campo B é maior que Campo A.";
        resultadoDiv.style.color = "green";
    } else {
        resultadoDiv.textContent = "Formulário inválido: Campo B deve ser maior que Campo A.";
        resultadoDiv.style.color = "red";
    }
});

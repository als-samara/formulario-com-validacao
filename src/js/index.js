const botaoDeEnviar = document.getElementById("botao-submit")
const inputs = document.querySelectorAll(".input-content")

inputs.forEach(input => {
    input.addEventListener("change", () => {
        if (input.value !== "") {
            input.parentElement.classList.remove("mostrar");
            input.parentElement.classList.add("campo-preenchido");
        } else {
            input.parentElement.remove("campo-preenchido");
        }
    });
});

botaoDeEnviar.addEventListener('click', () => {
    event.preventDefault();
    inputs.forEach(input => {
        if(input.value === ""){            
            input.parentElement.classList.add("mostrar")
        } else {            
            input.parentElement.classList.remove("mostrar")
        }
    })
})










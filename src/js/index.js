const botaoDeEnviar = document.getElementById("botao-submit")
const inputs = document.querySelectorAll(".input-content")

inputs.forEach(input => {
    input.addEventListener("change", () => {
        const inputDiv = input.parentElement;
        if (input.value !== "") {
            inputDiv.classList.remove("mostrar");
            inputDiv.classList.add("campo-preenchido");
        } else {
            inputDiv.classList.remove("campo-preenchido");
        }
    });
});

botaoDeEnviar.addEventListener('click', () => {
    event.preventDefault();
    inputs.forEach(input => {
        const inputDiv = input.parentElement;
        if(input.value === ""){            
            inputDiv.classList.add("mostrar")
        } else {            
            inputDiv.classList.remove("mostrar")
        }
    })
})










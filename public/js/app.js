let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let signo = document.getElementById("signo");
let operacion = document.getElementById("operacion");
let mostrarResultado = document.getElementById("mostrarResultado");
let reset = document.getElementById("reset");

operacion.addEventListener("click", () => {
    let output = num1.value + signo.value + num2.value;
    console.log(output)
    calculadora(output);
});
reset.addEventListener("click", () => {
    resetear();
});

const resetear = () => {
    num1.value = "";
    num2.value = "";
    signo.value = "";
    mostrarResultado.innerHTML = "";
};

const calculadora = (output) => {
    output = eval(output);
    mostrarResultado.innerHTML = output;

}


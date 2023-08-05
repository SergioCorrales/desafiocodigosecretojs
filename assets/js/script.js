function resultadocontraseña() {
    const numeroUno = document.getElementById("primernumero").value;
    const numeroDos = document.getElementById("segundonumero").value;
    const numeroTres = document.getElementById("tercernumero").value;
    const password = numeroUno + numeroDos + numeroTres;

    const resultado = document.getElementById("resultado");

    if (password == 911){
        resultado.textContent = "contraseña 1 es correcto"
    }
    else if (password == 714){
        resultado.textContent = "contraseña  2 es correcto"
    }
    else {
        resultado.textContent = "contraseña incorrecta"
    }
}
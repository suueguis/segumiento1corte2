let stringIngresada = prompt(`Ingrese la palabra para que sea invertida por nuestro programa`)

alert(invertirTexto(stringIngresada));

function invertirTexto(str) {
    let resultado = "";

    for(let i = str.length - 1; i >= 0; --i) {
        resultado += str[i];
    }

    return resultado;
}

console.log(numPalindromico(String(22)));
console.log(numPalindromico(String(12)));

function numPalindromico (numero) {
    let numeroInvertido = '';

    for(let i = numero.length - 1; i >= 0; --i) {
        numeroInvertido += numero[i];
    }

    console.log(numero); // Comprobar numero en principio ingresado.
    console.log(numeroInvertido); // Comprobar el proceso de inversion del numero.

    return numeroInvertido == numero ? true : false;
}
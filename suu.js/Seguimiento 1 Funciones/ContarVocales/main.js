let palabraIngresada = string(prompt(`Ingrese una frase o palabra de la cual desee conocer el número de vocales con las que cuenta.`));

alert(contarVocales(palabraIngresada));

function contarVocales (frase) {
    if(typeof frase != 'string'){
        alert(`Error. Por favor ingresar una cadena de texto`)
    }

    let vocales = 'aeiouAEIOU';
    let contadorVocales = 0;

    for(let i = 0; i < frase.length; ++i) {
        if(vocales.indexOf(frase[i]) !== -1) {
            ++contadorVocales;
        }
    }

    return contadorVocales;
}
console.log(divisoresPosibles(2));
console.log(divisoresPosibles(5));
console.log(divisoresPosibles(10));
console.log(divisoresPosibles(12));
console.log(divisoresPosibles("13"));

function divisoresPosibles (numero) {
    if(typeof numero != 'number') {
        alert(`Por favor ingrese un valor numerico.`)
    }

    let cantidadTotal = 0;

    for(let i = 1; i < numero; i++){
        if (numero % i == 0) {
            cantidadTotal++;
        }
    }

    return cantidadTotal;
}

let numeroSeleccionado = parseInt(prompt(`Ingrese un numero cualquiera el cual desee conocer si es primo o no; si llega a ser un numero primo saldra TRUE sino lo es saldra FALSE`));

alert(detectarNumPrimo(numeroSeleccionado));

function detectarNumPrimo(n) {
    if(n <= 0) {
        return false;
    }
    let contadorModulo0 = 0;
    for(let i = 1; i <= n; i++){
        if(n % i === 0) {
            contadorModulo0++;
        }
    }
    return contadorModulo0 === 2 ? true : false;
}

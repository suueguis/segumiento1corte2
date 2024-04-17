console.log(potenciacion(2, 3));
console.log(potenciacion(3, 2));
console.log(potenciacion(2, 5));
console.log(potenciacion("2", 5));

function potenciacion(base, exponente) {
    if(typeof base != 'number' || typeof exponente != 'number'){
        alert(`Error: Ingrese por favor valores numericos.`)
    } 

    let potencia = 1;

    for(let i = 1; i <= exponente; ++i) {
        potencia *= base;
    }

    return potencia;
}
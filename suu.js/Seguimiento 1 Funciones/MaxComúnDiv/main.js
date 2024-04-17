alert(maxComunDivisor(12, 14));
alert(maxComunDivisor(7, 14));

function maxComunDivisor (num1, num2) {
    if (typeof num1 != 'number' || !Number.isInteger(num1)) {
        alert(`El primer argumento ingresado debe ser un numero entero.`)
    }

    if (typeof num2 != 'number' || !Number.isInteger(num2)) {
        alert(`El segundo argumento ingresado debe ser un numero entero.`)
    }

    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    let x;

    while(num2) {
        x = num2;
        num2 = num1 % num2;
        num1 = x;
    }

    return num1;
}
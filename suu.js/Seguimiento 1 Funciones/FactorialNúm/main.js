let numeroSeleccionado = parseInt(prompt(`Ingrese un dígito que sea un entero positivo del cual desee conocer su valor factorial.`));
let factorial = 1;

operacionFactorial(numeroSeleccionado);

function operacionFactorial(num) {
    if(num < 0){
        alert(`Por favor ingrese un número entero positivo.`)
    } else if ( num == 0) {
        alert(`El valor de ${num}! es igual a ${factorial}`)
    } else {
        for(let i = 1; i <= num; i++){
            factorial *= i;
        }
        alert(`El valor de ${num}! es igual a ${factorial}`);
    }
};
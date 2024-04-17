
let limiteFibonacci = parseInt(prompt(`Ingrese el limite de repeticiones que desea conocer de la serie Fibonacci`));

alert(fibonacci(limiteFibonacci));

function fibonacci(limit) {
    const arrayInit = [0, 1];
    for(let i = 2; i <= limit; i++) {
        arrayInit.push(arrayInit[i - 1] + arrayInit[i - 2]);
    }
    return arrayInit;
} 
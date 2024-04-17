const denominations = [50000,20000,10000,5000, 2000, 1000]; // Crea un array que se asigna a la constante denominations

function getWithdrawalAmount() { // Indica la cantidad de dinero que se desea retirar.
  const userInput = prompt("¿Cuánto dinero deseas retirar  ?"); // Crea un recuadro donde el usuario indica la cantidad a retirar, y esto se asigna a la constante userInput
  return parseFloat(userInput); // Float permite que se puedan ingresar valores decimales
}

function calculateBilletsNeeded(amount) { // Según la cantidad de dinero que se desea retirar, calcula los billetes necesarios para el retiro
  return denominations.map(denomination => { // Devuelve un map que tiene como parámetro una función flecha
    const billetsNeeded = Math.floor(amount / denomination); //.floor Redondea la división entre amount (cantidad de billetes) y denomination (valor según array) al entero, pero hacia abajo (Ej. 5.6 = 5)
    amount -= billetsNeeded * denomination; // A la cantidad de dinero se le resta y asigna el producto de la cantidad de billetes y el valor de estos
    return billetsNeeded; // Retorna cantidad de billetes
  });
}


function isValidWithdrawalAmount(amount) { // Función para verificar que sea un número apto para el retiro, retorna true siempre que sea un número mayor a 0
  return amount > 0 && amount % 1 === 0;
}

function ATMTransaction() { // Funcion general del funcionamiento del cajero
  const withdrawalAmount = getWithdrawalAmount(); // Variable que indica cantidad de dinero a retirar, se invoca la primera función

  if (!isValidWithdrawalAmount(withdrawalAmount)) { // Invoca la función isValidWithdrawalAmount siendo el parámetro el dinero a retirar
    alert("El monto solicitado no es válido."); // Al ser una negación, si el monto NO es válido para el retiro, hace un alert.
    return;
  }

  const billetsNeeded = calculateBilletsNeeded(withdrawalAmount); // A la constante se le invoca y asigna la función de contar billetes siendo el parámetro el monto a retirar

  alert("Para retirar $" + withdrawalAmount + ", necesitas:"); // Alerta la cantidad de billetes necesarios para retirar el monto asignado
  denominations.forEach((denomination, index) => { // .forEach hace un recorrido en denominations, que es el array donde están los valores de los billetes
    if (billetsNeeded[index] >= 0) { // Busca que la cantidad de billetes sea mayor o igual a cero
      alert("- " + billetsNeeded[index] + " billetes de $" + denomination); // Devuelve los billetes necesitados de cada denominación
 }});
}


ATMTransaction(); // Se invoca la función general del funcionamiento del cajero
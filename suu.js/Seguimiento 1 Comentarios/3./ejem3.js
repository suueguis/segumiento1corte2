// Se asignan falso a las variables para indicar que las salas están vacías
const sala1 = Array(10).fill(false);
const sala2 = Array(10).fill(false);

function verDisponibilidad() { // Muestra los asientos que se encuentran disponibles y los que no
  alert("Sala 1:");
  alert(sala1.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
  alert("Sala 2:");
  alert(sala2.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
}

function reservarAsiento() { // Función que permite reservar algun asiento de cualquiera de las dos salas

  const sala = prompt("Ingresa el número de la sala (1 o 2)"); // Variable que guarda la sala que ingrese el usuario en el prompt
  const asiento = parseInt(prompt("Ingresa el número del asiento (1 a 10)")) - 1; // Variable que guarda el asiento escogido entre 1 y 10

  if (sala === "1" && !sala1[asiento]) { // Reserva el asiento que se seleccione en la sala 1
    sala1[asiento] = true;
    
    alert(`Asiento ${asiento + 1} de la sala 1 reservado.`); // Alerta que el asiento de la sala 1 fue reservado

  } else if (sala === "2" && !sala2[asiento]) {  // Reserva el asiento que se seleccione en la sala 2
    sala2[asiento] = true;
   
    alert(`Asiento ${asiento + 1} de la sala 2 reservado.`); // Alerta que el asiento de la sala 2 fue reservado
  } else {
    alert("El asiento ya está reservado o la sala no es válida."); // Si no escoge ninguna se las dos salas, o un asiento inválido
  } // Alerta que escogió una opción que no está o un asiento reservado
}

function verOcupacion() { // Función que muestra cuantos asientos hay libres en cualquiera de las dos salas
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const asientosLibres = sala === "1" ? sala1.filter(asiento => !asiento) : sala2.filter(asiento => !asiento);

  if (asientosLibres.length > 0) {
    alert(`Hay ${asientosLibres.length} asientos libres en la sala ${sala}.`);
    alert("Disfrutad de la película!");
  } else {
    alert(`Lo siento, todos los asientos de la sala ${sala} están reservados.`);
  }
}

function verBalance() { // Agregar función verBalance() muestra el monto recaudado por las dos salas y ambas salas

  // Variables que definen precios a las boletas
  const precioSala1 = 15000;
  const precioSala2 = 20000;

  const sala = prompt(`Ingrese el numero de la sala la cual desea ver el monto recogido (1 o 2)`);

  // Se filtra entre el array de cada sala para encontrar cuales son TRUE
  const asientosOcupados = sala === "1" ? sala1.filter( asiento => asiento ) : sala2.filter( asiento => asiento );

  // Cuenta la cantidad de elementos TRUE en cada array con el .length y lo multiplica con el valor de la boletería de cada sala
  let totalRecaudado =  ((sala1.filter( asiento => asiento ).length) * precioSala1) + ((sala2.filter( asiento => asiento ).length) * precioSala2);


  // Muestra los resultados correspondientes para cada sala además de mostrar el valor del balance total de ambas salas
  if (sala == 1) {
    if(asientosOcupados.length > 0) {
    alert(`La sala ${sala} ha recaudado $${asientosOcupados.length * precioSala1} y hay ${asientosOcupados.length} asientos vendidos`);
  } else {
    alert(`No hay nada recaudado, aun no hay asientos ocupados en la sala ${sala}`)
  } 
  
  } else if (sala == 2) {
    if(asientosOcupados.length > 0) {
      alert(`La sala ${sala} ha recaudado $${asientosOcupados.length * precioSala2} y hay ${asientosOcupados.length} asientos vendidos`);
    } else {
      alert(`No hay nada recaudado, aun no hay asientos ocupados en la sala ${sala}`)
    } 
  }
  else {
    alert(`Sala ingresada incorrecta, ingrese (1 o 2)`)
  } 
  alert(`Ambas salas han recaudado ${totalRecaudado}`);
}


// Menú de la app con las diferentes funcionalidades
while (true) {
  const opcion = prompt("Bienvenido a la sala de cine: " + "Selecciona una opción:" + "\n 1. Ver disponibilidad de asientos" + 
  "\n 2. Reservar asiento"+ "\n 3. Ver ocupación sala" + "\n 4. Ver balance de monto recogido por sala" + "\n 5. Salir" );

  switch (opcion) {
    case "1":
      verDisponibilidad();
      break;
    case "2":
      reservarAsiento();
      break;
    case "3":
      verOcupacion();
      break;
    case "4":
        verBalance();
        break;
    case "5":
      alert("¡Hasta luego!");
        break;
    default:
      alert("Opción no válida. Intenta de nuevo.");
  }
}
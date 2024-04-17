
const rooms = [100, 101, 102, 103, 201, 202, 203, 301, 302, 303]; // Se crea un array con las habitaciones y se asigna a la variable rooms
const roomStatus = Array(10).fill(false); // Asigna a todos los elementos del array como false, para indicar que están vacías
const roomReservations = {}; // Se crea un objeto vacío con las reservaciones


const reserveRoom = (roomNumber, name) => {  // Crea una función flecha donde se guardarán las habitaciones asignadas, siendo los parámetos el número de habitación y nombre
  const index = rooms.indexOf(roomNumber); // Variable a la cual se asigna el índice de posición dentro del array de la habitación a reservar, 
  // Si el número de habitación no existe, retorna -1
  if (index !== -1 && roomStatus[index] === false) { // En caso de que la habitación exista y esté desocupada, entra en el código
    roomStatus[index] = true; // Al número de habitación se le asigna True, que vendría siendo que ya está reservada
    roomReservations[roomNumber] = name; // Al objeto roomReservations se le asigna la propiedad número de habitación y como valor el nombre del reservante
    alert(`La habitación ${roomNumber} ha sido reservada por ${name}.`); // Alerta el número de habitación y nombre del reservante
  } else {
    alert(`La habitación ${roomNumber} ya está reservada.`); // Si el valor del número de la habitación ya era true, alerta que ya estaba reservada
  }
};


const freeRoom = (roomNumber) => { // Se crea una constante para las habitaciones que se vayan desocupando
  const index = rooms.indexOf(roomNumber);
  if (index !== -1 && roomStatus[index] === true) { // Si identifica que la habitación estaba siendo utilizada y ya no hay nadie, cambia su valor a false
    roomStatus[index] = false; // Como se puede ver acá
    delete roomReservations[roomNumber]; // Elimina el número de habitación y el nombre asignado del objeto
    alert(`La habitación ${roomNumber} ha sido liberada.`); // Alerta que la habitación se liberó
  } else {
    alert(`La habitación ${roomNumber} ya está libre.`); // Alerta que la habitación ya estaba libre antes
  }
};


const showAvailableRooms = () => { // Se crea una función que muestra las habitaciónes vacías
  const availableRooms = rooms.filter((room, index) => { // Filtra entre las habitaciónes y hace recorrido en el arreglo
    return roomStatus[index] === false; // Retorna sólo las habitaciónes que tengan como valor false
  });

  if (availableRooms.length > 0) { // Si hay habitaciones disponibles, nos muestra cuáles
    alert(`Las habitaciones disponibles son: ${availableRooms.join(', ')}`);
  } else {
    alert('No hay habitaciones disponibles.'); // Si no, alerta que no hay
  }
};


const showOccupancy = () => { // Nos muestra las habitaciones ocupadas, al igual que las desocupadas
  const availableRooms = rooms.filter((room, index) => { // Filtra dentro del array y busca aquellas que tengan como valor false (desocupadas)
    return roomStatus[index] === false;
  });
  const reservedRooms = rooms.filter((room, index) => { // Filtra dentro del array y busca aquellas que tengan como valor true (ocupadas)
    return roomStatus[index] === true;
  });
  alert(`Hay ${availableRooms.length} habitaciones disponibles y ${reservedRooms.length} habitaciones reservadas.`);
}; // Alerta la cantidad de habitaciones disponibles y la cantidad de habitaciones reservadas respectivamente


const handleUserInput = () => { // Función para interactuar con el usuario
  let userInput; // Variable donde se asigna la opción elegida por el usuario
  do { // Ciclo que funciona como menú
  
    userInput = prompt('Menú \n' + '1. Reservar una habitación '+ // Muestra el menú y nos permite realizar las opciones que se encuentran allí
    ' 2. Liberar una habitación'+
    ' 3. Consultar ocupación' +
  ' 4. Salir');

    switch (userInput) { // Realiza un switch para cada caso
      case '1': // Caso 1 si eligió reservar una habitación
      // Pregunta el número de habitación a reservar
        const roomNumber = parseInt(prompt('Ingrese el número de la habitación:\n[100, 101, 102, 103, 201, 202, 203, 301, 302, 303]:'));
        if (!isNaN(roomNumber) && rooms.includes(roomNumber)) { // Busca si el número de la habitación es un valor numérico y está entre el arreglo de la variable rooms
          const name = prompt('Ingrese su nombre:'); // Pide el nombre del reservante y se asigna a la variable name
          reserveRoom(roomNumber, name); // Se reserva la habitación
        } else {
          // Si el número de habitación no es un valor numérico o no se encuentra en rooms, alerta que es inválido
          alert('Número de habitación inválido. Intente de nuevo.'); 
        }
      
        break; // Se acaba caso 1, si no escogió ese, pasa al caso 2
      case '2': // Caso 2 si eligió liberar una habitación
      // Pregunta el número de habitación a liberar
        const roomNumberToFree = parseInt(prompt('Ingrese el número de la habitación que desea liberar:'));
        if (!isNaN(roomNumberToFree) && rooms.includes(roomNumberToFree)) { // Busca si el número de la habitación es un valor numérico y está entre el arreglo de la variable rooms
          freeRoom(roomNumberToFree); // Se libera la habitación
        } else {
          // Si el número de habitación no es un valor numérico o no se encuentra en rooms, alerta que es inválido
          alert('Número de habitación inválido. Intente de nuevo.');
        }
        break; // Se acaba caso 2, si no escogió ese ni el 1, pasa al caso 3
      case '3': // Caso 3 si eligió consultar la ocupación
        showOccupancy(); // Muestra las habitaciónes ocupadas y desocupadas
        break; // Se acaba caso 3, si no escogió ese, el 2, ni el 1, pasa al caso 4
      case '4': // Caso 4 si elige la opción de salir
        alert('Saliendo...'); // Muestra un mensaje que dice Saliendo...
        break; // Se acaba caso 4, si no escogió ninguno de los anteriores, pasa a default
      default: // Default si escribió algo que no se encuentra en el menú
        alert('Opción inválida. Intente de nuevo.'); // Alerta opción inválida
        break; // Fin del switch
    }
  } while (userInput !== '4'); // El ciclo se repite siempre y cuando el valor que se ingrese sea diferente a 4, que es la opción de salir
};

// Ejecutar la función que combina la interacción con el usuario y las opciones del menú
handleUserInput();
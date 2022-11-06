import { Hotel } from "./hotel.js";
document.getElementById("newHotel").addEventListener("click", createHotel); // la funcion sin parentesis xq no la llamamos todavia
document.getElementById("deleteHotel").addEventListener("click", deleteHotel);
document.getElementById("checkHotel").addEventListener("click", checkHotel);
document.getElementById("modifyHotel").addEventListener("click", modifyHotel);

const totalHotels = []; // array donde se guardaran todos los hoteles

function createHotel() {
	const name = prompt("Introduce the name of the hotel");
	const roomQuantity = prompt("Introduce the number of rooms");
	const floorQuantity = prompt("Introduce the number of floors");
	const hotelSurface = prompt("Introduce the total surface of the hotel");
	const hotel = new Hotel(name, roomQuantity, floorQuantity, hotelSurface);
	totalHotels.push(hotel); // agregamos los hoteles al array
	console.log(totalHotels)
	// document.getElementById("listHotels").innerHTML= totalHotels.join("<br>" + "<br>") // imprimir por pantalla uno debajo del otro, la lista de hoteles que se van creando
}

function deleteHotel() {
	const hotelName = prompt(
		"Introduce the name of the hotel that you want to delete"
	);
	const indexHotelFound = totalHotels.findIndex( 
		(hotel) => hotel.getName() === hotelName); // buscamos el nombre y comparamos
	if (indexHotelFound === -1)
		return alert("The hotel introduced does not exist"); // validamos
	totalHotels.splice(indexHotelFound, 1); // especificamos la posicion y la cantidad de hoteles que queremos borrar (se podria añadir depsues de otra coma y entre"")
	alert(`${hotelName} has been deleted`);
}

function checkHotel() {
	const hotelName = prompt("Introduce the name of the hotel you want to see");

	function isHotel(ele) {
		if (hotelName === ele.getName()) return true;
	}

	const hotelFound = totalHotels.find(isHotel);

	if (!hotelFound) return alert("The hotel introduced does not exist");

	const calculateHouseKeeping = hotelFound.calculateHouseKeeping();

	document.getElementById("hotel").innerHTML =
		hotelFound + "<br>" + calculateHouseKeeping;
}

function modifyHotel() {
	const hotelName = prompt(
		"Introduce the name of the hotel you want to modify" // metemos el nombre
	);
	const hotelFound = totalHotels.find((hotel) => hotel.getName() === hotelName); // lo buscamos

	if (!hotelFound) return alert("The hotel introduced does not exist"); // mirar si existe

	const wantToChangeNumOfRooms = confirm(
		"Do you want to change the number of rooms?"
	);

	if (wantToChangeNumOfRooms) { 	// si quiere cambiar el num de habitaciones, pedir un numero nuevo por prompt	
		const newNumberRooms = prompt("Introduce the new number of rooms"); // este numero se guarda en una variable
		hotelFound.setRoomQuantity(newNumberRooms); // seleccionamos el hotel mencionando el array y la posicion
		// y invocamos el metodo con el nuevo numero que hemos puesto en prompt
		alert("Changes made correctly");
	}

	const changeNumberFloors = confirm(
		"Do you want to change the number of floors?"
	);

	if (changeNumberFloors) {
		const newNumberFloors = prompt("Introduce the new number of floors");
		hotelFound.setFloorQuantity(newNumberFloors);
		alert("Changes made correctly");
	}

	const hotelChangeSurface = confirm(
		"Do you want to change the total surface of the hotel?"
	);

	if (hotelChangeSurface) {
		const newHotelSurface = prompt("Introduce the new hotel surface");
		hotelFound.setHotelSurface(newHotelSurface);
		alert("Changes made correctly");
	}
}

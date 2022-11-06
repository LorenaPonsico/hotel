export class Hotel {
	#name;
	#roomQuantity;
	#floorQuantity;
	#hotelSurface;

	constructor(name, roomQuantity, floorQuantity, hotelSurface) {
		this.#name = name;
		this.#roomQuantity = roomQuantity;
		this.#floorQuantity = floorQuantity;
		this.#hotelSurface = hotelSurface;
	}
	getName() {
		return this.#name;
	}
	getRoomQuantity() {
		return this.#roomQuantity;
	}
	getFloorQuantity() {
		return this.#floorQuantity;
	}
	getHotelSurface() {
		return this.#hotelSurface;
	}
	setName(value) {
		this.#name = value;
	}
	setRoomQuantity(value) {
		this.#roomQuantity = value;
	}
	setFloorQuantity(value) {
		this.#floorQuantity = value;
	}
	setHotelSurface(value) {
		this.#hotelSurface = value;
	}
    calculateHouseKeeping() {
       const workersNecessary =  Math.ceil(this.#roomQuantity / 20)  // math.ceil redondea al grande
       const totalSalaries = (workersNecessary * 1500)
       return `The total number of workers is ${workersNecessary} and the cost will be ${totalSalaries}`
    }
    toString() {
        let hotelMessage = `Name: ${this.#name} <br> Number of rooms: ${this.#roomQuantity} <br> Number of floors: ${this.#floorQuantity} <br> Hotel surface: ${this.#hotelSurface} m2`;
        return hotelMessage;
      }
    }

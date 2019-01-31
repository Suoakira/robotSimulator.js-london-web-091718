class Robot {
	constructor(name) {
		this.name = name
		this.coordinates = [0, 0],
		this.bearing = "north",
		this.directions = ["north", "south", "east", "west"]
	}//your solution here


	setCoordinates(x,y) {
		this.coordinates = [x, y]
	}

	setBearing(bearing) {
		console.log(this.directions.includes(bearing))
		if (this.directions.includes(bearing)) { 
			this.bearing = bearing
		} else { 
			throw new ("Not a valid Bearing")
		}
	}

}

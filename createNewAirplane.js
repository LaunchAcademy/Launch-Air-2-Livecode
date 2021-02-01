const createNewAirplane = (make,model,capacity) =>{
  return {
    make: make,
    model: model, 
    capacity: capacity, 
    flights:[],
    scheduleFlight(flight) {
      this.flights.push(flight)  
    },
    printString: "We will be flying to\n",
    printFlights(printString){
      this.flights.forEach(flight => {
        this.printString += `${flight.destination}\n`
      })
      console.log(this.printString)
    } 
  }  
}

export default createNewAirplane
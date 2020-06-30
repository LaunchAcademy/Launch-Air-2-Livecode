class Airplane {
  constructor(make, model, capacity){
    this.make = make
    this.model = model
    this.capacity = capacity
    this.flights = []
  }

  scheduleFlight(flight){
    this.flights.push(flight)
    return this.flights
  }
}

export default Airplane
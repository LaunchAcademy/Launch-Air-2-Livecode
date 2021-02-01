import Ticket from "./Ticket.js"

class Passenger {
  constructor(name) {
    this.name = name
    this.flights = []
  }

  purchaseTicket(flight, seatNumber) {
    // create a new ticket
    // debugger
    let newTicket = new Ticket(
      flight,
      this,
      seatNumber
    )

    // add the flight into the passenger's flight array
    this.flights.push(flight)

    // return the new ticket so we can save it as a variable
    return newTicket
  }
}

export default Passenger
import Ticket from './Ticket.js'

class Passenger {
  constructor(name){
    this.name = name
    this.flights = []
  }

  purchaseTicket(flight, seat){
    let ticket = new Ticket(flight, this.name, seat)
    this.flights.push(flight)
    return ticket
  }
}

export default Passenger
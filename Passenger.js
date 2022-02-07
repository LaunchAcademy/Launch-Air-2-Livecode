import Ticket from "./Ticket.js"

class Passenger {
  constructor(name) {
    this.name = name
    this.tickets = []
  }

  purchaseTicket(flight, seatNumber) {
    debugger
    const ticket = new Ticket(flight, seatNumber)
    this.tickets.push(ticket)
    return ticket
  }
}

export default Passenger
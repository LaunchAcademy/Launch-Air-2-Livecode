// your code here
import Airplane from "./Airplane.js"
import Flight from "./Flight.js"
import Passenger from "./Passenger.js"

let airplane1 = new Airplane("Airplane1", "747", 500)
let flight1 = new Flight("Feb 7", "10AM", "12PM", "Seattle", "Key West")
console.log("airplane before scheduling flight:", airplane1)

airplane1.scheduleFlight(flight1)

console.log("airplane after scheduling flight:", airplane1)
console.log("flight object", flight1)

let patrick = new Passenger("Patrick Stevenson")
let ryne = new Passenger("Ryne Rountree")
let amira = new Passenger("Amira T")
console.log("patrick", patrick);
console.log("ryne", ryne);
console.log("amira", amira);

let ticket1 = patrick.purchaseTicket(flight1, "12D")
let ticket2 = ryne.purchaseTicket(flight1, "12F")

console.log("patrick after booking flight", patrick);
console.log("patrick's ticket", ticket1);
console.log("ryne after booking flight", ryne);
console.log("ryne's ticket", ticket2);
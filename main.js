import Airplane from "./Airplane.js"
import Flight from "./Flight.js"
import Passenger from "./Passenger.js"

// your code here
const boeingMax = new Airplane("Boeing", "Max", 250)
const romansFlight = new Flight("Oct 1", "9 am", "11 am", "Boston", "Chicago")
boeingMax.scheduleFlight(romansFlight)

const johnDoe = new Passenger("John Doe")
const suzyQ = new Passenger("Suzy Q")
console.log("Our passengers:", johnDoe, suzyQ)

let maidenFlight = new Flight(
  'September 2',
  '10AM',
  '1PM',
  'Boston',
  'San Diego'
)
let earhart = new Passenger('Amelia Earhart')
let ticket1 = earhart.purchaseTicket(maidenFlight, '6E')
console.log(ticket1)
console.log(earhart.tickets)
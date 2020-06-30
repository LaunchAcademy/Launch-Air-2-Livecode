// your code here
import Airplane from './Airplane.js'
import Flight from './Flight.js'
import Passenger from './Passenger.js'

let magic777 = new Airplane('Magic', '777', 150)
let maidenFlight = new Flight(
    'September 2',
    '10am',
    '1pm',
    'Boston',
    'San Diego'
)
let secondFlight = new Flight(
    'September 3',
    '10am',
    '1pm',
    'San Deigo',
    'Bos Diego'
)

let mrTaco = new Passenger('Mr. Taco')
let msMonkey = new Passenger('Ms. Monkey')
let tacoTicket = mrTaco.purchaseTicket(maidenFlight, 'cabin kitchen seat')
let monkeyTicket = msMonkey.purchaseTicket(secondFlight, 'EmergencyExitSeatB')
magic777.scheduleFlight(maidenFlight)
magic777.scheduleFlight(secondFlight)

console.log(magic777)
console.log(tacoTicket)
console.log(monkeyTicket)

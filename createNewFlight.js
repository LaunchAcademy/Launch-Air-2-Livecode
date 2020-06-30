const createNewFlight = (date, takeOffTime, landingTime, origin, destination) => {
    return {   
      date:date, 
      takeOffTime:takeOffTime, 
      landingTime:landingTime, 
      origin:origin, 
      destination:destination,
      homeWardFlight(){
        if (this.destination === "San Diego"){
          console.log("Welcome Home San Diego")
        } else{
          console.log("Enjoy your vacation!")
        }
      } 
    }
} 

export default createNewFlight
function Passengers() {
    function checkFlightCapacity(flightCapacity, passengersArray){
        let passengerTotal = 0
        for (let i = 0; i<passengersArray.lenght; i++){
            passengerTotal = passengerTotal + passengersArray[i];
        }
        console.log(passengerTotal);
        if (passengerTotal>flightCapacity) {
            throw new Error(' ')
        }else{
            return passengerTotal
        }
    }

    function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, nrOfFlights, businessSeatsPerFlight, economySeatsPerFlight){


    }
    return {checkFlightCapacity}
}

module.exports = Passengers();


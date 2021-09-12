function Passengers() {
    function checkFlightCapacity(flightCapacity, passengersArray){
        let passengerTotal = 0
        for (let i = 0; i<passengersArray.length; i++){
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
        let econSeatsAvailable = nrOfFlights * economySeatsPerFlight;
        let busSeatsAvailable = nrOfFlights * businessSeatsPerFlight;
        let vipLeft = vipPassengers;
        let regLeft = regularPassengers;
        let vipWithBusiness = (vipLeft <= busSeatsAvailable) ? vipLeft : busSeatsAvailable;
        vipLeft = vipLeft - vipWithBusiness;
        busSeatsAvailable = busSeatsAvailable - vipWithBusiness;

        let vipWithEcon = (vipLeft <= econSeatsAvailable) ? vipLeft : econSeatsAvailable
        econSeatsAvailable = econSeatsAvailable - vipWithEcon

        let regWithBusiness = (regLeft <= busSeatsAvailable) ? regLeft : busSeatsAvailable
        regLeft = regLeft - regWithBusiness

        let regWithEcon = (regLeft <= econSeatsAvailable) ? regLeft : econSeatsAvailable

        return ({
            vipPassengersWithBusinessSeats: vipWithBusiness,
            vipPassengersWithEconomySeats: vipWithEcon, 
            regularPassengersWithBusinessSeats: regWithBusiness,
            regularPassengersWithEconomySeats: regWithEcon
        })
    }
    return {checkFlightCapacity, distributeAllSeatsToAllPassengers}
}

module.exports = Passengers();


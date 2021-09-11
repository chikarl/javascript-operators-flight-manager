function Flights() {
    function calculateNumberOfFlights(passengers, capacity){
        let numberOfFlights;
        if ( passengers<0 || (!Number.isInteger(Number(passengers)))){
            throw new Error("The number of passengers must be a positive integer value") 
        }    
        if (capacity<0 || (!Number.isInteger(Number(capacity)))){
            throw new Error("The capacity of the flight must be a positive integer value"  )
        }
        if (passengers%capacity === 0){
            numberOfFlights = passengers/capacity;
            //console.log(numberOfFlights);
            return numberOfFlights
        }else{
            numberOfFlights = Math.floor(passengers/capacity) + 1;
            //Sconsole.log(numberOfFlights);
            return numberOfFlights
        }
    
    }

    function checkAircraftRevision(distanceLimit, distancesArray){
        let totalDisance = 0;
        for (let i = 0; i < distancesArray.lenght; i++){
            totalDisance = totalDisance + distancesArray[i]
        }
        if (totalDisance <= (distanceLimit/2)){
            return "The revision needs to be done within the next 3 months"
        }else if (totalDisance <= 3*(distanceLimit/4)){
            return "The revision needs to be done within the next 2 months"
        }else if (totalDisance <= distanceLimit){
            return "The revision needs to be done within the next month"
        }else{
            return Error
        }
    }
    return {calculateNumberOfFlights, checkAircraftRevision};

    //calculateNumberOfFlights(1001, 100)
}
Flights()
module.exports = Flights();
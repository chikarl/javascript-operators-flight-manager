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
        let totalDistance = 0;
        for (let i = 0; i < distancesArray.length; i++){
            totalDistance = totalDistance + distancesArray[i]
        }
        console.log(totalDistance);
        if (totalDistance > distanceLimit){
            throw new Error
        }
        if (totalDistance <= (distanceLimit/2)){
            return "The revision needs to be done within the next 3 months"
        }else if (totalDistance <= 3*distanceLimit/4){
            return "The revision needs to be done within the next 2 months"
        }else if (totalDistance <= distanceLimit){
            return "The revision needs to be done within the next month"
        }
    }
    return {calculateNumberOfFlights, checkAircraftRevision};

    //calculateNumberOfFlights(1001, 100)
}

module.exports = Flights();
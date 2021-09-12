function Util() {
    function calculateTotalDistributedPassengers(distributedPassengers){
        let totalNumPass = 0
        for (const numpass in distributedPassengers){
            totalNumPass = totalNumPass + distributedPassengers[numpass]
        }
        console.log(totalNumPass);
        return totalNumPass
    }

    function calculateTotalNumberOfPassengers(passengersArray){
        let totalPassArr = 0
        for (let i = 0; i < passengersArray.length; i++){
            totalPassArr = totalPassArr + passengersArray[i] 
        }
        return totalPassArr
    }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers}
}

module.exports = Util();



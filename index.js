// Code your solution in this file!
const drivers =['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers=(drivers)=>{
    return[drivers[0] , drivers[1]]

}
const returnLastTwoDrivers=(drivers)=>{
    return[drivers[2],drivers[3]]
}
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]
const driverss=selectingDrivers[0]()
console.log(drivers)
function createFareMultiplier(multiplier){
    return function (fare){
        return fare*multiplier
    }
}
/*const fareDoubler=
createFareMultiplier(2);
fareDoubler(fare){
    return fare*2
}
const fareTripler=
createFareMultiplier(3)
fareTripler(fare){
    return fare*3
}*/

function selectDifferentDrivers(drivers,func){
    if (func ===returnFirstTwoDrivers){
        return  returnFirstTwoDrivers(drivers.slice(0,1))
    }else if(func ===returnLastTwoDrivers){
        return returnLastTwoDrivers(drivers.slice(2,3))
    }
}
/*result.push(drivers[0])
        result.push(drivers[1])
    }else if(func==='returnLastTwoDrivers'){
        result.push(drivers[2])
        result.push(drivers[3])*/

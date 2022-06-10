// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
  let d=42;
    return someValue>d? someValue-d: d-someValue;
}

function distanceFromHqInFeet(someValue){
    let d=42;
    const feet=264;
    return someValue>d? (someValue-d)*feet:(d-someValue)*feet
}
function  distanceTravelledInFeet(someValue,destination){
    const feet=264;
return someValue<destination? (destination-someValue)*feet:(someValue-destination)*feet
}
function calculatesFarePrice(start, destination){
    const feet=264
   let distance= distanceTravelledInFeet(start,destination);
   let fare=0
    if (distance<=400){
        fare=0
        return fare;
    }
        else if(distance>400 && distance<=2000){
        fare=0.02*(distance-400);
        return fare;
    }  else if(distance>2000 && distance<=2500){
        fare=25
        return fare
    }
          else(distance>2500);{
        
        return 'cannot travel that far';
    }
}
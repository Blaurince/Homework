


function   addTwoNumbers(val1, val2){
     
    let sum;
    sum = val1 + val2

    console.log(sum);
}


addTwoNumbers(3,4);
addTwoNumbers(20,-20);


//write the function that a nimber of adults, a number of childrem, and 
// the number of beds in a vaction home and returns true if there are enough
// beds for everyone and falsw if not. Assume that adults will sleeep 2 to a bed

function enoughBeds(numAdults, numKiddos, numBeds){
    // divide the number of adults by 2
    const adultBeds = numBeds / 2
    // add that the the number of kiddos
    const totalBedNedded = adultBeds
     + numKiddos
    // is that result <= number of beds
if(totalBedNedded <= numBeds){
    return true
} else {
    return false
}
const canWeFit = enoughBeds(8, 4, 5)
console.log("Can we fit?", canWeFit)

}



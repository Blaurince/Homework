

// Question 1
function multiplyTwoNum(num1, num2){
    const val = num1 * num2
    return val
}


const result = multiplyTwoNum(3, 5);
console.log(result);



//Question 2
function assignGrade(valueGrade){
let letterGrade 
    if(valueGrade >= 90 && valueGrade<= 100){
        letterGrade = 'A';
    } else if (valueGrade >= 80 && valueGrade < 90){
        letterGrade = 'B';
    } else if (valueGrade >= 70 && valueGrade < 80){
        letterGrade = 'C';
    } else if (valueGrade >=60 && valueGrade <70){
        letterGrade = 'D';
    } else if (valueGrade >0 && valueGrade <60){
        letterGrade = 'F';
    } else {
        letterGrade = -1;
    }

    return letterGrade;
}


const gradeResult = assignGrade(89);
if (gradeResult == -1 ){
    console.log('invalid grade Imput');
}
else { 
    console.log(gradeResult);
}

//Question 3
const favCarList = [
     "BMW",
    "RangeRover",
    "Bentley",
    "Ferrari"
]

console.log(favCarList)
const totalCount = favCarList.lenght;
console.log("favCarList")


// Question 4
function getArrayFirstElem(Arr){
    return Arr[0]
}

const CarList = [
    "BMW", //0
   "RangeRover", //1
   "Bentley", //2
   "Ferrari" //3
]

const firstElmResult = getArrayFirstElem(CarList);
console.log(firstElmResult);

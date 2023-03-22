// set variables
 
// Question 1
function animalSounds(animal){

    switch( animal){
    case 'dog':
            console.log('woof');
            break
        
    
    case 'cat':
        console.log('meow');
        break
    
    case 'owl':
            console.log('hoot');
            break
    
    
    default:
        console.log('undefined');
    }
    
    }
    animalSounds('dog');
    animalSounds('cat');
    animalSounds('owl');

    // Question 2

// create function named displayFoodColor
function displayFruitColor(fruitName){
    if (fruitName == 'banana'){
        console.log('yellow');
    } else if (fruitName == 'apple'){
        console.log('red');
    } else if (fruitName === 'Kiwi'){
        console.log('green');
    }else if (fruitName == 'grape'){
        console.log('purple');
    } else console.log('undifined');
}

displayFruitColor('banana');
displayFruitColor('apple');
displayFruitColor('Papaya')
displayFruitColor('Kiwi')

// Question 3

function   addTwoNumbers(val1, val2){
     
    let sum;
    sum = val1 + val2

    console.log(sum);
}


addTwoNumbers(3,4);
addTwoNumbers(20,-20);
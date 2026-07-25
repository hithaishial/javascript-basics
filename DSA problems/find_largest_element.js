function largestElement(){

    let oddNumbers = [75, 31, 89, 43, 29]
    let largest = oddNumbers[0];

    for(let i = 1; i < oddNumbers.length; i++){
        
        if(oddNumbers[i] > largest){
            
            largest = oddNumbers[i];
        }
    }
    
    console.log("the largest element is: ", largest);
}

function secondLargestElement(){

    let oddNumbers = [75, 31, 89, 43, 29]
    let largest = oddNumbers[0];
    let secondLargest;

    for(let i = 0; i < oddNumbers.length; i++){

        if(oddNumbers[i] >= largest){

            secondLargest = largest;
            largest = oddNumbers[i];
            
        }else if (oddNumbers[i] > secondLargest && oddNumbers[i] < largest) {
            
            secondLargest = oddNumbers[i];
        }
    }

    console.log("The second largest number is: ", secondLargest);
}

function secondSmallestElement() {

    let numbers = [75, 31, 89, 43, 29];
    let smallest = numbers[0];
    let secondSmallest;

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] <= smallest) {

            secondSmallest = smallest;
            smallest = numbers[i];

        } else if (numbers[i] < secondSmallest || secondSmallest === undefined) {

            secondSmallest = numbers[i];
        }
    }

    console.log("The second smallest number is: ", secondSmallest);
}


largestElement();
secondLargestElement();
secondSmallestElement();
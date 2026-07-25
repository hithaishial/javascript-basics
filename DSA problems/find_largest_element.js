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

largestElement();
secondLargestElement();
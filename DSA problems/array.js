function reverseArray() {
    let numbers = [75, 31, 89, 43, 29];
    let reversed = [];

    for (let i = numbers.length - 1; i >= 0; i--) {

        reversed.push(numbers[i]);
    }

    console.log("Original array: ", numbers);
    console.log("Reversed array: ", reversed);
}

reverseArray();

function copyArrayIntoOther(){

    let originalArr = ["lilly", "rose", "daisy", "tulip", "jasmine", "lotus"]
    let copiedArr = []

    for (let i = 0; i < originalArr.length; i++) {
    copiedArr.push(originalArr[i]);
  }

  console.log(copiedArr);
}

function moveZeroesToEnd(){

    let array = [1, 0, 2, 0, 3, 0, 4, 0]
    let index = 0;

    for(let i = 0; i < array.length; i++){

        if(array[i] != 0){
            array[index] = array[i];
            index++;
        }
    }

    for(let i = index; i < array.length; i++){

        array[i]=0;
    }

    console.log("The array after moving zeroes to the end is: ", array);
}

function removeDuplicateElements(){

    let flowers = ["lilly", "rose", "daisy", "rose", "tulip", "lilly"];
    let counts = {};

    for (let i = 0; i < flowers.length; i++) {
        let flower = flowers[i];
        counts[flower] = (counts[flower] || 0) + 1;
    }

    console.log("Flower counts:", counts); 

    let uniqueFlowers = Object.keys(counts);
    console.log("Unique list:", uniqueFlowers);
}

copyArrayIntoOther();
moveZeroesToEnd();
removeDuplicateElements();



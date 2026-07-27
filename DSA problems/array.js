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

    for(let i = 0; i < array.length; i++){

        if(array[i] == 0){
            array.push(array[i]);
        }
    }

    console.log("The array after moving zeroes to the end is: ", array);
}

copyArrayIntoOther();
moveZeroesToEnd();



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

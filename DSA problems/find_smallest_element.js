function smallestElement(){

let numbers1 = [39, 98, 654, 16, 82]
let smallest = numbers1[0];

for(let i=1; i<numbers1.length; i++){

    if(smallest > numbers1[i]){
        smallest = numbers1[i];
    }

}
console.log("the smallest element is: ", smallest);
}

smallestElement();

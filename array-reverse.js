function reverseArray(a){
    
    let lowerPointer = 0;
    let greaterPointer = a.length - 1;

    while (lowerPointer < greaterPointer){

        let tmp = a[lowerPointer]
        a[lowerPointer] = a[greaterPointer]
        a[greaterPointer] = tmp
        
        lowerPointer++
        greaterPointer--
    }

    return a
}

let arr = [1,4,3,2];
reverseArray(arr);
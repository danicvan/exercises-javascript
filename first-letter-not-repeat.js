const str = "Google";
let uniqueFirst = "";

const mapLetters = new Map();

for (let a = 0; a < str.length; a++){
    let letter = str.charAt(a).toLocaleLowerCase();

    // Exist letter?
    if (mapLetters.has(letter)){
        console.log(`Exist letter: ${letter}`);
        mapLetters.set(letter, mapLetters.get(letter) + 1)
    } else {
        mapLetters.set(letter, 1)
    }
}

console.log(mapLetters);

for (let [key, value] of mapLetters){
    if (value == 2){
        console.log(key)
        break
    }
}
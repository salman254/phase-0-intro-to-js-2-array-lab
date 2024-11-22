// Define the initial cats array
let cats = ["Milo", "Otis", "Garfield"]; 

// Destructive methods
function destructivelyAppendCat(name) {
    cats.push(name);  // Adds a cat to the end
}

function destructivelyPrependCat(name) {
    cats.unshift(name);  // Adds a cat to the beginning of 
}

function destructivelyRemoveLastCat() {
    cats.pop();  // Removes the last cat 
}

function destructivelyRemoveFirstCat() {
    cats.shift();  // Removes the first cat 
}

// Nondestructive methods
function appendCat(name) {
    return [...cats, name];  // Returns a new array with the added cat, original array is not changed
}

function prependCat(name) {
    return [name, ...cats];  // Returns a new array with the cat at the beginning, original array is not changed
}

function removeLastCat() {
    return cats.slice(0, cats.length - 1);  // Returns a new array with the last cat removed
}

function removeFirstCat() {
    return cats.slice(1);  // Returns a new array with the first cat removed
}



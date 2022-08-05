// Write your solution here!
// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function catNames(cats) {
    return cats;
};
console.log(cats);

function destructivelyAppendCat(name) {
    return cats.push(name);
}
destructivelyAppendCat(Ralph);

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}
destructivelyPrependCat(Bob);

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    return [...cats, name];
}

function prependCat(name) {
    return [name, ...cats];
}

function removeLastCat() {
    return cats.slice(0, -1);
}

function removeFirstCat() {
    return cats.slice(1);
}
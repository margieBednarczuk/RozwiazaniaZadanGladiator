// Treść zadania #6 - metody wbudowane w Array
// z uwagi na to, że JS jest jezykiem funkcyjnym warto opanować jego podstawowe metody

// .map
// .filter
// .reduce
// .reduceRight
// .every
// .some
// .entries

// Stwórz funkcje, które będą działać identycznie co metody wbudowane
// ale będą działać przy pomocy pętli for lub while

// function mapFn(array, callback){}

// function filterFn(array, callback){}

// function reduceFn(array, callback, initial){}

// function reduceRightFn(array, callback, initial){}

// function everyFn(array, callback){}

// function someFn(array, callback){}

// function entriesFn(array){}

const array1 = [7, 44, 10, 77, 5, 6];

function myMapFunction(num) {
  return num * 10;
}

//Map
function mapFn(array, callback) {
  const results = [];
  for (let i of array) {
    results.push(callback(i));
  }
  return results;
}
//Check map
console.log("Funkcja zwykla map " + mapFn(array1, myMapFunction));
console.log("Funkcja ES6 map " + array1.map(myMapFunction));

//Filter
function filterFn(array, callback) {
  const results = [];
  for (let i of array) {
    callback(i) && results.push(i);
  }
  return results;
}
//Check filter
function myFilterFunction(num) {
  return num > 7;
}

console.log("Funkcja zwykla filter" + filterFn(array1, myFilterFunction));
console.log("Funkcja ES6 filter" + array1.filter(myFilterFunction));

//Reduce
function reduceFn(array, callback, initial) {
  const results = initial;
  for (let i of array) {
    if (results === undefined) {
      results = array[i];
      continue;
    }
    results = callback(results, array[i], i, array);
  }
  return results;
}

//Check reduce
function myReduceFunction(num, current) {
  return num + current;
}
//console.log('Funkcja zwykla reduce' + reduceFn(array1, myReduceFunction, 0));
console.log("Funkcja ES6 reduce" + array1.reduce(myReduceFunction));

//Every
function everyFn(array, callback) {
  for (let i of array) {
    if (!callback(i)) {
      return false;
    }
  }
  return true;
}

//Check every
function myFunctionEvery(el) {
  return el >= 7;
}
console.log("Funkcja zwykla every " + everyFn(array1, myFunctionEvery));
console.log("Funkcja ES6 every " + array1.every(myFunctionEvery));

//Some
function someFn(array, callback) {
  for (let i of array) {
    if (callback(i)) {
      return true;
    }
  }
  return false;
}

//Check some
function myFunctionSome(el) {
  return el >= 444;
}
console.log("Funkcja zwykla some " + someFn(array1, myFunctionSome));
console.log("Funkcja ES6 some " + array1.some(myFunctionSome));

//Entries
function entriesFn(array) {
  let results;
  for (let i of array) {
    results = [[Symbol.iterator], i];
  }
}
//Check some
console.log("Funkcja zwykla entries " + entriesFn(array1));

function myEntries() {
  for (let el of array1.entries()) {
    console.log(el);
  }
}
console.log(myEntries());

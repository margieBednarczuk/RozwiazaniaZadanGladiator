// za pomocą metody .reduce wbudowanej w array
// odtwórz działanie innych metod:

// - array.some
// - array.every
// - array.filter
// - array.map


mySomeReduce = function (arr, fn) {
  return arr.reduce(function (a, b) {
    return a === true || fn(a) === true ? true : fn(b) ? true : false;
  });
};

//Check some
const someReduceTrue = mySomeReduce([1, 2, 3, 4], function (a) {
  return a == 3;
});

const someReduceFalse = mySomeReduce([1, 2, 3, 4], function (a) {
  return a == 15;
});
console.log("Some z reduce powinno być true", someReduceTrue);
console.log("Some z reduce powinno być false", someReduceFalse);

//Reduce z every
myEveryReduce = function (arr, fn) {
  return arr.reduce(function (a, b) {
    return a === true && fn(a) === true ? true : fn(b) ? true : false;
  });
};

const reduceEvery = myEveryReduce([1, 2, 3, 4], function (a) {
  return a > 12;
});
console.log("Every z reduce ", reduceEvery)

// Map z reduce

function myMapReduce(arr, fn){
  return arr.map(x => fn(x))
  .reduce((x1, x2) => x1 * x2);
}
// Check map with reduce
const mapReduce =myMapReduce([1, 2, 3, 4], x=>x)

console.log(`Map z reduce ` +mapReduce);


//Filter with reduce

function myFilterReduce(arr, fn){
  return arr.filter(x => fn(x))
  .reduce((x1, x2)=> x1+x2)
}

// Check filter with reduce
const filterReduce = myFilterReduce([1, 2, 3, 4, 7, 10], x=> x>3)
console.log(`Filter z reduce ` +filterReduce);
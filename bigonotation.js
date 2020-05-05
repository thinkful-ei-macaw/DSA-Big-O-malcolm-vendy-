////1. 1. Big O
//input 15 --> output 1
//1 operation
//O(1) constant time

////1. 2. Big O
//input 15-> output ?
//O(n)

// 2. Even or odd
// input 1
// 1 operation
// O(1) -> constant complexity
function isEven(value) {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

//3. Are you here?
//input n
//comparing values of the two arrays
//O(n^2) ->polynomial complexity
function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

// 4. Doubler
// input of size n
// run n operations
// O(n) -> linear complexity
function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

//5. Naive search
//input n
//run n # of operations
//O(n)-> linear complexity
function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    //O(n)
    if (array[i] === item) {
      //constant time O(1)
      return i;
    }
  }
}

// 6. Creating pairs
// example input: [a,b,c,d] 4
// example output: 'a, b', 'b, c', 'c, d'
// input of size n
// n * n or n^2
// O(n^2) -> polynomial complexity
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    // O(n)
    for (let j = i + 1; j < arr.length; j++) {
      // O(n^2)
      console.log(arr[i] + ", " + arr[j]);
    }
  }
}

//7.Compute the sequence
// i=1
// [0]
// i = 2
// [1]
// >2
// results = [0,1]
// i = 3
// results[3-2] + results[3-3]
// results[1] + results[0]
// 1 + 0
// [0,1,1]
// results[4-2]+results[4-3]
// results[2] + results[1]
// 1+1
// [0,1,1,2]
// Fibonnaci series, adds last two together.
// input 1 -> output
// O(2^n) exponential complexity
function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    //O(n)
    if (i === 1) {
      result.push(0);
    } else if (i === 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}

// 8. An efficient search
// example input: [1,2,3,4,5,6,7,8] size 8, 6
// trimmed: [4,5,6,7,8]
// input size n
// output (log n)
// O(log n) => logarithmic complexity
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    } else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  return -1;
}

//9.Random Element
//input n --> 1
//1 operation
//O(1)
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// 10. What am I?
// this function determines if a number is a prime number
// input n
// as the input grows, we run n operations
// O(n) => linear complexity
function isWhat(n) {
  if (n < 2 || n % 1 !== 0) {
    return false;
  }
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) return false;
  }
  return true;
}

//11.Tower of Hanoi
//O(2^n) exonential complexity
//2 operations performed on n(#) of items
function towerOfHanoi(discs) {

  const poles = { "A": [], "B": [], "C": [] };
  let moves = 0;

  // put the discs on the first pole
  for (let i = discs; i > 0; i--) poles["A"].push(i);

  const hanoi = (discs, source, destination, temp) => {
    if (discs === 1) {
      print(source, destination);
    } else {
      // move all others discs to temp pole
      hanoi(discs - 1, source, temp, destination);
      // print that move
      print(source, destination);
      // move other discs from temp pole to original destination
      hanoi(discs - 1, temp, destination, source); 
    }
  }

  const print = (source, destination) => {
    const disc = poles[source].pop()
    poles[destination].push(disc);
    moves++

    console.log(`Moving "${disc}" from ${source} -> ${destination}`);
    console.log(poles, '\n');
  }

  // do it
  console.log(poles, '\n');
  hanoi(discs, "A", "C", "B");
  console.log(moves);

}

towerOfHanoi(5);
//1.counting sheep
function sheepCounting(num) {
  for (let i = num; i >= 0; i--) {
    if (i === 0) {
      console.log("All sheep jumped over the fence");
    } else {
      console.log(`${i} have jumped over the fence.`);
    }
  }
}

// power calculator
function powerCalculator(base, exponent) {
  // to hold product at each step
  let currentValue = 1;

  // start from the exponent counting down, multiplying base by itself at each step
  for (let i = exponent; i > 0; i--) {
    currentValue *= base;
  }

  return currentValue;
}
//Reverse string
function reverseString(str) {
  let result = str.split('');
  for (let i = 0; i < str.length; i++) {
    let j = str.length - i - 1;
    // if i >= j return str 
    if(i>=j){ 
      return result.join('');
    }
    else{
      // "hello"
      // i 2   j 2
      // temp = str[1] => "e"
      // str[1] = str[3] => "l"
      // str[3] = temp => "e"

      let temp = result[i];
      result[i] = result[j];
      result[j] = temp;
    }
  }
}

// nth triangular number
function nthTriangularNumber(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

// String splitter
function stringSplitter(str, separator){
  //results = [10, 20, 2020]
  let results = [];
  //temp = '10' 
  let temp = '';
  for(let i = 0; i < str.length; i++){
    //str[i] = /
    if(str[i] === separator){
      results.push(temp);
      temp='';
    } else{
      temp+= str[i];
    }
  }
  //to accomodate characters after last slash
  if(temp.length !==0){
    results.push(temp);
  }
  return results;
}

// fibonacci
function fibonacci(num) {
  let sequence = [];
  for (let i = 1; i <= num; i++) {
    if (i <= 2) {
      sequence.push(1);
    } else {
      sequence.push(sequence[i-2] + sequence[i-3]);
    }
  }

  return sequence;
}


//Factorial
function factorial(num){
  //5
  let results = 1;
  //1   i = 
  for(let i = num; i > 0 ; i--){
    results *= i;
  }
  return results;
}
console.log(factorial(5));
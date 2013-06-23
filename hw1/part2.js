#!/usr/bin/env node
var fs = require('fs');
var outfile = "part2.txt";
var out = getPrimes(100);

fs.writeFileSync(outfile, out);
console.log(out);

function getPrimes(size){
  var i = 2 ; primes = [];

  while(primes.length < size){
    if (isPrime(i)){
      primes.push(i);
    }
    i = i + 1;
  }
 return primes.join(",");
}

function isPrime(num){
  for (var j = 2; j < num; j++){
    if (num % j == 0){
      return false;
    }
  }
  return true;
}

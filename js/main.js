//Two Sum algorithm
//Results should be an arrays of arrays
function twoSum(numArray, sum){
  //Returns every pair of numbers from 'numArray'
  //that adds up to the 'sum'
  var pairs = [];
  var hashtable = [];

  for (var i = 0; i < numArray.length; i++){
    var currNum = numArray[i];
    var counterpart = sum - currNum;
    if(hashtable.indexOf(counterpart) !== -1){
      pairs.push([ currNum, counterpart]);
    }
    hashtable.push(currNum);
  }
  return pairs;
}
function twoSum(numArray, sum) {
  var pairs = [];
  var hashTable = [];

  for (var i = 0; i < numArray.length; i++) {
    var currNum = numArray[i];
    var counterpart = sum - currNum;
    if (hashTable.indexOf(counterpart) !== -1) {
      pairs.push([ currNum, counterpart ]);
    }
    hashTable.push(currNum);
  }

  return pairs;
}

twoSum([1, 6, 4, 5, 3, 3], 7);

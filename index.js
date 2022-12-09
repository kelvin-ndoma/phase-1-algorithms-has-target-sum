function hasTargetSum(array, target) {
  //write  your algorithm here
  //I need to iterate over the array of numbers to find my two number using their indeces.
  for(let i=0;i<array.length;i++){
    //next I find the  first number that should add to another number to get the target i.e remaiming number=(target-currentnumber)
    let remainder = target-array[i];
    //iterate over the remaining numbers to look for the number that should be added to the first no. above to get target
    //this is of time complexity o(n^2)
    for(let j=i+1; j<array.length; j++){
      if (array[j] ===target-array[i]){
        return true
        
      }
    }
  }
  return false
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;

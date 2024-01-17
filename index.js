// 1. Create an empty array and fill it with different elements using the push-method. Log it to the console.
 //let myArray = [];
 //myArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
 //console.log(myArray);


// 2. Create an array containing arbitrary numbers. Loop throught that array and multiply each element with 3 and log that to the console.
 let Array = [4, 8, 12, 15, 25, 30, 32, 34];
for(let i = 0; i < Array.length; i++){
  let result = Array[i] * 3;
  console.log(result);
 }


// 3. Create an array with numbers, and one empty array. Loop through the array with numbers and do an if check in each iteration. If that number is bigger then a specific number, 5 for example, add that number to the empty array. Log the new array to the console in the end. Remember to use the indexes to get the elements from the array with numbers.
let myArray = [2, 4, 5, 6, 8, 10, 12, 11, 9];
 let newArray = [];
 let i = 0;
 while(i < myArray.length){
   if (myArray[i] > 5){
         newArray.push(myArray[i]);
     }
     i++;
}
 console.log(newArray);


// 4. Create an array with random numbers. Loop through the array and add them all together. Log the total sum of all the elements to the console. `hint` - You will need a variable here that store the sum as you iterate over the array.
 let RanArray = [2, 5, 8, 10, 16, 12, 8, 20];
 let j = 0;
 do {
     let sum = RanArray.reduce((a, b) => a + b, 0);
     console.log(sum);
     j++;
 } while (j < RanArray.length)


// 5. Create an array with some elements. Now search for a specific element while you are looping through the array. If you find the element you are searching for, log it to the console.
 let array = [10, 4, 6, 15, 16, 28, 28, 15];
 array.forEach(item => 
  {
    if (item === 16){
        console.log(item);
     }
    })


// 6. Create an array with some elements, remove the last element **WITHOUT** using `pop()`.
 let removArray = [2, 3, 4, 6, 8, 10, 12, 15];
 console.log(removArray);
removArray = removArray.slice(0, -1);
 console.log(removArray);


// 7. Create an array with 10 different numbers. Find the biggest number in the array and log it to the console. `hint` - You will need a variable that holds the current biggest number.
 let ThisArray = [5, 8, 80, 12, 48, 17, 75, 23, 95, 25];
 console.log(ThisArray);
 let biggestNumber = Math.max(...ThisArray);
 console.log(biggestNumber);


// 8. Create an array with some elements and an empty array. Using a loop, copy the content of the first array to the empty array.
 let oldArray = [36, 18, 65, 86, 34, 12, 5, 22];
 let MynewArray = [];
  let x = 0;
  while (x < oldArray.length){
 MynewArray.push(oldArray[x]);
    x++;
  }
 console.log(MynewArray);



// 9. Create an array with some elements. Use a loop to empty the entire array so there are no elements left in the end.
let SomArray = [10, 18, 60, 16, 34, 12, 5, 77];
console.log(SomArray);
while (SomArray.length > 0){
    SomArray.pop();
 }
 console.log(SomArray);

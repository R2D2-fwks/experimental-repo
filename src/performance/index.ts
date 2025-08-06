import {forEach} from "lodash";
const arr = Array.from({ length: 1000000 }, (_, i) => i); // Create a large array

console.log("Benchmarking for loop...");
const startTimeFor = performance.now();

for (let i = 0; i < arr.length; i++) {
  // Perform some operation
  let value = arr[i] * 2;
}

const endTimeFor = performance.now();
const elapsedTimeFor = endTimeFor - startTimeFor;
console.log(`For loop execution time: ${elapsedTimeFor.toFixed(3)} milliseconds`);

// Example for forEach
console.log("\nBenchmarking forEach...");
const startTimeForEach = performance.now();

arr.forEach(item => {
  // Perform some operation
  let value = item * 2;
});
const endTimeForEach = performance.now();
const elapsedTimeForEach = endTimeForEach - startTimeForEach;
console.log(`forEach execution time: ${elapsedTimeForEach.toFixed(3)} milliseconds`);

console.log("\nBenchmarking forEachLodash...");
const startTimeforEachLodash = performance.now();
forEach(arr,(item:any)=>{
    let value = item * 2;
})
const endTimeForEachLodash = performance.now();
const elapsedTimeForEachLodash = endTimeForEach - startTimeForEach;
console.log(`forEachLodash execution time: ${elapsedTimeForEach.toFixed(3)} milliseconds`);


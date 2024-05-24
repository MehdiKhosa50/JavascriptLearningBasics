let array = [20,12,1323,45,213,456,13];
let sum=0;
let sum2=0
for(let i=0; i<array.length; i++){
    console.log("Sum of "+sum+ "+" +array[i]+ ":");
    sum = sum+array[i];
    console.log(sum);
}
let average = sum/array.length;
console.log("Average of Array : ",average);

for (let j of array){
    console.log("Sum of "+sum2+ "+" +j+ ":");
    sum2 = sum2+j;
    console.log(sum2);
}
let average2 = sum2/array.length;
console.log(`Average of Array2 : ${average2}`);
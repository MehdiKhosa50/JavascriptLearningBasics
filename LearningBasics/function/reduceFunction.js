let arr = [1,2,3,4,5];
let sum=arr.reduce((previous,current)=>{
    return previous+current;
});
console.log(sum);

let fictorial=arr.reduce((previous,current)=>{
    return previous*current;
})
console.log(fictorial);
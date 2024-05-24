let num = prompt("Enter a number");
if(num%5==0){
    console.log("The ",num," is multiple of 5");
}else{
    console.log("The ",num," is not multiple of 5");
}

let result = num%5==0 ? "The num is multiple of 5" : "The num is not multiple of 5";
console.log(result);

switch (true) {
    case (num % 5 === 0):
        console.log("The", num, "is a multiple of 5");
        break;
    default:
        console.log("The", num, "is not a multiple of 5");
}
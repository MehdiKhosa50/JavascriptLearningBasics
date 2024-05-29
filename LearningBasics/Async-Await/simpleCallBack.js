function myData(a,b,sum){
    a = 5;
    b = 5;
    sum = a+b;
    console.log("My Name is Muhammad Muntazir Mehdi",sum);
}
setTimeout((a,b,sum) => {
    a = 10;
    b = 15;
    sum = a+b;
    console.log("Sum : "+sum);    
}, 3000);
setTimeout(myData,3000);

function Sum(a,b){
    result = a+b;
    console.log("Sum : ",result);
}
Sum(5,6);
function calculator(a,b,sumCallBackFunction){
    sumCallBackFunction(a,b);
}
calculator(1,2, (a,b) =>{
    console.log(a+b);
});
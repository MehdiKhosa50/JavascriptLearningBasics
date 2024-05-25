let arr = [2,3,4,5,6];
let i=0;
arr.forEach((square) => {
    square = square*square;
    square = arr[i]*arr[i];
    console.log("The Square of "+arr[i]+":"+square);
    i++;
})
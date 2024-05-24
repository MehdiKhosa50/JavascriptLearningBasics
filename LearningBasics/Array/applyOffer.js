let originalArray = [400,500,1000,2000,5000];
let array = [...originalArray];
let i=0;
for(let val of array){
    console.log(`Values before having discount: ${val}`);
    let offer = val/10;
    array[i] = array[i]-offer; 
    console.log(`Values after discount 10%: ${array[i]}`);
    i++;
}
array = [...originalArray];
for(let i=0; i<array.length; i++){
    let offer = array[i]/10;
    array[i]-=offer;
    console.log(`Values after discount 10%: ${array[i]}`);
}
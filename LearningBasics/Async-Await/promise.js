let promise = new Promise((resolve,reject) =>{
    console.log("Hello World! from promise.js")
    resolve("The Promise has been Made");
});
function bigData(previousData,nextData){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            //resolve("You promise has been made");
            reject("Promise has been rejected");
            console.log("previousData",previousData);
            if(nextData){
                nextData();
            }
            }, 5000);
    })
}
let promises = bigData(250);
console.log(promise);
console.log(promises);
async function bigData(previousData,nextData){
    return new Promise((resolve, reject) => {  
    setTimeout(() => {
        console.log("previousData",previousData);
        if(nextData){
            nextData();
        }
        resolve("Sucess");
        }, 5000);
    })
}
(async function (resolve){
    await bigData(1);
    await bigData(2);
    await bigData(3);
    await bigData(4);
    await bigData(5);
})();
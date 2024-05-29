function bigData(previousData,nextData){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("sucess");
        console.log("previousData",previousData);
        if(nextData){
            nextData();
        }
        },3000);
    })
}
bigData(1).then( () =>{
    return bigData(2);
}).then( () =>{
    return bigData(3)
}).then( () =>{
    return bigData(4);
}).then( () =>{
    return bigData(5)
})
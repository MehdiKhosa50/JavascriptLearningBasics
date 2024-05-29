function bigData(previousData,nextData){
    setTimeout(() => {
        console.log("previousData",previousData);
        if(nextData){
            nextData();
        }
        }, 5000);
}
bigData(50 , () =>{
    bigData(100, () =>{
        bigData(150, () =>{
            bigData(200);
        })
    });
});
const promiseResp = () =>{
    return new Promise((resolve,reject) => {
        console.log("I am a Promise");
        //resolve("Sucess");
        reject("Rejection")
    })
}
let promise = promiseResp();
promise.then((res) =>{
    console.log("Promise",res);
});
promise.catch((err) =>{
    console.log("AsUsual promise Rejected!",err);
});
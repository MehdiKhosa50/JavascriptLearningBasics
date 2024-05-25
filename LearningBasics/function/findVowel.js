let count = 0;
const arrrowVariable = (word) =>{
    for(let char of word){
        if(char=="a" || char=="e" || char=="i" || char=="o" || char=="u"){
            count++;
        }
    }
    return count;
}
let result = arrrowVariable("MyDream");
console.log(result);